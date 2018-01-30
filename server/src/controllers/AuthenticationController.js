const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (e) {
      res.status(400).send({  // Error 400: Solicitud incorrecta
         error: 'este email ya esta en uso'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      console.log(user.toJSON())
      if (!user) {
        return res.status(403).send({ // Error 403: Acceso denegado/prohibido
           error: 'la informacion de login es incorrecta'
        })
      }

      const isPasswordValid = password === user.password
      // console.log(password, user.password)
      if (!isPasswordValid) {
        return res.status(403).send({ // Error 403: Acceso denegado/prohibido
           error: 'la informacion de password es incorrecta'
        })
      }

      const userJson = user.toJSON()
      res.send({
         user: userJson
      })
    } catch (error) {
       res.status(500).send({        // 500 Internal Server Error
         error: 'ha ocurrido un error intentando login'
      })
    }
  }
}
