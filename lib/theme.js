//
// Hyper term theme inspired by a galaxy far far away...
// Based on the awesome `an-old-hope` atom syntax theme by Jesse Leite
//

const paint = lightness => `hsl(228, 7%, ${lightness}%)`
const selection = 'rgba(242, 242, 242, 0.2)'
const colors = {
  vader: '#eb3d54',
  yoda: '#78bd65',
  threePO: '#e5cd52',
  r2: '#4fb4d8',
  luke: '#ef7c2a',
  falcon: {
    white: paint(81),
    silver: paint(55),
    grey: paint(29),
    black: paint(12)
  }
}

module.exports = config => {
  const themeSettings = config.themeSettings || {}
  const tabActivMarker = themeSettings.tabActivMarker || '►'
  const backgroundColor = `rgba(21, 22, 25, ${themeSettings.opacity || 0.9})`
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
    `,
    css: `
      ${config.css || ''}
      .tab_textActive .tab_textInner::before {
          color: ${styleColor};
          content: "${tabActivMarker} ";
      }
      .splitpane_divider {
        background-color: ${colors.falcon.grey} !important;
      }
    `
  }
}
