const jwt = require('jsonwebtoken')
const config = require('./../../config/config')

// This middleware allows to protect a route by verifying if the token is valid

//  Token format: Authorization: Bearer <token>
// for more info https://jwt.io/introduction/ -> ctr + f and search Bearer

module.exports = function (req, res, next) {
  let isTokenValide = false
  // Get auth header value
  const bearerHeader = req.headers['authorization']
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ')
    // get token from array
    const token = bearer[1]
    if (typeof token !== 'undefined') {
      // set the token
      req.token = token
      jwt.verify(token, config.authentification.jwtSecret, (err, decoded) => {
        if (err) {
          // Forbidden: dont let user acces
          return res.status(403).send({
            error: 'Invalid token '
          })
        } else {
          // ici on a le decoded data du token
        }
      })
      isTokenValide = true
      next()
    }
  }
  if (!isTokenValide) {
    // Forbidden: dont let user acces
    return res.status(403).send({
      error: 'Probleme de token'
    })
  }
}

// ============================================================
// POUR PLUS TARD -> faire un middleware pareil que celui la mais qui laisse passer que l'admin
// ============================================================
