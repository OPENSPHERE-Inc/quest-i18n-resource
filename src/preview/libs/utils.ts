import Long from "long";


export const toXYM = (microXYM: Long) => {
    const decimal = ('000000' + microXYM.mod(1000000).toString()).slice(-6)
        .replace(/0+$/g, '');
    const integer = microXYM.div(1000000).toString();

    return `${integer}${decimal && '.' + decimal}`;
}

export const fromXYM = (xym: string) => {
    const [integer, decimal] = xym.split('.');

    return Long.fromString(integer).mul(1000000).add(
        Long.fromString(decimal ? (decimal + '000000').slice(0, 6) : '0')
    );
}

export const getDefaultLanguage = () => {
    return (window.navigator.languages && window.navigator.languages[0]) ||
        window.navigator.language;
}

export const isUrl = (url: string) => {
    return url.match(/^http(s)?:\/\/([\w\-]+\.)+[\w\-]+(:\d+)?(\/[\w\-.\/?%&=~]*)?(#[\w\-.\/?%&=~#]*)?$/g) !== null;
};
