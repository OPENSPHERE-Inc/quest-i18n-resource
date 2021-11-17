import React from "react";
import {usePage} from "../context/Page";
import { ListOfExchanges as Ja } from "../../../frontend/components/ja/ListOfExchanges";
import { ListOfExchanges as En } from "../../../frontend/components/en/ListOfExchanges";


export const ListOfExchangesI18N = () => {
    const { language } = usePage();

    switch (language) {
        case 'ja':
            return <Ja />;
        case 'en':
        default:
            return <En />;
    }
}
