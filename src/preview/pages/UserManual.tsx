import React, {useState} from "react";
import {usePage} from "../components/context/Page";
import {Layout} from "../components/layout/Layout";
import {Helmet} from "react-helmet";
import {UserManualI18N, UserManualIndexI18N, UserManualIndexModalI18N} from "../components/localized/UserManualI18N";


export const UserManual = () => {
    const { str, siteTitle } = usePage();
    const [ contentsMenuShow, setContentsMenuShow ] = useState(false);

    return <Layout hero={() => <div className="hero is-primary is-small">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-desktop">
                    <div className="column">
                        <h1 className="title is-3 osi-hero-title">{ str('hero_user_manual', 'User Manual') }</h1>
                    </div>
                    <div className="column is-4-desktop">
                        <div className="buttons is-centered is-hidden-desktop">
                            <button className="button is-primary is-inverted mb-0" onClick={() => setContentsMenuShow(true)}>
                                { str('button_open_docs_index', 'Index') }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>}>
        <Helmet>
            <title>{ siteTitle(str('user_manual', 'User Manual')) }</title>
        </Helmet>
        <div className="container">
            { contentsMenuShow ? <UserManualIndexModalI18N onClose={() => setContentsMenuShow(false)} /> : null }
            <div className="columns">
                <div className="column is-hidden-touch">
                    <UserManualIndexI18N />
                </div>
                <div className="column is-9-desktop">
                    <UserManualI18N />
                </div>
            </div>
        </div>
    </Layout>;
};
