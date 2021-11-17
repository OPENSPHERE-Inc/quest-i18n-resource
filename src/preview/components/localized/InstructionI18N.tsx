import React from "react";
import {usePage} from "../context/Page";
import { Instruction as Ja } from "../../../frontend/components/ja/Instruction";
import { Instruction as En } from "../../../frontend/components/en/Instruction";
import {useParameters} from "./ParametersBuilder";


export const InstructionI18N = () => {
    const { language } = usePage();
    const params = useParameters();

    switch (language) {
        case 'ja':
            return <Ja params={params} />;
        case 'en':
        default:
            return <En params={params} />;
    }
}
