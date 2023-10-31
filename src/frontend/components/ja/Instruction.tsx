import React from "react";
import {Parameters} from "../parameters";


export const Instruction = ({params}: {params: Parameters}) => {
    const fees = params.fees;

    return <div className="content">
        <h1 className="title is-3">QUEST の使い方</h1>

        <h2 className="title is-4" id="environment">1. 動作環境</h2>
        <p>
            ご利用にはインターネット接続環境が必須です。
        </p>

        <h3 className="title is-5">Web ブラウザ</h3>
        <p>
            ※下記のリストは、弊社で確認出来たものです。
        </p>

        <h4 className="title is-6">デスクトップ版</h4>
        <ul>
            <li>Google Chrome 91.0.4472.124</li>
            <li>Microsoft Edge 91.0.864.59</li>
            <li>Firefox 89.0.2</li>
        </ul>

        <h4 className="title is-6">Android版</h4>
        <ul>
            <li>Google Chrome 91.0.4472.120</li>
            <li>Microsoft Edge 46.05.4.5158</li>
            <li>Firefox Daylight 89.1.1 (Build #2015812947)</li>
        </ul>

        <h4 className="title is-6">iOS版</h4>
        <ul>
            <li>Safari 604.1</li>
            <li>Google Chrome 91.0.4472.80</li>
            <li>Firefox Daylight 34.2 (5301)</li>
            <li>Microsoft Edge 46.3.23</li>
        </ul>

        <h3 className="title is-5">Symbol デスクトップウォレットまたはモバイルウォレット</h3>
        <p>
            Symbolアカウントや、クエストで受け取ったXYMを管理したりするために、
            Symbol の<a href="https://docs.symbolplatform.com/ja/wallets.html" target="_blank" rel="noreferrer">デスクトップウォレット</a>、
            またはモバイルウォレット（
            <a href="https://play.google.com/store/apps/details?id=nem.group.symbol.wallet&hl=ja&gl=US" target="_blank" rel="noreferrer">
                Android版
            </a> / <a href="https://apps.apple.com/jp/app/symbol-wallet/id1528741845" target="_blank" rel="noreferrer">
                iOS版
            </a>）
            を導入しましょう。<br />
        </p>

        <h2 className="title is-4 mt-6">2. サインアップと、Symbol アカウントのリンク、または新規生成</h2>
        <p>
            サインアップは、e-mail アドレスとパスワードを入力するだけで完了します。<br />
            サインアップ後、既にお持ちのSymbolアカウントをリンクするか、新しく生成する必要があります。
            アカウントは、支払いと受取の両方に使用します。
        </p>
        <p>
            アカウントをリンクする方法には以下の3つがあります。
        </p>
        <ol>
            <li>
                パブリックキーを入力し、<code>0 XYM</code> とアクティベーションコードを「送金」する（最もセキュアですが少々のトランザクショ
                ンコストが掛かります）
            </li>
            <li>
                秘密鍵を入力する（キーは暗号化されブラウザストレージにのみ保存されます。トランザクションコストは掛かりません）
            </li>
            <li>
                新しくアカウントを生成する（トランザクションコストはかかりません。支払いを行うためにはまず生成されたアカウントに送金する必要があ
                ります）
            </li>
        </ol>
        <p>
            最後に、プロフィールを入力すれば QUEST を使う準備が整います。
        </p>

        <h2 className="title is-4 mt-6">3. 実行者向け：クエストを新規作成し、実行する</h2>
        <p>
            クエストを始めるにはまず「クエストを作成」をクリックして下さい。<br />
            少なくとも「カテゴリ」「タイトル」「詳細」「期限」を入力してください。<br />
            「期限」を必要十分な長さに設定することは重要です。
            長すぎる期限は、期限 + 48時間に達するまでXYMがロックされる可能性が有るため、視聴者に負担をかける場合があります。<br />
            期限は最短でも
            <span> { params.deadline_duration_min } </span>
            先に設定する必要があり、最長では
            <span> { params.deadline_duration_max } </span>
            まで設定可能です。
        </p>
        <blockquote>
            「期限」はクエストを一旦実行した後からは変更することはできません。<br />
        </blockquote>
        <p>
            クエストを作成したらそれを視聴者と共有し、「実行」ボタンをクリックしてください。
        </p>
        <blockquote>
            { params.quest_concurrent_max
                ? `同時に実行できるクエスト最大数は ${params.quest_concurrent_max} 件です。`
                : `同時に実行できるクエスト最大数は無制限です。` }
        </blockquote>
        <p>
            クエストが完了したら、忘れずに「完了」ボタンをクリックしましょう。<br />
            もしも、何らかの理由でクエストを中止したい場合は「中止」をクリックすることにより、金庫の中身全てが返金されます。
        </p>

        <h2 className="title is-4 mt-6">4. 視聴者向け: クエストをブースト（投げ銭を追加）する</h2>
        <p>
            実行者から共有されたクエストのページを開き、「ブースト」ボタンをクリックしてください。<br />
            ブーストしたい金額を入力し、更に気の利いたメッセージを添付しましょう。
        </p>
        <blockquote>
            ブーストは1回につき { params.deposit_amount_max } XYM までで、
            クエスト全体で合計 { params.deposit_balance_max } XYM まで入金することが可能です。<br />
            ブーストに添付できるメッセージの長さは最大 { params.deposit_message_len_max } 文字までです。<br />
            ブーストはクエスト全体の合計 XYM 制限を越えなければ一人で何度でも行うことが出来ます。
        </blockquote>

        <h3 className="title is-5" id="fees">ブースト戦略とプラットフォーム手数料</h3>
        <p>
            ブーストが実行者に授与されるまでには3つの戦略があり、その中から一つを選択することが出来ます。
        </p>
        <table className="table">
            <thead>
            <tr>
                <th>ブースト戦略</th>
                <th>ブースト<br/>手数料（税込）</th>
            </tr>
            </thead>
            <tbody>
            { /*<tr>
                <td>
                    <strong>[タイプA] 実行者を信頼（最も低料金）</strong><br />
                    投票終了後、投票結果に関わらず、あなたのブーストは実行者に授与されます（ただしクエスト中止や期限切れを除きます）
                </td>
                <td className="osi-nowrap">
                    { fees.deposit[2] } XYM
                    { fees.deposit_rate[2]
                        ? <><br /> + ブースト額の{fees.deposit_rate[2] * 100}%</>
                        : null }
                </td>
            </tr>*/ }
            <tr>
                <td>
                    <strong>[タイプB] 投票結果を信頼（お勧め）</strong><br />
                    クエストの完了が投票により承認されると、あなたのブーストは自動的に実行者へ授与されます。
                </td>
                <td className="osi-nowrap">
                    { fees.deposit[0] } XYM
                    { fees.deposit_rate[0]
                        ? <><br /> + ブースト額の{fees.deposit_rate[0] * 100}%</>
                        : null }
                </td>
            </tr>
            <tr>
                <td>
                    <strong>[タイプC] 最終判断が必要（より安全）</strong><br />
                    クエストの達成が投票で承認された後に、あなた自身で授与するか返金を受けるかを判断することが出来ます。
                    ブーストはあなたが判断を行うまでクエスト金庫に保管されます。
                </td>
                <td className="osi-nowrap">
                    { fees.deposit[1] } XYM
                    { fees.deposit_rate[1]
                        ? <><br /> + ブースト額の{fees.deposit_rate[1] * 100}%</>
                        : null }
                </td>
            </tr>
            <tr>
                <td>
                    <strong>[タイプD] 承認後の追いブースト（承認クエストのみ選択可）</strong><br />
                    承認されたクエストは、後からいつでも追いブーストすることができます。 実行者は即座にブーストを受け取ります。
                </td>
                <td className="osi-nowrap">
                    { fees.deposit[3] } XYM
                    { fees.deposit_rate[3]
                        ? <><br /> + ブースト額の{fees.deposit_rate[3] * 100}%</>
                        : null }
                </td>
            </tr>
            </tbody>
        </table>
        <blockquote>
            一度実行したブーストは後から戦略を変更することはできません（新たに行うブーストでは異なる戦略を選択できます）<br />
            いずれの戦略であっても、クエストへの投票権が付与されます。投票権はブースト回数・金額によらず1人1票です。
        </blockquote>

        <h3 className="title is-5">お支払い</h3>
        <p>
            お支払い方法は毎回秘密鍵を入力して行う方法と、
            QUESTのブラウザウォレットを使用する方法の二通りあります。
        </p>
        <p>
            後者は予めサイト上での設定が必要になります。ダッシュボード→設定から「Symbolアカウント」メニューを使用して、
            「ブラウザウォレットを使用」を選択し、秘密鍵を登録してください。<br />
            尚、秘密鍵は暗号化された上でブラウザストレージにのみ保存され、サーバー側には保存されません。
            従って登録したブラウザ上でのみ使用することが出来ます。
        </p>

        <h4 className="title is-6">毎回秘密鍵を入力してお支払い</h4>
        <p>
            発行されたブースト請求書を開くと、支払いフォームが表示されます。
            お支払いに使用するSymbolアカウントの秘密鍵を入力してください。<br />
            更に、トランザクション手数料も選択してください。
            より高い手数料を支払うと、トランザクションの確認がより早く行われます。
            もしその必要がなければ、待ち時間が長くなる代わりに手数料を低く抑えることが出来ます。
        </p>

        <h4 className="title is-6">ブラウザウォレットでのお支払い</h4>
        <p>
            同じく、発行されたブースト請求書を開くと、ブラウザウォレットでのお支払いフォームが表示されます。<br />
            トランザクション手数料を設定した後、
            秘密鍵登録の際に設定したパスフレーズを入力してトランザクションに署名すると、お支払いを完了することが出来ます。
        </p>

        <h2 className="title is-4 mt-6">5. 視聴者向け: 投票する</h2>
        <p>
            実行者がクエストを完了すると、ブーストを行った視聴者はクエストが成功したのかそうでないのかを投票することが出来ます。<br />
            クエストページを開いて、「承認に投票」または「否認に投票」をクリックしてください。<br />
        </p>
        <blockquote>
            投票期間が終了するまでは、いつでも自分の票を変更することが出来ます。<br />
            投票受付期間は、クエスト期限からプラス 48 時間です（v2より。以前はクエスト完了から 24 時間）
        </blockquote>
        <p>
            「承認」が過半数を超えると投票は成功となり、ブーストは実行者に授与されます。<br />
            逆に、投票結果が「否認」という事は、つまり返金を受け取るという事を意味します。
        </p>

        <h2 className="title is-4 mt-6">6. 視聴者向け（「最終判断が必要」を選んだ人): 最終判断する</h2>
        <p>
            投票結果が「承認」で投票期間が終了した後に、クエストページを開き、「授与する」か「返金を受ける」のどちらかを選択してください。
        </p>
        <blockquote>
            最終判断は、投票終了後 7 日以内に行う必要があります（v2より。以前は投票終了から 24 時間）
            期限までに最終判断がなかった場合は「返金を受ける」を選んだものとみなされます。
        </blockquote>

        <h2 className="title is-4 mt-6">7. 実行者向け：ブースト金庫の中身を頂く</h2>
        <p>
            クエストが完了し、投票で承認されれば、金庫の中身は晴れてあなたの物です。自動的にご登録のSymbolアカウントへ送金されます。
            トランザクションの処理は、投票終了から送金完了まで最長で1日程度時間が掛かる場合があります。
            更にブーストの支払い状況によっては、個別に遅れて到着する場合も有ります。<br />
            また、支払い者のブース戦略の選択によって、支払われる合計額が変わります。
            詳しくは「<a href="#fees">ブースト戦略とプラットフォーム手数料</a>」を参照してください。
        </p>

        <h2 className="title is-4 mt-6">8. 視聴者向け：返金を受け取る</h2>
        <p>
            クエストが中止された場合・期限切れとなった場合・投票で否決された場合（かつ戦略にタイプAを選択していない場合）
            ・最終判断で返金を選択した場合は、ブーストしたXYMがあなたのSymbolアカウントに返金されることとなります。<br />
            返金はたとえクエストの期限前に決定されたとしても、必ずクエスト期限から 72 時間後以降（ブースト戦略がタイプ C の場合は 240 時間後以降）に起こります。
            これは QUEST が基盤としているブロックチェーンの仕様で、早めることが出来ません。
        </p>
    </div>;
}
