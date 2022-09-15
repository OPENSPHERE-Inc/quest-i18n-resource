import {Link} from "react-router-dom";
import React from "react";
import {Parameters} from "../parameters";


export const Introduction = ({params}: {params: Parameters}) => {
    return <div className="content">
        <h1 className="title is-3">멋진 도전들에 부스트 해보세요!</h1>
        <p>
        QUEST는 블록체인 기술을 기반으로 하는 스트리머에게 팁을 줄 수 있는 새로운 플랫폼입니다.
        </p>
        <div className="block my-6">
            <figure className="image osi-quest-figure">
                <img src="/quest_mechanism.svg" alt="QUEST mechanism" />
            </figure>
        </div>
        { !params.isSignedIn ? <>
            <div className="buttons is-centered are-large mt-6 mb-0">
                <Link to="/signup" className="button is-primary">지금 바로 회원가입 !</Link>
            </div>
            <div className="buttons is-centered mb-6">
                <Link to="/dashboard" className="button is-text">또는 로그인 하기</Link>
            </div>
        </> : null }
        <div className="columns my-6">
            <div className="column is-three-fifths is-offset-one-fifth">
                <h3 className="title is-5">QUEST는 어떤 것 인가요?</h3>
                <p>
                    어떤게 사용자님의 목표인가요? 이루어내고 싶은게 있으신가요?
                </p>
                <p>
                    “퀘스트(Quest)”는 스트리밍을 하며 목표로 하고자 하는 업적입니다.<br/>
                    고군분투하면서 만들어가는 기나긴 여정과 성공적인 마무리를 기대하는 시청자는 기부를 통해 사용자님의 퀘스트 금고(Vault)에 격려금(Boost)을 늘려갑니다. <br/>
                    이후 사용자님이 성공적으로 퀘스트를 끝내게 되면, 퀘스트 격려금이 담긴 금고를 얻을 수 있습니다. 만약 목표를 이루지 못하게 된다면... 기부해준 시청자님에게 모두 환불 됩니다. <br/>
                    하지만 퀘스트의 성공 여부는 누가 판단하게 될까요? 바로 시청자들의 투표에 의해 결정 됩니다.<br/>
                    QUEST는 위에서 설명한 과정을 블록체인 기술을 사용해 안전하면서 자동으로 진행될 수 있게 해주는 기술 입니다.
                </p>
            </div>
        </div>

        <div className="my-6">
            <h3 className="title is-5">QUEST는 Symbol(심볼) 블록체인을 사용합니다</h3>
            <div className="columns">
                <div className="column">
                    <p>
                        Symbol을 사용해 빠른 개발, 안전한 자산 관리 및 우수한 사용성을 실현했습니다.<br />
                        또한, QUEST는 Symbol의 기본 통화인 ‘XYM’을 사용해 사용자간 거래가 가능합니다.
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
                <h3 className="title is-5">어디에서 Symbol의 기본 통화인 ‘XYM’을 가질 수 있나요 ?</h3>
                { params.networkType === '152' ? <div className="notification">
                    해당 사이트는 테스트용 사이트임으로 Testnet에 연결됩니다.
                    XYM을 Testnet의 <a href="https://testnet.symbol.tools/" target="_blank" rel="noreferrer">파우셋(Faucet)</a>에서 받을 수 있습니다.
                </div> : <p>
                    아니면 XYM을 <a href="https://bithumb.com/" target="_blank" rel="noreferrer">빗썸(Bithumb)</a>과 같은 거래소에서 구매할 수 있습니다.<br/>
                    모든 목록을 확인하려면 <a href="https://coinmarketcap.com/ko/currencies/symbol/markets/" target="_blank" rel="noreferrer">여기</a>를 참조하세요.
                </p> }
            </div>
        </div>
    </div>;
}
