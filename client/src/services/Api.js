import axios from 'axios'
import urlConfig from './../../urlConfig'

export default (token) => {
  return axios.create({
    baseURL: urlConfig.url,
    headers: { Authorization: 'Bearer ' + token }
  })
}
