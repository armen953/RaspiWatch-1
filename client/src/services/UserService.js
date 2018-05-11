import Api from '@/services/Api'

// exemple: how to use in other files
// AutentificationService.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })

export default {
  getUsers (token) {
    return Api(token).get('/user/get/all')
  },
  deleteUser (pseudoUser, token) {
    return Api(token).delete('/user/delete/' + pseudoUser)
  },
  updateUser (pseudoUser, credentials, token) {
    return Api(token).post('/user/update/' + pseudoUser, credentials)
  }
}
