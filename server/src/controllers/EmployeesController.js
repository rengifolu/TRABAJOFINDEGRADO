const {Employee} = require('../models')
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  /****************************************************************************
****              COMPROBACIONES PARA REGISTRO                            ***
****************************************************************************/
  async register (req, res) {
    try {
      const user = await Employee.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (error) {
      res.status(400).send({ /* Error 400: Solicitud incorrecta */
        error: 'este email ya esta en uso'
      })
    }
  },
  /****************************************************************************
  ****            COMPROBACIONES PARA DEVOLVER EMPLEADOS                    ***
  ****************************************************************************/
  async empleados (req, res) {
    console.log('aqui', req.query.search)
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
        console.log(empleado.toJSON())
      } else {
        empleado = await User.findAll({
          limit: 10
        })
      }
      res.send(empleado)
    } catch (err) {
      res.status(500).send({
        error: 'error en busqueda de varios empleados'
      })
    }
  },

  async empleado (req, res) {
    console.log('aqui estoy', req.params.id)
    try {
      const empleado = await User.findById(req.params.id)
      console.log('que fea nota : ', empleado.toJSON())
      res.send(empleado)
    } catch (err) {
      res.status(500).send({
        error: 'error en busqueda de un empleado'
      })
    }
  },

  async put (req, res) {
    console.log('aqui estoy put', req.params.id)
    try {
      const empleado = await User.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      res.send(empleado)
    } catch (err) {
      res.status(500).send({
        error: 'error en actualización de un empleado'
      })
    }
  }

}
