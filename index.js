const p = require('path')

const API_VERSION = 0

module.exports = {
  hyperdriveSchemaPath: p.join(__dirname, 'schemas', 'ddrive.proto'),
  daemonSchemaPaths: p.join(__dirname, 'schemas', 'daemon'),
  messages: require('./lib/messages'),
  Stat: require('./lib/stat'),
  version: API_VERSION
}
