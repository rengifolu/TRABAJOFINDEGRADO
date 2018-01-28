import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// uthenticationService.register({
//  email:'andrelujan7@gmail.com',
//  password: 'pechaman'
// })
