<template>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <div class="white elevation-2">
          <v-toolbar flat dense class="cyan" dark>
            <v-toolbar-title >Login</v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
             name="input-1"
             label ="Email"
             v-model="email">
            </v-text-field>
            <v-text-field
             name="input-1"
             label ="Password"
             type= password
             v-model="password">
            </v-text-field>
            <br>
            <!-- <v-alert color="error" icon="warning" value="true">This is a error alert.</v-alert> -->
            <div class="error" v-html="error"/>
            <v-btn
            dark
            class="cyan"
            @click="login">
            Login
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
      email: '',
      password: '',
      puesto: '',
      error: null
    }
  },
  methods: {
    // este metodo enlaza desde '@/services/AuthenticationService' y
    // desde ahi con Api.js donde esta axios
    async login () { // asyn creo que conecta con axios por que sino no uncionaba
      try {
        const response = await AuthenticationService.login({ // almacena en response
          email: this.email,                                    // email de axios con this.email de v-model
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        // y vamos a pagina de persona que se ha logado si es admin o empleado
        if (response.data.user.puesto === 'Administrador') {
          this.$router.push({
            name: 'Admin'
          })
        }
        if (response.data.user.puesto !== 'Administrador') {
          this.$router.push({
            name: 'Employee',
            params: {
              identificador: response.data.user.id
            }
          })
        }
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
.flex.offset-xs3 {
    margin-top: 7%;
    margin-left: 25%;
}

</style>
