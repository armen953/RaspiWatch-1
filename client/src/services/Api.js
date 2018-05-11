import axios from 'axios'

export default (token) => {
  return axios.create({
    baseURL: `http://localhost:8280/`,
    headers: { Authorization: 'Bearer ' + token }
  })
}
