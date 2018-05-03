// const VerifyTokenMiddleware = require('./middlewares/VerifyTokenMiddleware')
const AuthentificationMiddleware = require('./middlewares/AuthentificationMiddleware')
const AuthentificationControler = require('./controlers/AuthentificationControler')

module.exports = (app) => {
  // delete late
  app.get('/', (req, res) => {
    res.send('Welcome to the API')
  })

  app.post('/register',
    AuthentificationMiddleware.register, // exetute first the middleware and when the middleware call next() then exec the controller function
    AuthentificationControler.register // le controller a appeler pour eneegistrer un utilisateur (sera appele apres que le middleware appel la fnc next())
  )

  app.post('/authenticate',
    // VerifyTokenMiddleware, permet de proteger une route que pour ce qui ont un token valide
    AuthentificationControler.authenticate
  ) // TO DO
}
