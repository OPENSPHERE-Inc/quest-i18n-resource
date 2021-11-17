import React, {useEffect} from "react";
import {Helmet} from "react-helmet";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {usePage} from "../context/Page";
import {useLocation} from "react-router-dom";
import {scroller} from "react-scroll";


interface Props {
    noSignIn?: boolean,
    hero?: React.FC,
}

export const Layout: React.FC<Props> = (
    {
        children,
        noSignIn,
        hero: Hero,
    },
) => {
    const { siteTitle, str } = usePage();
    const location = useLocation();

    // Restore scroll top
    useEffect(() => {
        if (!location.hash) {
            window.scrollTo(0, 0);
        } else {
            // URL with hash
            scroller.scrollTo(location.hash.substring(1), {
                smooth: true,
                duration: 700,
            });
        }
    }, [location]);

    return <div className="osi-frame">
        <Helmet>
            <html lang="ja"/>
            <title>{ siteTitle() }</title>
        </Helmet>
        <Header noSignIn={noSignIn} />
        <div className="osi-main">
            { Hero && <Hero /> }
            <section className="section">
                { children }
            </section>
        </div>
        <Footer />
        {  process.env.REACT_APP_NETWORK_TYPE === '152' ? <div className="osi-testnet-notification notification is-warning">
            { str('testnet_notification', [
                'This is a TEST SITE connected to the Testnet. You cannot use the Mainnet assets.'
            ]) }
        </div> : null }
    </div>;
}

