import test from 'ava'
import theme from './theme'

const defaultStyle = 'luke'
const defaultOpacity = 0.9
const calcBgColor = opac => `rgba(15, 15, 15, ${opac})`
const defaultTabActiveMarker = '►'
const defaultColors = {
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

const getMarker = css =>
  (css.match(/content: "(.+)";/) || [])[1]
const getMarkerColor = css =>
  (css.match(/.tab_textActive.*[\s]*color: (.+);/) || [])[1]

test('we have the correct starwars colors', t => {
  const {colors} = theme({})

  t.is(colors.red, defaultColors.vader)
  t.is(colors.green, defaultColors.yoda)
  t.is(colors.yellow, defaultColors.threePO)
  t.is(colors.blue, defaultColors.r2)
  t.is(colors.magenta, defaultColors.luke)
  t.is(colors.cyan, defaultColors.r2)
  t.is(colors.white, defaultColors.falcon.white)
  t.is(colors.lightRed, defaultColors.vader)
  t.is(colors.lightGreen, defaultColors.yoda)
  t.is(colors.lightYellow, defaultColors.threePO)
  t.is(colors.lightBlue, defaultColors.r2)
  t.is(colors.lightMagenta, defaultColors.luke)
  t.is(colors.lightCyan, defaultColors.r2)
  t.is(colors.lightWhite, defaultColors.falcon.white)
})

test('style returns default config', t => {
  const {cursorColor, css} = theme({})
  const markerColor = getMarkerColor(css)
  const expectedColor = defaultColors[defaultStyle]

  t.is(cursorColor, expectedColor)
  t.is(markerColor, expectedColor)
})

test('style returns "yoda" config', t => {
  const {cursorColor, css} = theme({themeSettings: {style: 'yoda'}})
  const markerColor = getMarkerColor(css)
  const expectedColor = defaultColors.yoda

  t.is(cursorColor, expectedColor)
  t.is(markerColor, expectedColor)
})

test('style returns "falcon" config', t => {
  const {cursorColor, css} = theme({themeSettings: {style: 'falcon'}})
  const markerColor = getMarkerColor(css)
  const expectedColor = defaultColors.falcon.silver

  t.is(cursorColor, expectedColor)
  t.is(markerColor, expectedColor)
})

test('returns default background color', t => {
  const {backgroundColor} = theme({})

  t.is(backgroundColor, calcBgColor(defaultOpacity))
})

test('returns background with custom opacity', t => {
  const opacity = 1
  const {backgroundColor} = theme({themeSettings: {opacity}})

  t.is(backgroundColor, calcBgColor(opacity))
})

test('returns default active marker', t => {
  const {css} = theme({})
  const marker = getMarker(css)

  t.is(marker, `${defaultTabActiveMarker} `) // note the space
})

test('returns custom active marker', t => {
  const tabActiveMarker = '💁'
  const {css} = theme({themeSettings: {tabActiveMarker}})
  const marker = getMarker(css)

  t.is(marker, `${tabActiveMarker} `) // note the space (again)
})
