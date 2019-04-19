import axios from 'axios'
import { dev } from '../../config/'
const apiUrl = `http://${dev.host}:${dev.serverPort}/api`

export default {
  async login (data) {
    return axios.post(`${apiUrl}/users/login`, data)
  }
}
