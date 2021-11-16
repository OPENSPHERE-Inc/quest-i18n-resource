
export interface Parameters {
    isSignedIn: boolean,  // session.user
    networkType: string,  // process.env.REACT_APP_NETWORK_TYPE
    fees: {  // globalConfig.symbol.fees
        deposit: string[],  // toXYM(Long.fromString(fees.deposit[x]))
        deposit_rate: number[],  // fees.deposit_rate[x]
    }
    deadline_duration_min: string;  // moment.duration(globalConfig.quest.deadline_minutes_min, 'minutes')
                                    // .format('d [days] h [hours] m [minutes]', { trim: 'both' })
                                    // .format('d[日] h[時間] m[分]', { trim: 'both' })
    deadline_duration_max: string;  // moment.duration(globalConfig.quest.deadline_minutes_max, 'minutes')
                                    // .format('d [days] h [hours] m [minutes]', { trim: 'both' })
                                    // .format('d[日] h[時間] m[分]', { trim: 'both' })
    quest_runnings_max: number;  // globalConfig.quest.runnings_max
    deposit_amount_max: string;  // toXYM(Long.fromString(globalConfig.quest.deposit.amount_max))
    deposit_balance_max: string;  // toXYM(Long.fromString(globalConfig.quest.deposit.balance_max))
    deposit_message_len_max: number;  // globalConfig.quest.deposit.message_len_max
}
