<template>
  <v-layout column  class="login">
    <v-flex xs6 offset-xs3>
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Sign in</v-toolbar-title>
      </v-toolbar>
      <br>
      <br>
        <form name="tab-tracker-form" autocomplete="off"   @submit.prevent="enviar(email,password)" >
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br>
          <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password" ></v-text-field>
          <br>
          <div class="danger-alert" v-html="error" />
          <br>
          <v-btn dark class="cyan"  type="submit">Login</v-btn>
        </form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
    },
    enviar (email, password) {
      this.$http.post('https://localhost:3000/', {email, password}).then(function (response) {
        // console.log(response.data + 'ok post')
        console.log('ok post')
      }, function (response) {
        // si falla post
        console.log('fallo en post')
      })
    }
  }
}
</script>

<style scoped>
.login{
  padding-top: 10%;
}
</style>