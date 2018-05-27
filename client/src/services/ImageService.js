import Api from '@/services/Api'

// exemple: how to use in other files
// AutentificationService.register({
//   email: 'test@gmail.com',
//   password: '123456'
// })

export default {
  getAllImages (token) {
    return Api(token).get('/image/all')
  },
  getImage (token, imageName) {
    return Api(token).get('/image/all/' + imageName)
  }
}
