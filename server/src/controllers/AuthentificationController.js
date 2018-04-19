const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON()) // renvoyer l'utilisateur crée -> supprimer plus tard ?????
    } catch (e) {
      // si utilisareur existe déja ou autre pb
      res.status(400).send({
        error: 'Email déjà utilisé'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body // voir pour ajouter pseudo et date instaription (coté client)
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.send(403).send({ // 403 -> auth error
          error: 'Les informations de connexions sont incorrectes'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        res.send(403).send({ // 403 -> auth error
          error: 'Les informations de connexions sont incorrectes'
        })
      }
      // envoyer l'utilisateur -> voir pour la partie JWT faire ici et envoyer
      const userJson = user.toJSON
      res.send({
        user: userJson
      })
    } catch (e) {
      res.send(403).send({
        error: 'Les informations de connexions sont incorrectes'
      })
    }
  }
}
