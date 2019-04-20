<template>
  <b-card class="container beer-list">
    <div class="row header">
      <div class="col-sm-3">
        <b-form-input
          class="filter"
          v-model="beer_name"
          @input="filter"
          placeholder="Enter your name"
        ></b-form-input>
      </div>
      <div>
        <b-button @click="logout">Sair</b-button>
      </div>
    </div>
    <div>
      <b-table
        id="table-id"
        :items="beers"
        :current-page="page"
        striped
        hover
        small
        empty-text
        empty-filtered-text
      ></b-table>
      <b-pagination class="center" v-model="page" :total-rows="rows" :per-page="per_page"></b-pagination>
    </div>
  </b-card>
</template>

<script>
// eslint-disable-next-line
import beerService from "../service/beerService";

export default {
  data () {
    return {
      beer_name: undefined,
      per_page: 10,
      page: 1,
      items: []
    }
  },
  computed: {
    rows () {
      // Fiz assim pq eu não consigo dar um count no banco para saber o total de rows e fazer o cálculo certo
      return this.items.length < 10 ? this.items.lenght : 50
    },
    beers () {
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
    }
  },
  async created () {
    this.items = await beerService.list({})
  },
  methods: {
    logout () {
      localStorage.removeItem('mytapp-token')
      this.$router.push('/')
      this.$toasted.error('Deslogado com sucesso !')
    },
    async filter () {
      this.page = 1
      this.items = await this.fetch()
    },
    async fetch () {
      return beerService.list({
        params: { page: Number(this.page), beer_name: this.beer_name }
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

.header {
  justify-content: space-between !important;
}
</style>
