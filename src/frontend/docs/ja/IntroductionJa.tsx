import {Link} from "react-router-dom";
import React from "react";
import {Parameters} from "../parameters";


export const IntroductionJa = ({params}: {params: Parameters}) => {
    return <div className="content">
        <h1 className="title is-3">偉大なチャレンジをブースト！</h1>
        <p>
            QUEST はブロックチェーン技術を使用した、配信者向けの全く新しい投げ銭プラットフォームです。
        </p>
        <div className="block my-6">
            <figure className="image osi-quest-figure">
                <img src="/quest_mechanism.svg" alt="QUEST mechanism" />
            </figure>
        </div>
        { !params.isSignedIn ? <>
            <div className="buttons is-centered are-large mt-6 mb-0">
                <Link to="/signup" className="button is-primary">今すぐサインアップ</Link>
            </div>
            <div className="buttons is-centered mb-6">
                <Link to="/dashboard" className="button is-text">またはサインイン</Link>
            </div>
        </> : null }
        <div className="columns my-6">
            <div className="column is-three-fifths is-offset-one-fifth">
                <h3 className="title is-5">QUESTとは？</h3>
                <p>
                    あなたは配信で何を目指しますか？何を成し遂げようと考えていますか？
                </p>
                <p>
                    クエストとは配信であなたが目指す成果の事です。<br/>
                    あなたの奮闘や最終的な成功に期待している視聴者が、投げ銭によってクエストの「金庫」をブーストします。<br />
                    そして、あなたが見事クエストを達成した暁に、金庫の中身を獲得できるのです。
                    もしも達成できなければ・・・金庫の中身は投げ銭を行った視聴者に返金されます。<br />
                    しかし、一体誰がクエストの成否を判断するのでしょうか？それは視聴者の投票によって行われます。<br />
                    ブロックチェーン技術を駆使し、これら一連の仕組みが、全く自動で安全に処理されるのが QUEST の特徴です。
                </p>
            </div>
        </div>

        <div className="my-6">
            <h3 className="title is-5">QUEST は Symbol ブロックチェーンを使用しています</h3>
            <div className="columns">
                <div className="column">
                    <blockquote>
                        <p>
                            Symbol is the trusted, secure value exchange network for business. Symbol smooths business friction,
                            increasing the flow of data and innovation to supercharge the creation, exchange and protection of assets.
                        </p>
                        <p className="has-text-right">
                            <i><a href="https://symbolplatform.com/">公式ウェブサイトより</a></i>
                        </p>
                    </blockquote>
                    <p>
                        Symbol が迅速な開発と、安全な資産の移動、そして優れたユーザービリティを可能にしました。<br />
                        また、QUEST は Symbol のネイティブ通貨である「XYM」を使用してユーザーとの取引を行います。<br />
                    </p>
                </div>
                <div className="column is-4 p-6">
                    <a href="https://symbolplatform.com/" target="_blank" rel="noreferrer">
                        <img src="/Symbol_Logo-wordmark-stacked-dark-BG.svg" alt="Symbol" />
                    </a>
                </div>
            </div>
        </div>

        <div className="columns my-6">
            <div className="column is-three-fifths is-offset-one-fifth">
                <h3 className="title is-5">Symbol のネイティブ通貨「XYM」は何処で手に入りますか？</h3>

                { params.networkType === '152' ? <div className="notification">
                    このサイトは Testnet に接続されたテストサイトです。
                    Testnet で使用できるテスト用の XYM は
                    <a href="https://testnet.symbol.tools/" target="_blank" rel="noreferrer">フォーセット</a>で入手することが出来ます。
                </div> : <p>
                    XYMの購入は取引所で行えます。国内では
                    <a href="https://zaif.jp/" target="_blank" rel="noreferrer">Zaif</a>、
                    <a href="https://app.bitbank.cc/" target="_blank" rel="noreferrer">bitbank</a>、
                    <a href="https://coin.z.com/" target="_blank" rel="noreferrer">GMOコイン</a>
                    で取り扱いがあります。
                    海外も含めて、XYMを取り扱っている取引所一覧は<a href="https://symbolplatform.com/xym" target="_blank" rel="noreferrer">こちら</a>で確認してください。
                </p> }
            </div>
        </div>
    </div>;
}
