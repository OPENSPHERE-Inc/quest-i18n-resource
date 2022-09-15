import {Link} from "react-router-dom";
import React from "react";
import {Parameters} from "../parameters";


export const Introduction = ({params}: {params: Parameters}) => {
    return <div className="content">
        <h1 className="title is-3">Поддержите эпические испытания!</h1>
        <p>
            QUEST - это новая платформа для стримеров, основанная на блокчейне Symbol.
        </p>
        <div className="block my-6">
            <figure className="image osi-quest-figure">
                <img src="/quest_mechanism_ru.svg" alt="QUEST mechanism" />
            </figure>
        </div>
        { !params.isSignedIn ? <>
            <div className="buttons is-centered are-large mt-6 mb-0">
                <Link to="/signup" className="button is-primary">Зарегистрируйтесь Сейчас</Link>
            </div>
            <div className="buttons is-centered mb-6">
                <Link to="/dashboard" className="button is-text">Войти</Link>
            </div>
        </> : null }
        <div className="columns my-6">
            <div className="column is-three-fifths is-offset-one-fifth">
                <h3 className="title is-5">Что такое КВЕСТ?</h3>
                <p>
                    На что вы нацелены? Чего бы вы хотели добиться?
                </p>
                <p>
                    «Квест» - это достижение, к которому вы стремитесь в потоке.<br/>
                    Зрители, которые ждут вашего интересного квеста, поддерживают ваш квест за счет своего доната.<br/>
                    После выполнения квеста вы получите свою награду. Если вы не завершите свой квест, то XYM будут возвращен первоночальному владельцу, тому кто сделал пожертвования.<br/>
                    Но кто решает, будет ли квест исполнителя успешным или неудачным? Это решаете Вы.<br/>
                    QUEST - это полностью автоматизированная и безопасная среда, реализованная с помощью технологий Symbol.
                </p>
            </div>
        </div>

        <div className="my-6">
            <h3 className="title is-5">QUEST использует блокчейн Symbol</h3>
            <div className="columns">
                <div className="column">
                    <p>
                        Symbol позволяет нам быстро развиваться и безопасно работать с активами XYM, имея при этом отличное юзабилити.<br />
                    </p>
                </div>
                <div className="column is-4 p-6">
                    <a href="https://docs.symbol.dev/" target="_blank" rel="noreferrer">
                        <img src="/Symbol_Logo-wordmark-stacked-dark-BG.svg" alt="Symbol" />
                    </a>
                </div>
            </div>
        </div>

        <div className="columns my-6">
            <div className="column is-three-fifths is-offset-one-fifth">
                <h3 className="title is-5">Где я могу приобрести XYM?</h3>
                { params.networkType === '152' ? <div className="notification">
                    Это тестовый сайт, подключенный к тестнет сети Symbol.
                    Вы можете получить XYM из тестовой сети из<a href="https://testnet.symbol.tools/" target="_blank" rel="noreferrer">Faucet</a>.
                </div> : <p>
                    Вы можете купить XYM на таких биржах, как <a href="https://zaif.jp/" target="_blank" rel="noreferrer">Zaif</a>
                    , <a href="https://gate.io" target="_blank" rel="noreferrer">Gate.io</a>.
                    Полный список бирж <a href="https://coinmarketcap.com/ru/currencies/symbol/markets/" target="_blank" rel="noreferrer">здесь</a>.
                </p> }
            </div>
        </div>
    </div>;
}
