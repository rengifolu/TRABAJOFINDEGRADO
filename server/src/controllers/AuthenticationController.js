const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}
/****************************************************************************
****              COMPROBACIONES PARA REGISTRO                            ***
****************************************************************************/
module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
         user: userJson,
         token: jwtSignUser(userJson)
      })
    } catch (error) {
      res.status(400).send({  // Error 400: Solicitud incorrecta
         error: 'este email ya esta en uso'
      })
    }
  },
  /****************************************************************************
  ****            COMPROBACIONES PARA LOGIN                                 ***
  ****************************************************************************/
  async login (req, res) {
    try {
      const {email, password} = req.body // se envia esto
      const user = await User.findOne({  // busca en BBDD
        where: {
          email: email                   // localiza su email
        }
      })
      console.log(user.toJSON())
      if (!user) {                       // si no encuentra email
        return res.status(403).send({    // Error 403: Acceso denegado/prohibido
           error: 'la informacion de login es incorrecta'
        })
      }

      // si lo encuentra comprueba password
      const isPasswordValid = await user.comparePassword(password)
      // console.log(password, user.password)

      // si no es valido
      if (!isPasswordValid) {
        return res.status(403).send({ // Error 403: Acceso denegado/prohibido
           error: 'la informacion de password es incorrecta'
        })
      }
      // si ha llegado aqui
      const userJson = user.toJSON()
      console.log('ati' + userJson)
      res.send({
         user: userJson,
         token: jwtSignUser(userJson)
      })
    } catch (error) {
       res.status(500).send({        // 500 Internal Server Error
         error: 'ha ocurrido un error intentando login'
      })
    }
  },
  /****************************************************************************
  ****            COMPROBACIONES PARA DEVOLVER EMPLEADOS                    ***
  ****************************************************************************/
  async empleados (req, res) {
    try {
      let empleado = null
      const search = req.query.search
      if (search) {
        empleado = await User.findAll({
          where: {
            $or: [
              'nombre', 'puesto', 'empresa', 'email'
            ].map(key => ({
              [key]: {
                $like: `%${search}%`
              }
            }))
          }
        })
      } else {
        empleado = await User.findAll({
          limit: 10
        })
      }
      res.send(empleado)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the songs'
      })
    }
  }
}
