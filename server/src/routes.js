const AuthenticationController = require('./controllers/AuthenticationController')
// const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const RegisterControllerPolicy = require('./policies/RegisterControllerPolicy')
const EmployeesController = require('./controllers/EmployeesController')

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
}
