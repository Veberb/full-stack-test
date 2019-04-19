import axios from 'axios'
import { dev } from '../../config/'
const apiUrl = `${dev.host}:${dev.serverPort}/api`

export default {
  async login (data) {
    console.log(`http://${apiUrl}/users/login`)
    return axios.post(`${apiUrl}/users/login`, data)
  }
}
