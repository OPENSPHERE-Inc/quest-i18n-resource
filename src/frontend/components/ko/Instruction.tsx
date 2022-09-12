import React from "react";
import { Parameters } from "../parameters";


export const Instruction = ({params}: {params: Parameters}) => {
    const fees = params.fees;

    return <div className="content">
        <h1 className="title is-3">QUEST 사용 방법</h1>

        <h2 className="title is-4" id="environment">1. 시스템 요구사항</h2>
        <p>
            인터넷 연결이 필요합니다.<br />
        </p>

        <h3 className="title is-5">웹 브라우저</h3>
        <p>
            * 아래 브라우저들은 직접 확인 되었습니다.
        </p>

        <h4 className="title is-6">데스크탑 용</h4>
        <ul>
            <li>Google Chrome 91.0.4472.124</li>
            <li>Microsoft Edge 91.0.864.59</li>
            <li>Firefox 89.0.2</li>
        </ul>

        <h4 className="title is-6">안드로이드 용</h4>
        <ul>
            <li>Google Chrome 91.0.4472.120</li>
            <li>Microsoft Edge 46.05.4.5158</li>
            <li>Firefox Daylight 89.1.1 (Build #2015812947)</li>
        </ul>

        <h4 className="title is-6">iOS 용</h4>
        <ul>
            <li>Safari 604.1</li>
            <li>Google Chrome 91.0.4472.80</li>
            <li>Firefox Daylight 34.2 (5301)</li>
            <li>Microsoft Edge 46.3.23</li>
        </ul>

        <h3 className="title is-5">Symbol 데스크탑 지갑 또는 모바일 지갑</h3>
        <p>
            계정 관리 및 퀘스트를 통해 XYM을 받으려면, Symbol의 <a href="https://docs.symbolplatform.com/wallets.html" target="_blank" rel="noreferrer">데스크탑 지갑</a> 또는 모바일 지갑 (
            <a href="https://play.google.com/store/apps/details?id=nem.group.symbol.wallet&hl=en&gl=US" target="_blank" rel="noreferrer">
                안드로이드 용
            </a> / <a href="https://apps.apple.com/us/app/symbol-wallet/id1528741845" target="_blank" rel="noreferrer">
                iOS 용
            </a>)이 설치 되어 있어야합니다.
        </p>

        <h2 className="title is-4 mt-6">2. 회원가입 후 기존 Symbol 계좌를 연결하거나 새로운 Symbol 계좌를 만드십시오.</h2>
        <p>
            회원가입은 간단하게 이메일과 비밀번호만 사용해 몇 가지 단계만 거치면 됩니다.<br />
            회원가입 후, 기존 Symbol 계좌를 연결하거나 새로운 계좌를 생성해야합니다.
            해당 계좌는 XYM의 결제와 보상 지급 부분에 사용됩니다.
        </p>
        <p>
            계좌 연결은 아래 3가지 방법을 통해 진행 가능합니다.
        </p>
        <ol>
            <li>
                공개 키 입력 및 <code>0 XYM</code> + 활성화 코드를 전송 (가장 안전하지만 트랜잭션에 조금의 비용이 발생함)
            </li>
            <li>
                개인 키 입력 (키는 암호화되어 브라우저 저장소에 저장됩니다. 트랜잭션 비용 없음)
            </li>
            <li>
                신규 생성 (트랜잭션 비용 없음. 지불하기 위해서는 기존 계좌에서 자산 이동이 필요함)
            </li>
        </ol>
        <p>
            마지막으로, 프로필 입력을 완료하면 QUEST를 사용할 준비가 끝납니다.
        </p>

        <h2 className="title is-4 mt-6">3. 수행자 용: 새로운 퀘스트를 생성하고 수행합니다.</h2>
        <p>
            “새로운 퀘스트”를 눌러 퀘스트를 시작하세요.<br />
            최소한 퀘스트의 카테고리, 제목, 설명 그리고 마감일을 입력하세요.<br />
            마감일은 필요한 만큼 적당하게 잡는 것이 중요합니다.
            마감일이 너무 길면 기부한 XYM이 마감일 + 48 시간 만큼 잠금되기 떄문에 시청자가 부담스럽게 생각할 수 있습니다.<br />
            마감일은 최소
            <span> { params.deadline_duration_min } </span>
            부터 가능하며, 최대 
            <span> { params.deadline_duration_max } </span>
            까지 가능합니다.
        </p>
        <blockquote>
            "마감일(Deadline)"은 퀘스트를 시작한 뒤 변경이 불가능합니다.
        </blockquote>
        <p>
            퀘스트를 생성한 뒤 시청자에게 공유하기 위해서 "시작" 버튼을 눌러주세요.
        </p>
        <blockquote>
            { params.quest_runnings_max
                ? `최대 시작 가능한 퀘스트 수는 ${params.quest_runnings_max}개 입니다.`
                : `최대 시작 가능한 퀘스트 수는 제한이 없습니다.` }
        </blockquote>
        <p>
            퀘스트를 완료했다면 잊지 말고 "완료" 버튼을 눌러주세요.<br />
            만약 어떠한 이유로 인해 퀘스트를 중단하고 싶다면, "중단" 버튼을 눌러주세요. 모든 금고 잔액이 환불 됩니다.
        </p>

        <h2 className="title is-4 mt-6">4. 시청자 용: 퀘스트를 격려해보세요.</h2>
        <p>
            수행자로 부터 공유 받은 퀘스트 페이지를 열고 "격려" 버튼을 눌러주세요.<br />
            수량을 입력한 만큼 격려금이 전달 됩니다. 또한 입력한 메시지도 함께 전달됩니다.<br />
        </p>
        <blockquote>
            격려 1회당 최대 {  params.deposit_amount_max } XYM 을 입금 할 수 있지만, <code>Limit Break</code>를 활성화 하면 최대 20배 까지 입금 가능합니다.<br/>
            또한 수행자는 총 수령할 수 있는 금액을 설정할 수 있습니다.<br />
            첨부할 수 있는 최대 메시지의 글자 수는 { params.deposit_message_len_max } 입니다.<br />
            퀘스트의 최대 XYM 제한을 초과하지 않는 한 여러번 격려할 수 있습니다.
        </blockquote>

        <h3 className="title is-5" id="fees">격려 전략 및 플랫폼 수수료</h3>
        <p>
            수행자를 격려하는 전략에는 3가지 전략이 있으며, 그중 하나를 선택할 수 있습니다.
        </p>
        <table className="table">
            <thead>
            <tr>
                <th>격려 전략</th>
                <th>격려 수수료<br />(세금 포함)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <strong>[유형.A] 수행자를 신뢰함 (수수료가 제일 저렴함)</strong><br />
                    투표가 완료 된 후, 격려금이 투표 결과와 상관없이 수행자에게 지급됩니다.
                    (마감일이 지나거나 중단했을 경우는 예외)
                </td>
                <td className="osi-nowrap">
                    <strong>
                        { fees.deposit[2] } XYM
                        { fees.deposit_rate[2]
                            ? <><br /> + 총 수량의 {fees.deposit_rate[2] * 100}%</>
                            : null }
                    </strong>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>[유형.B] 투표 결과를 신뢰함 (추천)</strong><br />
                    퀘스트가 투표를 통해 승인 되면, 격려금이 자동으로 수행자에게 지급 됩니다.
                </td>
                <td className="osi-nowrap">
                    <strong>
                        { fees.deposit[0] } XYM
                        { fees.deposit_rate[0]
                            ? <><br /> + 총 수량의 {fees.deposit_rate[0] * 100}%</>
                            : null }
                    </strong>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>[유형.C] 최종 승인을 통해 결정 (더욱 안전함)</strong><br />
                    퀘스트가 투표를 통해 승인된 뒤, 보상을 지급할지 아니면 환불 받을지 최종 승인 절차를 한번더 거치게 됩니다. 최종 결정이 완료될 때 까지 격려금은 잠금 처리 됩니다.
                </td>
                <td className="osi-nowrap">
                    <strong>
                        { fees.deposit[1] } XYM
                        { fees.deposit_rate[1]
                            ? <><br /> + 총 수량의 {fees.deposit_rate[1] * 100}%</>
                            : null }
                    </strong>
                </td>
            </tr>
            </tbody>
        </table>
        <blockquote>
            한번 결정된 격려 전략은 수정이 불가능합니다(새로운 격려는 다른 전략을 선택할 수 있습니다)<br />
            어떤 전략을 선택하든 퀘스트에 대한 투표권을 가지게 됩니다. 격려 시작 시간이나 금액에 관계없이 1개의 투표용지를 받게 됩니다.
        </blockquote>

        <h3 className="title is-5">결제</h3>
        <p>
            You can done the payment either of inputting private key every transactions or QUEST's browser wallet.
        </p>
        <p>
            Latter needs some settings on the site before use. Open "Symbol account" settings from settings page.
            Choose "I use browser wallet" then register your private key and passphrase.<br />
            Browser wallet will encrypts and saves your private key to the browser storage only.
            Therefore you can use the wallet on registered browser only.
        </p>

        <h4 className="title is-6">개인 키 입력을 통한 결제</h4>
        <p>
            Open issued boost invoice then you can get payment form.
            Input your private key of Symbol account.<br />
            Also choose transaction fee which you want use.
            Higher fee can make faster the speed of transaction confirmation.
            If it unnecessary, you can keep lower fee by longer waiting time.
        </p>

        <h4 className="title is-6">브라우저 지갑을 통한 결제</h4>
        <p>
            Same as above, open boost invoice then you'll get browser wallet payment form.<br />
            Done the payment by inputting transaction fee and passphrase of your private key.
        </p>

        <h2 className="title is-4 mt-6">5. 시청자 용: 투표 진행해보세요.</h2>
        <p>
            수행자가 퀘스트를 완료하면, 시청자가 퀘스트 성공 또는 실패에 투표할 수 있습니다.<br />
            퀘스트 페이지를 열고 "승인 투표" 또는 "거절 투표" 중 하나를 눌러주세요.<br />
        </p>
        <blockquote>
            투표 기간이 종료되기 전에는 언제든 결정을 변경할 수 있습니다.<br />
            투표 기간은 퀘스트 완료 후 24시간 동안 진행됩니다.
        </blockquote>
        <p>
            승인이 과반수일 경우에는 수행자에게 격려금 금고가 지급됩니다.<br />
            반면에 거절되면, 유형.B와 유형.C를 선택한 시청자의 환불 절차를 진행하게 됩니다.
        </p>

        <h2 className="title is-4 mt-6">6. 시청자 용(“최종 승인을 통해 결정”전략만 선택자만 해당) : 최종 승인을 통해 결정</h2>
        <p>
            투표가 성공적으로 마무리 된다면, 퀘스트 페이지를 열어 "보상 지급" 또는 "환불 받기" 버튼을 눌러주세요.
        </p>
        <blockquote>
            투표 종료 후 24시간 이내에 결정해야 합니다. 기한까지 결정 하지 않을 경우 "환불 받기" 버튼을 누른 것으로 간주합니다.
        </blockquote>

        <h2 className="title is-4 mt-6">7. 수행자 용 : 금고 자금 획득</h2>
        <p>
            퀘스트가 완료되고 투표로 승인되면 금고 자금이 지급 됩니다. 트랜잭션 절차는 투표 종료부터 이체 완료까지 약 1일 정도 소모 될 수 있습니다. 또한 격려금의 결제 상황에 따라 조금 더 지연될 수도 있습니다.<br />
            또한, 지불자의 격려 전략에 따라 총 금액이 변경 됩니다. 자세한 내용은 <a href="#fees">격려 전략 및 플랫폼 수수료</a>를 참조하세요.
        </p>

        <h2 className="title is-4 mt-6">8. 시청자 용 : 환불 받기</h2>
        <p>
        격려에 사용된 XYM의 환불은 퀘스트가 중단, 만료, 투표에 의해 거부된 경우(격려 전략으로 유형.A을 선택 경우는 제외), 최종 결정으로 "환불 받기"를 선택한 경우에 발생합니다.<br />
        환불은 조기에 결정했더라도 퀘스트 마감 48시간 후(유형.C는 72시간 후)에 지급 됩니다. QUEST가 사용하는 블록체인의 기술 정책이기 때문에 날짜를 앞당기는 것은 불가능합니다.
        </p>
    </div>
}
