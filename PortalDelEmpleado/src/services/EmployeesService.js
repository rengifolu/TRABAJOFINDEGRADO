import Api from '@/services/Api'

export default {
  /* Muestra varios empleado */
  empleados () {
    return Api().get('empleados')
  },
  /* muestra un empelado */
  empleado (id) {
    console.log('identificador :', id)
    return Api().get(`empleado/${id}`)
  },
  put (empleado) {
    return Api().put(`empleado/${empleado.id}`, empleado)
  }
}
