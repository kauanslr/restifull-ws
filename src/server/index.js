/**
 * Configuração do servidor
 */

const restify = require('restify')
const server = restify.createServer()
const routes = require('../http/routes')
const cors = require('./cors')

// configura o server com o cors
server.pre(cors.preflight)
server.use(cors.actual)

// configura o recebimento de parametros para POST
server.use(restify.plugins.bodyParser())

// seta o servidor para as rotas
routes(server)

module.exports = server
