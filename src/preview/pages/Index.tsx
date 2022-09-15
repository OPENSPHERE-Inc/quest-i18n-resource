import React from "react";
import {Layout} from "../components/layout/Layout";
import {Link} from "react-router-dom";
import {usePage} from "../components/context/Page";
import { IntroductionI18N } from "../components/localized/IntroductionI18N";
import {Translator} from "../components/Translator";


const Index = () => {
    const { str } = usePage();

    return <Layout hero={() => <div className="hero is-primary is-small">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-desktop">
                    <div className="column">
                        <h1 className="title is-3 osi-hero-title">
                            { str('hero_index_all', 'BASECAMP') }
                        </h1>
                    </div>
                    <div className="column is-4-desktop">
                        <div className="buttons is-centered">
                            <Link to="/instruction" className="button is-primary is-inverted mb-0">
                                { str('button_instruction', 'Instruction') }
                            </Link>
                            <Link to={`/quest/create`}
                                  className="button is-primary is-inverted mb-0">
                                { str('button_new_quest', 'New Quest') }
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero-foot">
            <nav className="tabs is-centered">
                <div className="container is-max-desktop">
                    <ul>
                        <li className="is-active">
                            <button className="button is-text">
                                { str('button_introduction_hide', 'Hide Introduction') }
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>}>
        <div className="container is-max-desktop">
            <IntroductionI18N />
            <Translator />
        </div>
    </Layout>;
}

export default Index;
