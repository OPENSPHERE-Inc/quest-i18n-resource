import React from "react";
import {usePage} from "../context/Page";
import { Instruction as Ja } from "../../../frontend/components/ja/Instruction";
import { Instruction as En } from "../../../frontend/components/en/Instruction";
import { Instruction as Ru } from "../../../frontend/components/ru/Instruction";
import { Instruction as Ko } from "../../../frontend/components/ko/Instruction";
import {useParameters} from "./ParametersBuilder";


export const InstructionI18N = () => {
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
