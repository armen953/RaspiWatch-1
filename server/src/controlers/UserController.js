const { User } = require('../models')

module.exports = {
  async getAllUsers (req, res) {
    try {
      let users = await User.findAll()
      res.send(users)
    } catch (error) {
      return res.status(403).send({ // 403 -> auth error
        error: 'Les informations de connexions sont incorrectes'
      })
    }
  },

  async deleteUser (req, res) {
    try {
      let pseudo = req.params.pseudo
      User.destroy({
        where: {
          pseudo: pseudo
        }
      })
      return res.send({
        message: 'ok'
      })
    } catch (e) {
      return res.status(403).send({ // 403 -> auth error
        error: 'Probleme lors de la suppression'
      })
    }
  },

  async updateUserInfo (req, res) {
    let pseudo = req.params.pseudo
    let admin = req.body.admin
    try {
      User.update(
        {
          admin: admin
        },
        {
          where: {
            pseudo: pseudo
          }
        }
      )
      return res.send({
        message: 'Utilisateur mise a jour'
      })
    } catch (e) {
      return res.status(403).send({ // 403 -> auth error
        error: 'Probleme lors de la suppression'
      })
    }
  }
}
