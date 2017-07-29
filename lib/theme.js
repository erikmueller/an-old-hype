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
  veryLightGrey: '#cbcdd2',
  lightGrey: '#848794',
  grey: '#686b78',
  darkGrey: '#45474f',
  veryDarkGrey: '#1c1d21'
}

module.exports = config => {
  const themeSettings = config.themeSettings || {}
  const tabActiveMarker = themeSettings.tabActiveMarker || '►'
  const backgroundColor = `rgba(15, 15, 15, ${themeSettings.opacity || 0.9})`
  const styleColor = themeSettings.style === 'falcon'
    ? colors.lightGrey
    : colors[themeSettings.style || 'luke']

  return {
    backgroundColor,
    foregroundColor: colors.veryLightGrey,
    borderColor: colors.grey,
    cursorColor: styleColor,
    colors: {
      black: colors.veryDarkGrey,
      red: colors.vader,
      green: colors.yoda,
      yellow: colors.threePO,
      blue: colors.r2,
      magenta: colors.luke,
      cyan: colors.r2,
      white: colors.veryLightGrey,
      lightBlack: colors.grey,
      lightRed: colors.vader,
      lightGreen: colors.yoda,
      lightYellow: colors.threePO,
      lightBlue: colors.r2,
      lightMagenta: colors.luke,
      lightCyan: colors.r2,
      lightWhite: colors.veryLightGrey
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
        color: ${colors.lightGrey};
      }
      .tab_textActive .tab_textInner::before {
        color: ${styleColor};
        content: "${tabActiveMarker} ";
      }
      .splitpane_divider {
        background-color: ${colors.grey} !important;
      }
    `
  }
}
