import React from "react";
import {usePage} from "../context/Page";
import { Introduction as Ja } from "../../../frontend/components/ja/Introduction";
import { Introduction as En } from "../../../frontend/components/en/Introduction";
import { Introduction as Ru } from "../../../frontend/components/ru/Introduction";
import { Introduction as Ko } from "../../../frontend/components/ko/Introduction";
import {useParameters} from "./ParametersBuilder";


export const IntroductionI18N = () => {
    const { language } = usePage();
    const params = useParameters();

    switch (language) {
        case 'ja':
            return <Ja params={params} />;
        case 'ru':
            return <Ru params={params} />;
        case 'ko':
            return <Ko params={params} />;
        case 'en':
        default:
            return <En params={params} />;
    }
}
