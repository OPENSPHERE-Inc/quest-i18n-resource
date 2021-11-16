import React from "react";

export const ListOfExchangesEn = () => {
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
           href="https://symbolplatform.com/xym"
           target="_blank"
           rel="noreferrer"
        >
            Full exchanges list
        </a>
    </div>;
}
