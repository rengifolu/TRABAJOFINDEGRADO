const AuthenticationController = require('./controllers/AuthenticationController')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const RegisterControllerPolicy = require('./policies/RegisterControllerPolicy')
const EmployeesController = require('./controllers/EmployeesController')
const AusenciasController = require('./controllers/AusenciasController')

module.exports = (app) => {
  app.post('/register',
    RegisterControllerPolicy.register,
    EmployeesController.register)

  app.post('/login',
    AuthenticationController.login)

  app.get('/empleados',
    EmployeesController.empleados)

  app.get('/empleado/:id',
    EmployeesController.empleado)

  app.put('/empleado/:id',
    EmployeesController.put)

  /* PARA AUSENCIAS */
  app.post('/ausencia',
    AusenciasController.ausencia)
  /* HACEMOS BUSQUEDA POR EMAIL YA QUE ESTA EN OTRA TABLA Y SE GUARDA MEDIANTE EMAIL
     MEJORAR BASE DE DATOS */
  app.get('/ausencias/:email',
    AusenciasController.getAusencias)
}
