import React from "react";

export const ListOfExchanges = () => {
    return <div className="navbar-dropdown">
        <a className="navbar-item"
           href="https://zaif.jp/trade/xym_jpy"
           target="_blank"
           rel="noreferrer"
        >
            Zaif.jp
        </a>
        <a className="navbar-item"
           href="https://app.bitbank.cc/trade/xym_jpy"
           target="_blank"
           rel="noreferrer"
        >
            bitbank
        </a>
        <a className="navbar-item"
           href="https://coin.z.com/jp/corp/product/info/exchange/"
           target="_blank"
           rel="noreferrer"
        >
            GMOコイン
        </a>
        <a className="navbar-item"
           href="https://www.huobi.co.jp/ja-jp/exchange/xym_jpy/"
           target="_blank"
           rel="noreferrer"
        >
            Huobi Japan
        </a>
        <hr className="navbar-divider" />
        <a className="navbar-item"
           href="https://symbolplatform.com/xym"
           target="_blank"
           rel="noreferrer"
        >
            取引所リスト
        </a>
    </div>;
}
