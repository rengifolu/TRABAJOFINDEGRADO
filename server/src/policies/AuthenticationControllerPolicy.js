const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      nombre: Joi.string().required(),
      empresa: Joi.string().required(),
      puesto: Joi.string().required(),
      telefono: Joi.string().required(),
      notas: Joi.string().required(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Necesitas indicar un email valido'
          })
          break
        case 'password':
          res.status(400).send({
            error: `El password indicado tiene que cumplir estas reglas
            <br>
            1. Necesita contener solo letras minisculas,letras mayusculas y numero
            <br>
            2. Necesita tener al menos 8 caracteres y no mas de 32
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Información de registro invalida'
          })
      }
    } else {
      next()
    }
  }
}
