import {Link} from "react-router-dom";
import React from "react";
import {Parameters} from "../parameters";


export const Introduction = ({params}: {params: Parameters}) => {
    return <div className="content">
        <h1 className="title is-3">Boost epic challenges!</h1>
        <p>
            QUEST is a novel "contingency fee basis" tipping platform that build on block chain technologies.
        </p>
        <div className="block my-6">
            <figure className="image osi-quest-figure">
                <img src="/quest_mechanism.svg" alt="QUEST mechanism" />
            </figure>
        </div>
        { !params.isSignedIn ? <>
            <div className="buttons is-centered are-large mt-6 mb-0">
                <Link to="/signup" className="button is-primary">Signup Now !</Link>
            </div>
            <div className="buttons is-centered mb-6">
                <Link to="/dashboard" className="button is-text">or Sign In</Link>
            </div>
        </> : null }
        <div className="columns my-6">
            <div className="column is-three-fifths is-offset-one-fifth">
                <h3 className="title is-5">What's QUEST?</h3>
                <p>
                    What’s you are aimed on your challenge? What would you like to achieve?
                </p>
                <p>
                    “The quest” is an achievement you are aiming on the challenge.<br/>
                    Supporters who expecting your struggle journey and successful finale boosts vault of the quest by donation.<br/>
                    After you accomplish the quest, you’ll acquire the vault contents. If you don't make it... it'll be refunded to the supporter who donated.<br/>
                    But who judge the quest was succeeded or failed? It’s supporter’s vote.<br/>
                    QUEST main features are full automatic and safe processing that realized by block chain technologies.
                </p>
                <div className="buttons is-centered">
                    <Link to="/docs" className="button is-primary is-medium">Documentation</Link>
                </div>
            </div>
        </div>

        <div className="my-6">
            <div className="columns">
                <div className="column is-align-self-center">
                    <h3 className="title is-5">QUEST uses Symbol block chain</h3>
                    <p>
                        Symbol allowed us rapid developments, secure asset handling, and fine usability.<br />
                        Also, QUEST uses Symbol’s native currency ‘XYM’ to transact with our users.
                    </p>
                </div>
                <div className="column is-3 p-6">
                    <a href="https://docs.symbol.dev/" target="_blank" rel="noreferrer">
                        <img src="/Symbol_Logo-wordmark-stacked-dark-BG.svg" alt="Symbol" />
                    </a>
                </div>
            </div>
        </div>

        <div className="columns my-6">
            <div className="column is-three-fifths is-offset-one-fifth">
                <h3 className="title is-5">Where can I get Symbol native currency ‘XYM’ ?</h3>
                { params.networkType === '152' ? <div className="notification">
                    This is a TEST SITE connected to the Testnet.
                    You can grab XYM for Testnet from the <a href="https://testnet.symbol.tools/" target="_blank" rel="noreferrer">Faucet</a>.
                </div> : <p>
                    You can buy XYM from exchanges such as <a href="https://zaif.jp/" target="_blank" rel="noreferrer">Zaif</a>
                    , <a href="https://gate.io" target="_blank" rel="noreferrer">Gate.io</a>.
                    Complete list is <a href="https://coinmarketcap.com/currencies/symbol/markets/" target="_blank" rel="noreferrer">here</a>.
                </p> }
            </div>
        </div>
    </div>;
}
