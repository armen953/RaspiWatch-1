const Joi = require('joi') // allow validations -> doc at https://github.com/hapijs/joi

module.exports = {
  register (req, res, next) {
    const schema = {
      pseudo: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string(),
      admin: Joi.boolean()
    }

    const {error} = Joi.validate(req.body, schema, {presence: 'required'}) //  {presence: 'required'} -> every information of the scheme is required
    if (error) {
      switch (error.details[0].context.key) {
        case 'pseudo':
          res.status(400).send({
            error: 'The username is invalid'
          })
          break
        case 'email':
          res.status(400).send({
            error: 'The email address is invalid'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Uncorrect password'
          })
          break
        case 'admin':
          res.status(400).send({
            error: 'Admin pb ( a retirer plus tard) -> sera traité dans default'
          })
          break
        default:
          res.status(400).send({
            error: 'Something went wrong, try again later'
          })
          break
      }
    } else {
      next() // if everything is ok, go next
    }
  }
}
