const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('./../../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7 // duree de validité du token
  return jwt.sign(user, config.authentification.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      console.log(req.headers['authorization']) // a delete
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      delete userJson['password'] // retirer le champs mot de passe pour pas l'envoyer a l'utilisateur
      return res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      }) // renvoyer l'utilisateur crée -> supprimer plus tard ?????
    } catch (e) {
      // si utilisareur existe déja ou autre pb
      console.log(e)
      return res.status(400).send({
        error: 'Pseudo déjà utilisé'
      })
    }
  },
  async authenticate (req, res) {
    try {
      const {pseudo, password} = req.body
      const user = await User.findOne({
        where: {
          pseudo: pseudo
        }
      })
      if (!user) {
        return res.status(403).send({ // 403 -> auth error
          error: 'Les informations de connexions sont incorrectes'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({ // 403 -> auth error
          error: 'Les informations de connexions sont incorrectes'
        })
      }
      // envoyer l'utilisateur -> voir pour la partie JWT faire ici et envoyer
      const userJson = user.toJSON()
      delete userJson['password'] // retirer le champs mot de passe pour pas l'envoyer a l'utilisateur
      return res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (e) {
      return res.status(500).send({
        error: 'Une erreur est survenue au moment de la connexion'
      })
    }
  }
}
