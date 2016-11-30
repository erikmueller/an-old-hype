const theme = require('./lib/theme')

exports.decorateConfig = config => Object.assign({}, config, theme(config))
