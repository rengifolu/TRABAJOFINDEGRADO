<template>
    <v-layout column class="pt-5">
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title>Registro</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <input type="email" name="email" placeholder="email" v-model="email">
            <br>
            <input type="password" name="password" placeholder="password" v-model="password">
            <br>
            <div class="error" v-html="error"/>
            <v-btn
            class="cyan"
            @click="registro">
            Register
            </v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: 'pechaman',
      error: null
    }
  },
  methods: {
    // este metodo enlaza desde '@/services/AuthenticationService' y
    // desde ahi con Api.js donde esta axios
    async registro () { // asyn creo que conecta con axios por que sino no uncionaba
      try {
        await AuthenticationService.register({ // almacena en response
          email: this.email,                                    // email de axios con this.email de v-model
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.error{
  color:red;
}


</style>
