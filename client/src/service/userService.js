import { $http, authorization } from '../util/http'

export default {
  async login (data) {
    try {
      const res = await $http.post('/users/login', data)
      authorization(res.data.token)
      return res.data
    } catch (e) {
      throw e.response.data
    }
  }
}
