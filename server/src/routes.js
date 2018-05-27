// Middlewares
// const VerifyTokenMiddleware = require('./middlewares/VerifyTokenMiddleware')
const AuthentificationMiddleware = require('./middlewares/AuthentificationMiddleware')
const VerifyAdminMiddleware = require('./middlewares/VerifyAdminMiddleware')

// controllers
const AuthentificationController = require('./controlers/AuthentificationController')
const UserController = require('./controlers/UserController')
const ImageController = require('./controlers/ImageController')

module.exports = (app) => {
  // delete late
  app.get('/', (req, res) => {
    res.send('Welcome to the API')
  })

  app.post('/register',
    VerifyAdminMiddleware, // permet de proteger une route que pour ceux qui ont un token valide (utilisateur connecté)
    AuthentificationMiddleware.register, // exetute first the middleware and when the middleware call next() then exec the controller function
    AuthentificationController.register // le controller a appeler pour eneegistrer un utilisateur (sera appele apres que le middleware appel la fnc next())
  )

  app.post('/authenticate',
    AuthentificationController.authenticate
  )

  // route only for admin TODO: a middleware
  app.post('/user/update/:pseudo',
    UserController.updateUserInfo
  )

  app.delete('/user/delete/:pseudo',
    VerifyAdminMiddleware, // auth admin marche pas ici (mais marche pour les autres)
    UserController.deleteUser
  )

  app.get('/user/get/all',
    VerifyAdminMiddleware,
    UserController.getAllUsers
  )

  app.get('/image/get/:name',
    ImageController.getImageByname
  )

  app.get('/image/all',
    // VerifyTokenMiddleware,
    ImageController.getAllImages
  )

  // route chnage password TODO: update user password (client and serveur side)
}
