import React, {createContext, PropsWithChildren, useCallback, useContext, useState} from "react";
import ja from "../../../frontend/definitions/ja/localize.json";
import en from "../../../frontend/definitions/en/localize.json";
import ru from "../../../frontend/definitions/ru/localize.json";
import ko from "../../../frontend/definitions/ko/localize.json";
import {format} from "util";
import {getDefaultLanguage} from "../../libs/utils";
import {useMedia} from "use-media";


export enum SupportedLanguages {
    ENGLISH = 'en',
    JAPANESE = 'ja',
    RUSSIAN = 'ru',
    KOREAN = 'ko'
}

const isSupportedLanguage = (value: any): value is SupportedLanguages =>
    Object.values(SupportedLanguages).includes(value);

const defaultLanguage = (() => {
    const language = getDefaultLanguage();
    if (isSupportedLanguage(language)) {
        return language;
    } else {
        return SupportedLanguages.ENGLISH;
    }
})();

const resources: { [language: string]: { [id: string]: string | string[] } } = {
    "ja": ja,
    "en": en,
	"ru": ru,
    "ko": ko
}

interface PageContextStore {
    proceeding: boolean,
    setProceeding: (value: boolean) => void,
    loading: boolean,
    setLoading: (value: boolean) => void,
    language: SupportedLanguages,
    setLanguage: React.Dispatch<React.SetStateAction<SupportedLanguages>>,
    str: (id: string, defaultStr: string | string[], ...params: any[]) => string,
    strEn: (id: string, defaultStr: string | string[], ...params: any[]) => string,
    strRaw: (id: string, defaultStr: string | string[]) => string | string[],
    siteTitle: (subTitle?: string) => string,
    isTouch: boolean,
}

const PageContext = createContext({} as PageContextStore);

export const PageProvider = (props: PropsWithChildren) => {
    const [ proceeding, setProceeding ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ language, setLanguage ] = useState<SupportedLanguages>(defaultLanguage);
    const isTouch = useMedia({maxWidth: '1023px'});

    const str = useCallback((id: string, defaultStr: string | string[], ...params: any[]) => {
        const  template = resources[language]?.[id] || defaultStr;
        return format(Array.isArray(template) ? template.join('\n') : template, ...params);
    }, [language]);

    const strEn = useCallback((id: string, defaultStr: string | string[], ...params: any[]) => {
        const  template = resources['en']?.[id] || defaultStr;
        return format(Array.isArray(template) ? template.join('\n') : template, ...params);
    }, []);

    const strRaw = useCallback((id: string, defaultStr: string | string[]) => {
        return resources[language]?.[id] || defaultStr;
    }, [language]);

    const siteTitle = useCallback((subTitle?: string) => {
        if (process.env.REACT_APP_NETWORK_TYPE === '152') {
            return `${str('site_title_test', 'QUEST on Testnet')}${subTitle ? ` | ${subTitle}` : ''}`
        } else {
            return `${str('site_title', 'QUEST')}${subTitle ? ` | ${subTitle}` : ''}`;
        }
    }, [str]);

    const initialState: PageContextStore = {
        proceeding,
        setProceeding,
        loading,
        setLoading,
        language,
        setLanguage,
        str,
        strEn,
        strRaw,
        siteTitle,
        isTouch,
    };

    return <PageContext.Provider value={initialState}>
        {props.children}
    </PageContext.Provider>;
}

export const usePage = () => {
    return useContext(PageContext);
}
