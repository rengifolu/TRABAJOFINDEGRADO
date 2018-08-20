const {Ausencia} = require('../models')

module.exports = {
/****************************************************************************
****              CREA AUSCENCIA                                          ***
****************************************************************************/
  async ausencia (req, res) {
    try {
      const ausencia = await Ausencia.create(req.body)
      res.send(ausencia)
      console.log(ausencia.body)
    } catch (error) {
      res.status(400).send({ /* Error 400: Solicitud incorrecta */
        error: 'error en ausencia backend'
      })
    }
  },
  /****************************************************************************
   ****              DEVUELVE AUSCENCIAS                                    ***
   ****************************************************************************/
  async getAusencias (req, res) {
    try {
      let ausencias = null
      ausencias = await Ausencia.findAll({
        limit: 100
      })
      res.send(ausencias)
      console.log(ausencias.body)
    } catch (error) {
      res.status(400).send({ /* Error 400: Solicitud incorrecta */
        error: 'error al devolver ausncias backend'
      })
    }
  }

}
