import React from "react";

export const ListOfExchanges = () => {
    return <div className="navbar-dropdown">
        <a className="navbar-item"
           href="https://www.kucoin.com/"
           target="_blank"
           rel="noreferrer"
        >
            KUCOIN
        </a>
        <a className="navbar-item"
           href="https://www.gate.io/"
           target="_blank"
           rel="noreferrer"
        >
            gate.io
        </a>
        <hr className="navbar-divider" />
        <a className="navbar-item"
           href="https://coinmarketcap.com/ko/currencies/symbol/markets/"
           target="_blank"
           rel="noreferrer"
        >
            모든 거래소 목록
        </a>
    </div>;
}
