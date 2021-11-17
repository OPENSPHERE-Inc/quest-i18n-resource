import React from "react";
import { Link } from "react-router-dom";
import {usePage} from "../context/Page";


export const Footer = () => {
    const { str } = usePage();

    return <footer className="footer">
        <div className="container is-max-desktop">
            <div className="content has-text-centered">
                <p className="buttons is-centered">
                    <Link to="/termsOfUse" className="button is-text">
                        { str('footer_terms_of_use', 'Terms of Use') }
                    </Link>
                    <Link to="/privacyPolicy" className="button is-text">
                        { str('footer_privacy_policy', 'Privacy Policy') }
                    </Link>
                    <Link to="/specifiedCommercialTransactions" className="button is-text">
                        { str('footer_specified_commercial_transactions', 'Act on specified commercial transactions') }
                    </Link>
                    <a href={str('footer_dev_blog_url', 'https://blog.opensphere.co.jp/posts/tags/quest_en')}
                       target="_blank"
                       rel="noreferrer"
                       className="button is-text">
                        { str('footer_dev_blog', "Developer's Blog") }
                    </a>
                    <a href={str('footer_twitter_url', 'https://twitter.com/QUESTofficial5')}
                       target="_blank"
                       rel="noreferrer"
                       className="button is-text">
                        { str('footer_twitter', 'Twitter') }
                    </a>
                </p>
                <p>
                    Copyright &copy; {(new Date()).getFullYear()} &nbsp;
                    <a href="https://www.opensphere.co.jp/">OPENSPHERE Inc.</a>
                </p>
            </div>
        </div>
    </footer>;
}

