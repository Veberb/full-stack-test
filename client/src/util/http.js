import axios from 'axios'
import { dev } from '../../config'

const $http = axios.create({
  baseURL: `http://${dev.host}:${dev.serverPort}/api`
})

export { $http }

export function authorization (auth) {
  localStorage.setItem('mytapp-token', auth)
  $http.defaults.headers.common['mytapp-token'] = auth
  return auth
}

$http.interceptors.request.use(config => {
  config.headers.common['mytapp-token'] = localStorage.getItem('mytapp-token')
  return config
})

$http.interceptors.response.use(
  res => {
    return res
  },
  err => {
    if (err.response && err.response.status === 401) {
      window.location.href = '/'
    }
    return Promise.reject(err)
  }
)
