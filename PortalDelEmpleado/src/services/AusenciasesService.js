import Api from '@/services/Api'

export default {
  /* Muestra ausencias */
  getAusencias (email) {
    return Api().get(`ausencias/${email}`)
  },
  /* registra ausencias */
  registrarAusencia (ausencia) {
    return Api().post(`ausencia`, ausencia)
  }
}
