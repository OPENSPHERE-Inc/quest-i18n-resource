import React, {PropsWithChildren, useMemo} from "react";
import {MDXProvider} from "@mdx-js/react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import {isUrl} from "../../libs/utils";
import UserManualJa from "../../../frontend/components/ja/UserManual";
import UserManualEn from "../../../frontend/components/en/UserManual";
import UserManualRu from "../../../frontend/components/ru/UserManual";
import UserManualKo from "../../../frontend/components/ko/UserManual";
import {usePage} from "../context/Page";
import {TableOfContentsProvider, TocItem} from "../TableOfContents";


type LocalizedUserManual = typeof UserManualEn;

const localizedPages: { [index: string]: LocalizedUserManual } = {
    "ja": UserManualJa,
    "en": UserManualEn,
    "ru": UserManualRu,
    "ko": UserManualKo,
};

export const UserManualIndexI18N = ({onLinkClick}: {onLinkClick?: () => void}) => {
    const location = useLocation();
    const { language } = usePage();
    const Pages = useMemo(() => localizedPages[language] || localizedPages["en"], [language]);

    const components = useMemo(() => ({
        a: (props: PropsWithChildren<any>) => {
            if (isUrl(props.href)) {
                return <a {...props} target="_blank" rel="noreferrer" onClick={onLinkClick} />;
            } else {
                const isActive = location.pathname === props.href;
                return <Link {...props} to={props.href} className={isActive ? "is-active" : ""}  onClick={onLinkClick} />;
            }
        },
        ul: (props: PropsWithChildren<any>) => <ul {...props} className="menu-list" />,
        h1: () => null,
        h2: (props: PropsWithChildren<any>) => <div {...props} className="menu-label" />,
    }), [location.pathname]);

    return <MDXProvider components={components}>
        <Pages.IndexMdx />
    </MDXProvider>;
};

export const UserManualIndexModalI18N = ({onClose}: {onClose: () => void}) => {
    return <div className="modal is-active">
        <div className="modal-background" onClick={onClose}></div>
        <div className="modal-content p-5">
            <UserManualIndexI18N onLinkClick={onClose} />
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>;
};

export const UserManualI18N = () => {
    const { language } = usePage();
    const Pages = useMemo(() => localizedPages[language] || localizedPages["en"], [language]);

    const components = useMemo(() => ({
        a: (props: PropsWithChildren<any>) => {
            if (isUrl(props.href)) {
                return <a {...props} target="_blank" rel="noreferrer" />;
            } else {
                return <Link {...props} to={props.href} />;
            }
        },
        img: (props: PropsWithChildren<any>) => {
            if (props.className?.split(" ").includes("inline")) {
                return <span className="icon is-small">
                    <img {...props} />
                </span>;
            } else if (props.className?.split(" ").includes("noborder")) {
                return <img {...props} className={`${props.className} my-5`}/>
            } else {
                return <a href={props.src} target="_blank" rel="noreferrer">
                    <img {...props} className={`${props.className || ""} my-5`} />
                </a>;
            }
        },
        table: (props: PropsWithChildren<any>) => <table {...props} className="table" />,
        h1: (props: PropsWithChildren<any>) => <h1 {...props} className="title is-3">
            <TocItem title={props.children.toString()} level={1} />
        </h1>,
        h2: (props: PropsWithChildren<any>) => <h2 {...props} className="title is-4">
            <TocItem title={props.children.toString()} level={2} />
        </h2>,
        h3: (props: PropsWithChildren<any>) => <h3 {...props} className="title is-5">
            <TocItem title={props.children.toString()} level={3} />
        </h3>,
        h4: (props: PropsWithChildren<any>) => <h4 {...props} className="title is-6">
            <TocItem title={props.children.toString()} level={4} />
        </h4>,
        h5: (props: PropsWithChildren<any>) => <h5 {...props} className="title is-7">
            <TocItem title={props.children.toString()} level={5} />
        </h5>,
    }), []);

    return <TableOfContentsProvider>
        <div className="content osi-mdx-content">
            <MDXProvider components={components}>
                <Routes>
                    <Route path="/supplement/symbol-blockchain" element={<Pages.SupplementSymbolBlockchainMdx />} />
                    <Route path="/supplement/glossary" element={<Pages.SupplementGlossaryMdx />} />
                    <Route path="/supplement" element={<Pages.SupplementIndexMdx />} />
                    <Route path="/reference/user-profile-page" element={<Pages.ReferenceUserProfilePageMdx />} />
                    <Route path="/reference/settings" element={<Pages.ReferenceSettingsMdx />} />
                    <Route path="/reference/quest-page" element={<Pages.ReferenceQuestPageMdx />} />
                    <Route path="/reference/offer-page" element={<Pages.ReferenceOfferPageMdx />} />
                    <Route path="/reference/explore" element={<Pages.ReferenceExploreMdx />} />
                    <Route path="/reference/dashboard" element={<Pages.ReferenceDashboardMdx />} />
                    <Route path="/reference/basecamp" element={<Pages.ReferenceBasecampMdx />} />
                    <Route path="/reference" element={<Pages.ReferenceIndexMdx />} />
                    <Route path="/guide/request" element={<Pages.GuideRequestMdx />} />
                    <Route path="/guide/registration" element={<Pages.GuideRegistrationMdx />} />
                    <Route path="/guide/quest-performance" element={<Pages.GuideQuestPerformanceMdx />} />
                    <Route path="/guide/quest-epilogue" element={<Pages.GuideQuestEpilogueMdx />} />
                    <Route path="/guide/quest-creation" element={<Pages.GuideQuestCreationMdx />} />
                    <Route path="/guide/offer" element={<Pages.GuideOfferMdx />} />
                    <Route path="/guide/follow" element={<Pages.GuideFollowMdx />} />
                    <Route path="/guide/boost" element={<Pages.GuideBoostMdx />} />
                    <Route path="/guide" element={<Pages.GuideIndexMdx />} />
                    <Route path="/requirements" element={<Pages.RequirementsMdx />} />
                    <Route path="/" element={<Pages.IntroductionMdx />} />
                </Routes>
            </MDXProvider>
        </div>
    </TableOfContentsProvider>;
};