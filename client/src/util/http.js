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
