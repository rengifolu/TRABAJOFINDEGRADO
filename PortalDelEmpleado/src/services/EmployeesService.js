import Api from '@/services/Api'

export default {
  /* Muestra un empleado */
  empleados () {
    return Api().get('empleados')
  }
}
