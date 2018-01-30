import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  }
}

// uthenticationService.register({
//  email:'andrelujan7@gmail.com',
//  password: 'pechaman'
// })
