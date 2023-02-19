import React from "react";
import {toXYM} from "../../libs/utils";
import {usePage} from "../context/Page";
import moment from "moment";
import Long from "long";
import { Parameters } from "../../../frontend/components/parameters";


export const useParameters = (): Parameters => {
    const { str } = usePage();

    return {
        isSignedIn: false,
        networkType: String(process.env.REACT_APP_NETWORK_TYPE),
        fees: {
            deposit: [ '2200000', '3300000', '1100000' ].map((fee) => toXYM(Long.fromString(fee))),
            deposit_rate: [ 0, 0, 0 ],
        },
        deadline_duration_min:
            moment.duration(30, 'minutes')
                .format(str('duration_format_long', 'd [days] h [hours] m [minutes]'), { trim: 'both' }),
        deadline_duration_max:
            moment.duration(60 * 24 * 60, 'minutes')
                .format(str('duration_format_long', 'd [days] h [hours] m [minutes]'), { trim: 'both' }),
        quest_concurrent_max: 19,
        deposit_amount_max: toXYM(Long.fromString('5000000000')),
        deposit_balance_max: toXYM(Long.fromString('50000000000')),
        deposit_message_len_max: 140,
    };
}
