import React from "react";
import {Link} from "react-router-dom";
import {Layout} from "../components/layout/Layout";
import {usePage} from "../components/context/Page";
import {InstructionI18N} from "../components/localized/InstructionI18N";
import {Helmet} from "react-helmet";


const Instruction = () => {
    const { str, siteTitle } = usePage();

    return <Layout hero={() => <div className="hero is-primary is-small">
        <div className="hero-body">
            <div className="container is-max-desktop">
                <div className="columns is-desktop">
                    <div className="column">
                        <h1 className="title is-3 osi-hero-title">{ str('hero_instruction', 'Instruction') }</h1>
                    </div>
                    <div className="column is-4-desktop">
                        <div className="buttons is-centered">
                            <Link to="/quest/create" className="button is-primary is-inverted mb-0">
                                { str('button_new_quest', 'New Quest') }
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>}>
        <Helmet>
            <title>{ siteTitle(str('instruction', 'Instruction')) }</title>
        </Helmet>
        <div className="container is-max-desktop">
            <InstructionI18N />
        </div>
    </Layout>
}

export default Instruction;
