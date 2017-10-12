/* jslint es6 */

require('dotenv').config()

// cria novo servidor
const server = require('./server/index')

server.listen('3456')
