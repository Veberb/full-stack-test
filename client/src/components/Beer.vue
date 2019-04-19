<template>
  <b-card class="container beer-list">
    <div>
      <b-table
        id="table-id"
        :items="beers"
        :per-page="per_page"
        :current-page="page"
        striped
        hover
        small
      ></b-table>
      <b-pagination class="center" v-model="page" :total-rows="300" :per-page="per_page"></b-pagination>
    </div>
  </b-card>
</template>

<script>
// eslint-disable-next-line
import beerService from "../service/beerService";

export default {
  data () {
    return {
      query: undefined,
      per_page: 10,
      page: 1,
      items: []
    }
  },
  computed: {
    rows () {
      return this.items.length
    },
    beers () {
      console.log('chamou computed')
      const newArray = this.items.map(item => ({
        name: item.name,
        tagline: item.tagline,
        'first brewed': item.first_brewed,
        abv: `${item.abv}%`,
        ibu: item.ibu,
        'brewers tips': item.brewers_tips
      }))
      console.log(newArray, 'newArray')

      return this.items.map(item => ({
        name: item.name,
        id: item.id,
        tagline: item.tagline,
        'first brewed': item.first_brewed,
        abv: `${item.abv}%`,
        ibu: item.ibu,
        'brewers tips': item.brewers_tips
      }))
    }
  },
  watch: {
    async page () {
      this.items = await this.fetch()
      console.log(this.items)
    }
  },
  async created () {
    this.items = await beerService.list({})
  },
  methods: {
    async fetch () {
      return beerService.list({
        params: { page: Number(this.page) }
      })
    }
  }
}
</script>

<style scoped>
.beer-list {
  max-width: 80%;
  display: flex;
}
.center {
  justify-content: center;
}
.image {
  width: 100px;
  height: 200px;
}
</style>
