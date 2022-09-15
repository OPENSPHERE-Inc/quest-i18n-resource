import React, {createContext, PropsWithChildren, useContext, useEffect, useRef, useState} from 'react';


interface TableOfContentsItem {
    title: string,
    slug: string,
    level: number,
    children?: TableOfContentsItem[],
}

class TocBuilder {
    items: TableOfContentsItem[] = [];

    add(item: TableOfContentsItem, children?: TableOfContentsItem[]) {
        const items = children || this.items;

        if (!items.length || items[items.length - 1].level >= item.level) {
            if (!items.filter((i) => i.slug === item.slug).shift()) {
                items.push(item);
            }
        } else if (items[items.length - 1].level < item.level) {
            if (!items[items.length - 1].children) {
                items[items.length - 1].children = [];
            }
            this.add(item, items[items.length - 1].children);
        }
    }

    reset() {
        this.items = [];
    }
}

export const TableOfContentsContext = createContext({} as {
    tocRef?: React.MutableRefObject<TocBuilder>,
    active?: boolean,
    setActive?: (value: boolean) => void,
});

export const useTableOfContents = () => {
    const tocRef = useRef(new TocBuilder());
    const [active, setActive] = useState(false);

    return {
        tocRef,
        active,
        setActive,
    };
};

const Level = ({items, level}: {items: TableOfContentsItem[], level: number}) => {
    return <ul className="menu-list">
        { items.map((item) => (
            <li key={item.slug}>
                <a href={`#${item.slug}`}>{item.title}</a>
                { item.children && <Level items={item.children} level={level + 1} /> }
            </li>
        )) }
    </ul>;
};

export const TocItem = ({title, level}: {title: string, level: number}) => {
    const anchor = encodeURIComponent(title.toLowerCase().replace(/\s/g, "-"));
    const toc = useContext(TableOfContentsContext);

    toc.tocRef?.current.add({ title, slug: anchor, level });

    return <>
        <span id={anchor} className="osi-toc-anchor" />
        { title }
        <a href={`#${anchor}`}>
            <i className="fas fa-link is-size-6 ml-2"></i>
        </a>
    </>;
};


export const TableOfContents = () => {
    const toc = useContext(TableOfContentsContext);

    return <div className={`modal ${toc.active ? 'is-active' : ''} is-clipped`}>
        <div className="modal-background" onClick={() => toc.setActive?.(false)}></div>
        <div className="modal-card">
            <section className="modal-card-body" onClick={() => toc.setActive?.(false)}>
                <aside className="menu is-size-7 osi-toc">
                    { toc.tocRef?.current.items.map((item) => ( <React.Fragment key={item.slug}>
                        <p className="menu-label">{item.title}</p>
                        { item.children && <Level items={item.children} level={2} key={item.slug} /> }
                    </React.Fragment> )) }
                </aside>
            </section>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={() => toc.setActive?.(false)}></button>
    </div>
};

export const TableOfContentsProvider = ({children}: PropsWithChildren) => {
    const toc = useTableOfContents();

    toc.tocRef.current.reset();

    return <TableOfContentsContext.Provider value={toc}>
        <div className="buttons is-grouped is-right">
            <button className="button is-rounded osi-toc-button"
                    onClick={() => toc.setActive((prev) => !prev) }
            >
                <span className="icon">
                    { toc.active ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i> }
                </span>
            </button>
        </div>
        <div>
            { children }
        </div>
        <TableOfContents />
    </TableOfContentsContext.Provider>;
};