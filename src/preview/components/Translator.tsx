import React, {useMemo} from "react";
import {usePage} from "./context/Page";


export const Translator = () => {
    const { strRaw, str, language } = usePage();

    const translators = useMemo(() => {
        let names = strRaw('translator_names', []);
        if (!Array.isArray(names)) {
            names = [names];
        }
        let urls = strRaw('translator_urls', []);
        if (!Array.isArray(urls)) {
            urls = [urls];
        }

        return names.map((name, index) => ({ name, url: urls[index] }));
    }, []);

    return language !== 'ja' && language !== 'en' && translators.length ? <div className="content has-text-centered my-6">
        <h3 className="title is-5">{ str('translator_title', 'Translated by') }</h3>

        <ul className="osi-url-links">
            { translators.map((translator, index) =>
                <li key={index}>
                    { translator.name }
                    { translator.url
                        ? <span> - <a href={translator.url} target="_blank" rel="noreferrer">{translator.url}</a></span>
                        : null
                    }
                </li>
            )}
        </ul>
    </div> : null;
}
