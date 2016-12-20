//
// Hyper term theme inspired by a galaxy far far away...
// Based on the awesome `an-old-hope` atom syntax theme by Jesse Leite
//

const selection = 'rgba(242, 242, 242, 0.2)'
const colors = {
  vader: '#eb3d54',
  yoda: '#78bd65',
  threePO: '#e5cd52',
  r2: '#4fb4d8',
  luke: '#ef7c2a',
  falcon: {
    white: '#ececec',
    silver: '#e0e0e0',
    grey: '#636363',
    black: '#212121'
  }
}

module.exports = config => {
  const themeSettings = config.themeSettings || {}
  const tabActiveMarker = themeSettings.tabActiveMarker || '►'
  const backgroundColor = `rgba(15, 15, 15, ${themeSettings.opacity || 0.9})`
  const styleColor = themeSettings.style === 'falcon'
    ? colors.falcon.silver
    : colors[themeSettings.style || 'luke']

  return {
    backgroundColor,
    foregroundColor: colors.falcon.white,
    borderColor: colors.falcon.grey,
    cursorColor: styleColor,
    colors: {
      black: colors.falcon.black,
      red: colors.vader,
      green: colors.yoda,
      yellow: colors.threePO,
      blue: colors.r2,
      magenta: colors.luke,
      cyan: colors.r2,
      white: colors.falcon.white,
      lightBlack: colors.falcon.grey,
      lightRed: colors.vader,
      lightGreen: colors.yoda,
      lightYellow: colors.threePO,
      lightBlue: colors.r2,
      lightMagenta: colors.luke,
      lightCyan: colors.r2,
      lightWhite: colors.falcon.white
    },
    termCSS: `
      ${config.termCSS || ''}
      ::selection {
        background: ${selection} !important;
      }
      .cursor-node {
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .tab_tab:not(.tab_active) {
        color: ${colors.falcon.silver};
      }
      .tab_textActive .tab_textInner::before {
        color: ${styleColor};
        content: "${tabActiveMarker} ";
      }
      .splitpane_divider {
        background-color: ${colors.falcon.grey} !important;
      }
    `
  }
}
