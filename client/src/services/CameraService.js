import Api from '@/services/Api'

export default {
  startMotion () {
    return Api().post('camera/1/detection/start')
  },
  stopMotion (credentials) {
    return Api().post('camera/1/detection/stop')
  }
}
