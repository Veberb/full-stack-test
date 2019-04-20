import { $http } from '../util/http'

export default {
  async list ({ params }) {
    try {
      const res = await $http.get('/beers', { params })
      return res.data
    } catch (e) {
      throw e
    }
  }
}
