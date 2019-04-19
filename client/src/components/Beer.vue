<template>
  <b-card class="container login">oi</b-card>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      form: {
        email: undefined,
        password: undefined
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.log('oi')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  max-width: 450px;
  background-color: #e6e6e6;
}
.image {
  width: 100%;
}
</style>
