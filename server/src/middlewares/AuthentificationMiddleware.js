const Joi = require('joi') // permet de faire des validations -> voir doc https://github.com/hapijs/joi

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      pseudo: Joi.string(),
      password: Joi.string(),
      admin: Joi.boolean()
    }

    const {error} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Adresse email n\'est pas valide'
          })
          break
        case 'pseudo':
          res.status(400).send({
            error: 'Adresse email n\'est pas valide'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'password email n\'est pas valide'
          })
          break
        case 'admin':
          res.status(400).send({
            error: 'Admin pb ( a retirer plus tard) -> sera traité dans default'
          })
          break
        default:
          res.status(400).send({
            error: 'Probleme essayer plus tard'
          })
          break
      }
    } else {
      next() // si tout est ok passer a la suite
    }
  }
}
