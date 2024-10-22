import TTCommonsProDemiBold from "../assets/fonts/TTCommonsProDemiBold.ttf";
import TTCommonsProRegular from "../assets/fonts/TTCommonsProRegular.ttf";

export const GLOBAL_STYLE = {
    html: {
        height: '100%',
        overflow: 'hidden',
    },
    body: {
        height: '100%',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        overflow: 'hidden',
    },
    '#root': {
        height: '100%',
        overflow: 'hidden',
    },
    '*': {
        'box-sizing': 'border-box',
        'padding': 0,
        'margin': 0,
        fontFamily: `'TT Commons Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
    },
}

export const FONT_STYLES = [
    {
        "@font-face": {
            fontFamily: 'TT Commons Pro',
            src: `url(${TTCommonsProDemiBold}) format('truetype')`,
            fontWeight: 600,
            fontStyle: 'normal',
        }
    },
    {
        "@font-face": {
            fontFamily: 'TT Commons Pro',
            src: `url(${TTCommonsProRegular}) format('truetype')`,
            fontWeight: 400,
            fontStyle: 'normal',
        }
    },
];