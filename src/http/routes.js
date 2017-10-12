/**
 * Configuração das Rotas
 * @param {server} server 
 */

const db = require('../services/mysql/index')

// db.categories().all()
// db.categories().save(name)
// db.categories().update(id, name)
// db.categories().del(id, name)

const routes = (server) => {

  // acessa o modulo db , modulo categories, funcao de listagem
  server.get('categoria', async (req, res, next) => {
    try{
      res.send(
        await db.categories().all()
      )
    }
    catch (error){
      res.send(error)
      next()
    }
    /**
     * O código acima é a mesma coisa que isso aqui vv
     */

    // db.categories().all()
    //   // recebe a resposta de all()
    //   .then(categories => {
    //     res.send(categories)
    //     next()
    //   })
    //   .catch(error => {
    //     res.send(error)
    //     next()
    //   })

  })

  server.post('categoria', async (req, res, next) => {
    // ES6 consegue extrair a partir das contantes o parametro com aquele nome
    const { name } = req.params
    try{
      res.send(
        await db.categories().save(name)
      )
    }
    catch (error){
      res.send(error)
    }
    next()
  })

  server.put('categoria', async (req, res, next) => {
    const { id, name } = req.params
    try{
      res.send(
        await db.categories().update(id, name)
      )
    }
    catch (error){
      res.send(error)
    }
    next()
  })

  server.del('categoria', async (req, res, next) => {
    const { id, name } = req.params
    try{
      res.send(
        await db.categories().del(id)
      )
    }
    catch (error){
      res.send(error)
    }
    next()
  })

  // rota padrão
  server.get('/', (req, res, next) => {
    res.end('echo "<h1 class="Title">Ola</h1>"')
    next()
  })
}

module.exports = routes
