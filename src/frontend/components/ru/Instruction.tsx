import React from "react";
import { Parameters } from "../parameters";


export const Instruction = ({params}: {params: Parameters}) => {
    const fees = params.fees;

    return <div className="content">
        <h1 className="title is-3">Как использовать сайт QUEST</h1>

        <h2 className="title is-4" id="environment">1. Системные требования</h2>
        <p>
            Требуется подключение к Интернету.<br />
        </p>

        <h3 className="title is-5">Веб-браузер</h3>
        <p>
            * Приведенные ниже браузеры подтверждены с нашей стороны.
        </p>

        <h4 className="title is-6">Для десктопной версии</h4>
        <ul>
            <li>Google Chrome 91.0.4472.124</li>
            <li>Microsoft Edge 91.0.864.59</li>
            <li>Firefox 89.0.2</li>
        </ul>

        <h4 className="title is-6">Для Android</h4>
        <ul>
            <li>Google Chrome 91.0.4472.120</li>
            <li>Microsoft Edge 46.05.4.5158</li>
            <li>Firefox Daylight 89.1.1 (Build #2015812947)</li>
        </ul>

        <h4 className="title is-6">Для iOS</h4>
        <ul>
            <li>Safari 604.1</li>
            <li>Google Chrome 91.0.4472.80</li>
            <li>Firefox Daylight 34.2 (5301)</li>
            <li>Microsoft Edge 46.3.23</li>
        </ul>

        <h3 className="title is-5">Десктопный или мобильный кошелек Symbol</h3>
        <p>
            Чтобы управлять аккаунтом или получать XYM с помощью сайта QUEST, вам необходимо установить
            Symbol <a href="https://docs.symbolplatform.com/wallets.html" target="_blank" rel="noreferrer">Десктопный кошелек</a> или
            мобильный кошелек (
            <a href="https://play.google.com/store/apps/details?id=nem.group.symbol.wallet&hl=en&gl=US" target="_blank" rel="noreferrer">
                для Android
            </a> / <a href="https://apps.apple.com/us/app/symbol-wallet/id1528741845" target="_blank" rel="noreferrer">
                для iOS
            </a>)
        </p>

        <h2 className="title is-4 mt-6">2. Зарегистрируйтесь здесь и свяжите ваш актуальный аккаунт Symbol с нашим сайтом.</h2>
        <p>
            Регистрация будет выполнена всего за несколько этапов с помощью электронной почты и пароля.<br />
            После регистрации на нашем сайте, вам необходимо связать ваш существующий аккаунт Symbol с сайтом QUEST.
            Этот аккаунт будет использоваться как для оплаты, так и для получения XYM.
        </p>
        <p>
            Чтобы связать аккаунт, вы можете выбрать один из 3 способов.
        </p>
        <ol>
            <li>
                Введите публичный ключ и отправьте транзакцию <code>0 XYM</code> + Кроме того, привязка вашего адреса Symbol к веб-сайту является самым безопасным,
              но требует небольшой комиссии.
            </li>
            <li>
                Введите ваш приватный ключ, ваш ключ будет зашифрован и сохранен только в хранилище ващего браузера.
            </li>
            <li>
                Создать другой метод связки аккаунта, без транзакционных затрат. Для оплаты требуется, самостоятельный перевод ваших XYM)
            </li>
        </ol>
        <p>
            Поздравляем, теперь вы можете войти в свой аккаунт.
        </p>

        <h2 className="title is-4 mt-6">3. Для исполнителя: Создайте новый квест и выполните его.</h2>
        <p>
            Нажмите “Новый квест”, чтобы начать свой квест (задание).<br />
            Введите категорию, название, описание и срок выполнения вашего квеста.<br />
            Важно, выставить оптимальные даты, для того чтобы вы успели выполнить свой квест.
            Не устанавливайте крайний срок слишком долго, поскольку это может показаться слишком утомительным для пользователей, так как XYM будет заморожен на весь срок квеста
            + будут добавлены 48 часов, для дополнительной безопасности.<br />
            Крайний срок по выполнению квесту должен быть реализован
            <span> { params.deadline_duration_min } </span>
            в кратчайшие сроки, и может быть продлен до
            <span> { params.deadline_duration_max } </span>
            самого долгого времени.
        </p>
        <blockquote>
            "Крайний срок" не может быть изменен, после запуска задания.
        </blockquote>
        <p>
            Как только вы создали квест, поделитесь им со своими зрителями и нажмите кнопку “Выполнить”.
        </p>
        <blockquote>
            { params.quest_runnings_max
                ? `Maximum number of performing is ${params.quest_runnings_max}.`
                : `Maximum number of performing is unlimited.` }
        </blockquote>
        <p>
            По завершении квеста не забудьте нажать кнопку «Завершить».<br />
            Если вы хотите отменить свой квест по какой-либо причине, нажмите кнопку «Отменить КВЕСТ», после чего все собранные XYM будут возвращены их владельцам.
        </p>

        <h2 className="title is-4 mt-6">4. Для зрителя: Поддержать Квест</h2>
        <p>
            Откройте страницу квеста, которой поделился ее исполнитель, и нажмите кнопку «Поддержать».<br />
            Введите сумму в XYM, которую вы хотите пожертвовать, для поддержки исполнителя квеста, а также вы можете добавить свое сообщение.<br />
        </p>
        <blockquote>
            You can deposit {  params.deposit_amount_max } XYM maximum per boost, but when you activate <code>Limit Break</code>,
            maximum amount is gained up to x20.<br />
            Also the performer can set maximum amount that can be received in total.<br />
            Сообщение может содержать не более { params.deposit_message_len_max } символов.<br />
            Вы можете делать пожертвования много раз, но если вы не превысите максимальный лимит XYM, для этого сайта.
        </blockquote>

        <h3 className="title is-5" id="fees">Основная стратегия, для поддержки исполнителей квеста и комиссия для сайта QUEST.</h3>
        <p>
            Есть 3 стратегии, пока ваши бонусы не будут получены исполнителем, и вы можете выбрать одну из них.
        </p>
        <table className="table">
            <thead>
            <tr>
                <th>Стратегия поддержки</th>
                <th>Комиссия<br />(Incl. tax)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <strong>[Тип.A] Поверить исполнителю квеста (Самая дешевая плата)</strong><br />
                  По окончании голосования ваши XYM будут вручены исполнителю вне зависимости от результата голосования.
                    (За исключением случаев прекращения или завершения срока выполнения квеста)
                </td>
                <td className="osi-nowrap">
                    <strong>
                        { fees.deposit[2] } XYM
                        { fees.deposit_rate[2]
                            ? <><br /> + {fees.deposit_rate[2] * 100}% от суммы</>
                            : null }
                    </strong>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>[Тип.B] Доверяйте результату голосования (Рекомендуется)</strong><br />
                    После положительного голосования за выполнения квеста,
                    ваши XYM будут автоматически переданы исполнителю.
                </td>
                <td className="osi-nowrap">
                    <strong>
                        { fees.deposit[0] } XYM
                        { fees.deposit_rate[0]
                            ? <><br /> + {fees.deposit_rate[0] * 100}% от суммы</>
                            : null }
                    </strong>
                </td>
            </tr>
            <tr>
                <td>
                    <strong>[Тип.C] Требовать окончательного решения (Для большей безопасности)</strong><br />
                    После утверждения завершения квеста путем голосования,
                    вы можете решить для себя, хотите ли вы наградить исполнителя или получить получить XYM обратно.
                    Ваши донаты будут заблокированы до принятия окончательного решения.
                </td>
                <td className="osi-nowrap">
                    <strong>
                        { fees.deposit[1] } XYM
                        { fees.deposit_rate[1]
                            ? <><br /> + {fees.deposit_rate[1] * 100}% от суммы</>
                            : null }
                    </strong>
                </td>
            </tr>
            </tbody>
        </table>
        <blockquote>
            После этого вы не можете изменить сумму доната (если вы хотите сделать еще один донат тому же создателю квеста, это можно сделать с помощью другой стратегии)<br />
            Какую бы стратегию вы ни выбрали, у вас будет право голоса в задании.
            У вас будет один бюллетень, независимо от времени или суммы доната.
        </blockquote>

        <h3 className="title is-5">Payment</h3>
        <p>
            Вы можете производить оплату, вводя приватный ключ при каждой транзакции или используя браузерный кошелек от сайта QUEST.
        </p>
        <p>
            Последнее требует дополнительных настроек на сайте перед использованием. Откройте настройки "Symbol аккаунт" со страницы настроек.
            Выберите «Я использую браузерный кошелек», затем зарегистрируйте свой приватный ключ и кодовую фразу.<br />
            Это позволит зашифровать и сохранить ваш приватный ключ в вашем браузере.
            Таким образом, вы можете использовать кошелек сайта QUEST, только в зарегистрированном браузере.
        </p>

        <h4 className="title is-6">Оплата с вводом приватного ключа</h4>
        <p>
            Откройте выставленный инвойс, и получите форму оплаты.
            Введите свой приватный ключ аккаунта Symbol.<br />
            Также выберите оптимальную комиссию за транзакцию
            Более высокая комиссия может ускорить подтверждение транзакции.
            Если в этом нет необходимости, вы можете сохранить более низкую плату за счет более длительного времени ожидания.
        </p>

        <h4 className="title is-6">Оплата через кошелек браузера</h4>
        <p>
            Откройте выставленный инвойс, и получите форму оплаты.<br />
            Произведите оплату, указав комиссию за транзакцию, пароль и приватный ключ
        </p>

        <h2 className="title is-4 mt-6">5. Зрителю: Голосовать</h2>
        <p>
            После того, как исполнитель завершит квест,
            зрители (донатеры), могут проголосовать либо за успешное выполнение квеста, либо за его провал.<br />
            Откройте страницу квеста и нажмите "Подтвердить голосование" или "Отклонить голосование".<br />
        </p>
        <blockquote>
            Вы можете изменить свой голос в любое время до окончания периода голосования.<br />
            Период голосования - 24 часа с момента завершения квеста
        </blockquote>
        <p>
            Голосование будет признано успешным, если будет большинство голосов, с положительным результатом и исполнитель получит вознаграждение.<br />
            С другой стороны, если вы не проголосовали, вам вернут деньги.
        </p>

        <h2 className="title is-4 mt-6">6. Для зрителя, который выбрал "Требовать окончательного решения".</h2>
        <p>
            После успешного завершения периода голосования откройте страницу квеста и нажмите «Награда» или «Получить возврат».
        </p>
        <blockquote>
            Вы должны принять решение в течение 24 часов после окончания голосования.
            Если вы не приняли решение к крайнему сроку, это то же самое, что вы выбрали «Получить возврат».
        </blockquote>

        <h2 className="title is-4 mt-6">7. Исполнителю квеста：Заработок за счет донатов</h2>
        <p>
            После того, как квест будет завершен и одобрен голосованием, полученный XYM будет вашим.
            Вполне возможно, получение вашего XYM, займет около 1 дня.<br />
            Подробнее см.<a href="#fees">Стратегия донатов и комиссия за платформу</a>.
        </p>

        <h2 className="title is-4 mt-6">8. Для зрителя: Получение Возврата</h2>
        <p>
            Возврат XYM произойдет в любом из следующих случаев: задание было прервано, истекло,
            отклонено голосованием (кроме выбора типа A), или за счет «Получения возврата» в качестве окончательного решения.<br />
            Возврат всегда поступает, через 48 часов (или 72 часа для Типа.C).
            Перенести дату выполнения квеста невозможно,
            так как сайт QUEST, использует блокчейн Symbol, для хранения данных.
        </p>
    </div>;
}
