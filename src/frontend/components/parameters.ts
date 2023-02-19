
export interface Parameters {
    isSignedIn: boolean,  // session.user
    networkType: string,  // process.env.REACT_APP_NETWORK_TYPE
    fees: {  // globalConfig.symbol.fees
        deposit: string[],  // toXYM(Long.fromString(fees.deposit[x]))
        deposit_rate: number[],  // fees.deposit_rate[x]
    }
    deadline_duration_min: string;  // moment.duration(globalConfig.quest.deadline_minutes_min, 'minutes')
                                    // .format(str('duration_format_long', 'd [days] h [hours] m [minutes]'), { trim: 'both' })
    deadline_duration_max: string;  // moment.duration(globalConfig.quest.deadline_minutes_max, 'minutes')
                                    // .format(str('duration_format_long', 'd [days] h [hours] m [minutes]'), { trim: 'both' })
    quest_concurrent_max: number;  // globalConfig.quest.concurrent_max
    deposit_amount_max: string;  // toXYM(Long.fromString(globalConfig.quest.deposit.amount_max))
    deposit_balance_max: string;  // toXYM(Long.fromString(globalConfig.quest.deposit.balance_max))
    deposit_message_len_max: number;  // globalConfig.quest.deposit.message_len_max
}
