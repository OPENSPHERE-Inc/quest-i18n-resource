import React, {useCallback, useState} from "react";
import {Link} from "react-router-dom";
import {SupportedLanguages, usePage} from "../context/Page";
import {ListOfExchangesI18N} from "../localized/ListOfExchangesI18N";


interface Props {
    noSignIn?: boolean,
}

export const Header = ({noSignIn}: Props) => {
    const [active, setActive] = useState(false);
    const { language, setLanguage, str } = usePage();

    const toggleHamburger = useCallback(() => {
        setActive(!active);
    }, [active]);

    const onLanguageChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value as SupportedLanguages);
    }, [setLanguage])

    return <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div className="container is-max-desktop">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="/quest.svg" className="osi-quest-logo" alt="QUEST" />
                </Link>


                <a role="button"
                   className={`navbar-burger ${active ? 'is-active' : ''}`}
                   aria-label="menu"
                   aria-expanded="false"
                   data-target="navbarMain"
                   onClick={() => toggleHamburger()}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarMain" className={`navbar-menu ${active ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link to={`/quest/explore`} className="navbar-link">
                            { str('header_explore', 'Explore') }
                        </Link>

                        <div className="navbar-dropdown">
                            <Link to={`/quest/explore`} className="navbar-item">
                                { str('quests', 'Quests') }
                            </Link>
                            <Link to={`/offer/explore`} className="navbar-item">
                                { str('templates', 'Offers') }
                            </Link>
                            <Link to={`/boost/explore`} className="navbar-item">
                                { str('deposits', 'Boosts') }
                            </Link>
                            <Link to={`/user/explore`} className="navbar-item">
                                { str('users', 'Users') }
                            </Link>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link to="/quest/create" className="navbar-link">
                            { str('header_create', 'Create') }
                        </Link>

                        <div className="navbar-dropdown">
                            <Link to={`/quest/create`} className="navbar-item">
                                { str('quest', 'Quest') }
                            </Link>
                            <Link to={`/offer/create`} className="navbar-item">
                                { str('template', 'Offer') }
                            </Link>
                        </div>
                    </div>
                    <Link to="/instruction" className="navbar-item">
                        { str('header_instruction', 'Instruction') }
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            { str('header_exchanges', 'Charge XYM') }
                        </a>

                        <ListOfExchangesI18N />
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field">
                            <div className="control">
                                <div className="select is-small is-hidden-touch">
                                    <select value={language}
                                            onChange={onLanguageChange}>
                                        <option value="en">EN</option>
                                        <option value="ja">JP</option>
										<option value="ru">RU</option>
                                    </select>
                                </div>
                                <div className="select is-hidden-desktop is-fullwidth">
                                    <select value={language}
                                            onChange={onLanguageChange}>
                                        <option value="en">English</option>
                                        <option value="ja">日本語</option>
										<option value="ru">Russian</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-text is-small">
                                { str('button_signup', 'Signup') }
                            </button>
                            <button className="button is-small">
                                { str('button_signin', 'Sign In') }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>;
}

