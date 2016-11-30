// Hyper term theme inspired by a galaxy far far away...
//
// Based on the awesome `an-old-hope` atom syntax theme by JesseLeite
// All color credits to him!

const vader = '#eb3d54';
const yoda = '#78bd65';
const threePiO = '#e5cd52';
const r2 = '#4fb4d8';
const luke = '#ef7c2a';
const falcon = { // derived directly from the hull
    white: 'hsl(228, 7%, 81%)',
    lightgrey: 'hsl(228, 7%, 55%)',
    grey: 'hsl(228, 7%, 44%)',
    darkgrey: 'hsl(228, 7%, 29%)',
    black: 'hsl(228, 7%, 12%)',
    window: 'rgba(21, 22, 25, 0.9)',
};

exports.decorateConfig = config => Object.assign({}, config, {
	backgroundColor: falcon.window,
	foregroundColor: falcon.white,
	borderColor: falcon.lightgrey,
	cursorColor: luke,
	colors: {
		black: falcon.black,
		red: vader,
		green: yoda,
		yellow: threePiO,
		blue: r2,
		magenta: luke,
		cyan: falcon.lightgrey,
		white: falcon.white,
		lightBlack: falcon.darkgrey,
		lightRed: vader,
		lightGreen: yoda,
		lightYellow: threePiO,
		lightBlue: r2,
		lightMagenta: luke,
		lightCyan: falcon.lightgrey,
		lightWhite: falcon.white
	},
	css: `
		${config.css}
        .tab_tab {
            background-color: ${falcon.window}
            border: 1px solid ${falcon.darkgrey};
        }
        .tab_active {
            background-color: ${falcon.window};
            color: ${luke} !important;
		}
        .splitpane_divider {
            background-color: ${falcon.darkgrey} !important;
        }
	`
});
