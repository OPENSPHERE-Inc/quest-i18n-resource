import React from "react";
import { Parameters } from "../parameters";


export const Instruction = ({params}: {params: Parameters}) => {
    const fees = params.fees;

    return <div className="content">
        <h1 className="title is-3">How to use QUEST</h1>

        <h2 className="title is-4" id="environment">1. System requirements</h2>
        <p>
            Internet connection is required.<br />
        </p>

        <h3 className="title is-5">Web browser</h3>
        <p>
            * Below browsers are confirmed on our hand.
        </p>

        <h4 className="title is-6">On desktop</h4>
        <ul>
            <li>Google Chrome 91.0.4472.124</li>
            <li>Microsoft Edge 91.0.864.59</li>
            <li>Firefox 89.0.2</li>
        </ul>

        <h4 className="title is-6">On Android</h4>
        <ul>
            <li>Google Chrome 91.0.4472.120</li>
            <li>Microsoft Edge 46.05.4.5158</li>
            <li>Firefox Daylight 89.1.1 (Build #2015812947)</li>
        </ul>

        <h4 className="title is-6">On iOS</h4>
        <ul>
            <li>Safari 604.1</li>
            <li>Google Chrome 91.0.4472.80</li>
            <li>Firefox Daylight 34.2 (5301)</li>
            <li>Microsoft Edge 46.3.23</li>
        </ul>

        <h3 className="title is-5">Symbol Desktop Wallet or Mobile Wallet</h3>
        <p>
            To manage account or receive XYM by quests, you should install
            Symbol <a href="https://docs.symbolplatform.com/wallets.html" target="_blank" rel="noreferrer">Desktop Wallet</a> or
            Mobile Wallet (
            <a href="https://play.google.com/store/apps/details?id=nem.group.symbol.wallet&hl=en&gl=US" target="_blank" rel="noreferrer">
                for Android
            </a> / <a href="https://apps.apple.com/us/app/symbol-wallet/id1528741845" target="_blank" rel="noreferrer">
                for iOS
            </a>)
        </p>

        <h2 className="title is-4 mt-6">2. Signup and link existing or create new Symbol account.</h2>
        <p>
            Signup will be done just few step with e-mail and password.<br />
            After signed up, you need to link existing Symbol account (if you already have one) or generate new one.
            That account will be used both of payment and receive XYM.
        </p>
        <p>
            To link account, you can choose one of 3 methods.
        </p>
        <ol>
            <li>
                Input public key and transfer <code>0 XYM</code> + activation code (Most secure but require small
                transaction cost)
            </li>
            <li>
                Input private key (The key will be encrypted and stored into browser storage only. No transaction cost)
            </li>
            <li>
                Generate new one (No transaction cost. Assets transfers needed to payment)
            </li>
        </ol>
        <p>
            Finally, input your profile then ready to use QUEST.
        </p>

        <h2 className="title is-4 mt-6">3. For performer: Create new quest and perform it.</h2>
        <p>
            Click “New Quest” to begin your quest.<br />
            At least, Input category, title, description and deadline of quest.<br />
            It’s important that deadline should be necessary and sufficient term.
            Too long deadline may be thought burden by viewer because XYM possibly be locked until deadline plus 48
            hours has been reached.<br />
            Deadline must be
            <span> { params.deadline_duration_min } </span>
            at the shortest, and can be set up to
            <span> { params.deadline_duration_max } </span>
            future longest.
        </p>
        <blockquote>
            "Deadline" couldn't be changed after started the quest.
        </blockquote>
        <p>
            Once you created quest, share it with your viewers and click “Perform” button.
        </p>
        <blockquote>
            { params.quest_concurrent_max
                ? `Maximum number of performing is ${params.quest_concurrent_max}.`
                : `Maximum number of performing is unlimited.` }
        </blockquote>
        <p>
            When you’ve completed the quest, don’t forget click “Complete” button.<br />
            If you want to abort the quest  for any reason, click “Abort” then all contents of vault will be refunded.
        </p>

        <h2 className="title is-4 mt-6">4. For viewer: Boost quest.</h2>
        <p>
            Open the quest page that has been shared by performer and click “Boost” button.<br />
            Input amount you’ll boost, also attach thoughtful message.<br />
        </p>
        <blockquote>
            You can deposit {  params.deposit_amount_max } XYM maximum per boost, but when you activate <code>Limit Break</code>,
            maximum amount is gained up to x20.<br />
            Also the performer can set maximum amount that can be received in total.<br />
            Attached message can be maximum { params.deposit_message_len_max } characters long.<br />
            You can boost many times unless exceeding the quest's maximum XYM limitation.
        </blockquote>

        <h3 className="title is-5" id="fees">Boost strategy and platform fee.</h3>
        <p>
            There’re 3 strategies until your boosts are awarded to the performer and you can choose one of them.
        </p>
        <table className="table">
            <thead>
            <tr>
                <th>Boost Strategy</th>
                <th>Boost Fee<br />(Incl. tax)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <strong>[Type.A] Trust the performer (Cheapest fee)</strong><br />
                    After end of voting, your boosts will be awarded to performer regardless of voting result
                    (Except aborted or deadline reached)
                </td>
                <td className="osi-nowrap">
                    <strong>
                        { fees.deposit[2] } XYM
                        { fees.deposit_rate[2]
                            ? <><br /> + {fees.deposit_rate[2] * 100}% of amount</>
                            : null }
                    </strong>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>[Type.B] Trust the vote result (Recommended)</strong><br />
                    After approved the quest completion via voting,
                    your boosts will be automatically awarded to performer.
                </td>
                <td className="osi-nowrap">
                    <strong>
                        { fees.deposit[0] } XYM
                        { fees.deposit_rate[0]
                            ? <><br /> + {fees.deposit_rate[0] * 100}% of amount</>
                            : null }
                    </strong>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>[Type.C] Require a final decision (More safety)</strong><br />
                    After approved the quest completion via voting,
                    you can decide for yourself whether you want to award or receive a refund.
                    Your boosts will be locked until a decision is made.
                </td>
                <td className="osi-nowrap">
                    <strong>
                        { fees.deposit[1] } XYM
                        { fees.deposit_rate[1]
                            ? <><br /> + {fees.deposit_rate[1] * 100}% of amount</>
                            : null }
                    </strong>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>[Type.D] Post approval boost (Approved quest only)</strong><br />
                    You can send a chip to approved quest. The performer will receive your boost immediately.
                </td>
                <td className="osi-nowrap">
                    <strong>
                        { fees.deposit[3] } XYM
                        { fees.deposit_rate[3]
                            ? <><br /> + {fees.deposit_rate[3] * 100}% of amount</>
                            : null }
                    </strong>
                </td>
            </tr>
            </tbody>
        </table>
        <blockquote>
            Once done the boost cannot modify the strategy (New boost can be chosen another strategy)<br />
            Whichever strategy you choose, you’ll have vote power on the quest.
            You'll have one ballot regardless boost times or amount.
        </blockquote>

        <h3 className="title is-5">Payment</h3>
        <p>
            You can done the payment either of inputting private key every transactions or QUEST's browser wallet.
        </p>
        <p>
            Latter needs some settings on the site before use. Open "Symbol account" settings from settings page.
            Choose "I use browser wallet" then register your private key and passphrase.<br />
            Browser wallet will encrypts and saves your private key to the browser storage only.
            Therefore you can use the wallet on registered browser only.
        </p>

        <h4 className="title is-6">Payment with inputting private key</h4>
        <p>
            Open issued boost invoice then you can get payment form.
            Input your private key of Symbol account.<br />
            Also choose transaction fee which you want use.
            Higher fee can make faster the speed of transaction confirmation.
            If it unnecessary, you can keep lower fee by longer waiting time.
        </p>

        <h4 className="title is-6">Payment with browser wallet</h4>
        <p>
            Same as above, open boost invoice then you'll get browser wallet payment form.<br />
            Done the payment by inputting transaction fee and passphrase of your private key.
        </p>

        <h2 className="title is-4 mt-6">5. For viewer: Vote</h2>
        <p>
            Once performer has completed the quest,
            viewers who boosted can vote either the quest is succeeded or failed.<br />
            Open the quest page and click “Vote acknowledge” or “Vote denial”.<br />
        </p>
        <blockquote>
            You can change your vote at any time until the voting period has end.<br />
            Voting period is 48h from the quest completion (from v2. Previously 24 hours after quest completion)
        </blockquote>
        <p>
            It’ll succeed if acknowledge is majority, as a result, boosts will be awarded to performer.<br />
            On the other hand, failed to vote means you’ll get a refund.
        </p>

        <h2 className="title is-4 mt-6">6. For viewer(who chose “Require a final decision”) : Final decision</h2>
        <p>
            After the voting period has end with succeed, open the quest page and click “Award” or “Get a Refund”.
        </p>
        <blockquote>
            You should decide in 7 days after voting end (from v2. Previously 24 hours after voting end)
            If you didn't make decision by the deadline, it's same as you chose "Get a Refund".
        </blockquote>

        <h2 className="title is-4 mt-6">7. For performer：Earn vault contents</h2>
        <p>
            Once quest has been completed and approved it by voting, the vault contents is yours.
            It's possible that transaction process take around 1 day from voting end to transfer finish.
            Furthermore, depending on boost payment status, it may late individually.<br />
            Also, the total amount get changed depending on payer's boost strategy choice.
            For more detail, See the <a href="#fees">Boost strategy and platform fee</a>.
        </p>

        <h2 className="title is-4 mt-6">8. For viewer：Get a refund</h2>
        <p>
            Refunding the boosted XYM will be happen when any one of these cases: quest was aborted, expired,
            denied by voting (except chose type.A as boost strategy), chose "Get a Refund" as final decision.<br />
            Refunding always occurs at 48 hours later (72 hours later in Type.C) of quest deadline even if it had been decided early.
            It's impossible to bring the date forward,
            because this is limitation of blockchain which QUEST is using.
        </p>
    </div>;
}
