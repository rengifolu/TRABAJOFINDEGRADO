const {Employee} = require('../models')
const {User} = require('../models')

module.exports = {
  /****************************************************************************
  ****            COMPROBACIONES PARA DEVOLVER EMPLEADOS                    ***
  ****************************************************************************/
  async empleados (req, res) {
    console.log('aqui', req.query.search)
    try {
      let empleado = null
      const search = req.query.search
      if (search) {
        empleado = await Employee.findAll({
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
    try {
      const {id} = req.body // se envia esto
      console.log('body', req.body)
      const empleado = await User.findOne({ /* busca en BBDD */
        where: {
          id: id
        }
      })
      console.log(empleado.toJSON())
    } catch (err) {
      res.status(500).send({
        error: 'error en busqueda de un empleado'
      })
    }
  }

}
