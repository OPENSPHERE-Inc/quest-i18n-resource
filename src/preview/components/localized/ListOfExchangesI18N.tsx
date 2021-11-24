import React from "react";
import {usePage} from "../context/Page";
import { ListOfExchanges as Ja } from "../../../frontend/components/ja/ListOfExchanges";
import { ListOfExchanges as En } from "../../../frontend/components/en/ListOfExchanges";
import { ListOfExchanges as Ru } from "../../../frontend/components/ru/ListOfExchanges";


export const ListOfExchangesI18N = () => {
    const { language } = usePage();

    switch (language) {
        case 'ja':
            return <Ja />;
        case 'ru':
            return <Ru />;
        case 'en':
        default:
            return <En />;
    }
}
