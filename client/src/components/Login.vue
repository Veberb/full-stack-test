<template>
  <b-card class="container login">
    <img class="image" src="@/assets/mytapp-logo-12.png">
    <h2>Login</h2>
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1">
        <b-form-input
          v-validate="'required|email'"
          name="email"
          autocomplete="off"
          v-model="form.email"
          placeholder="Email"
        ></b-form-input>
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </b-form-group>

      <b-form-group id="input-group-2">
        <b-form-input
          autocomplete="off"
          name="password"
          type="password"
          v-validate="'required'"
          v-model="form.password"
          placeholder="Senha"
        ></b-form-input>
        <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-card>
</template>

<script>
// eslint-disable-next-line
import userService from "../service/userService";

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
    async onSubmit (event) {
      try {
        if (event) event.preventDefault()
        await userService.login(this.form)
        this.$toasted.success('Bem vindo :)')
        this.$router.push('/beer')
      } catch (error) {
        this.$toasted.error(error.message)
      }
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
