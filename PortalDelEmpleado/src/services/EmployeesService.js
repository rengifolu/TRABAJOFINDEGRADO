import Api from '@/services/Api'

export default {
  /* Muestra un empleado */
  empleados () {
    return Api().get('empleados')
  },
  empleado (id) {
    console.log('identificador :', id)
    return Api().get(`empleado/${id}`)
  }
}
