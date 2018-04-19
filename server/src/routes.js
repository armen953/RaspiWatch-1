const AuthentificationController = require('./controllers/AuthentificationController')
const AuthentificationMiddleware = require('./middlewares/AuthentificationMiddleware')

module.exports = (app) => {
  // delete late
  app.get('/', (req, res) => {
    res.send('Welcome to the API')
  })

  app.post('/register',
    AuthentificationMiddleware.register, // exetute first the middleware and when the middleware call next() then exec the controller function
    AuthentificationController.register)

  app.post('/login', AuthentificationController.login) // pas encore fait
}
