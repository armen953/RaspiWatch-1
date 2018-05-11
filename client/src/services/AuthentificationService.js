import Api from '@/services/Api'

// exemple: how to use in other files
// AutentificationService.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })

export default {
  register (credentials, token) {
    return Api(token).post('register', credentials)
  },
  login (credentials) {
    return Api().post('authenticate', credentials)
  }
}
