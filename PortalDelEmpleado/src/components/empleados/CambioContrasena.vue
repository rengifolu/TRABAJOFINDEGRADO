<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title >Cambio de Contraseña</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
           name="input-1"
           label ="Contraseña Actual"
           v-model="contrasena">
          </v-text-field>
          <v-text-field
           name="input-1"
           label ="Contraseña nueva"
           type= password
           v-model="ContrasenaNueva">
          </v-text-field>
          <v-text-field
           name="input-1"
           label ="Repita Contraseña nueva"
           type= password
           v-model="ContrasenaNuevaRepetida">
          </v-text-field>
          <br>
          <!-- <v-alert color="error" icon="warning" value="true">This is a error alert.</v-alert> -->
          <div class="error" v-html="error"/>
          <v-btn
          dark
          class="cyan"
          @click="cambiar">
          Cambiar
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      contrasena: '',
      ContrasenaNueva: '',
      ContrasenaNuevaRepetida: '',
      error: null
    }
  },
  methods: {
    async cambiar () {
      try {
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style>
.error{
  color:red;
}
.flex.offset-xs3 {
    margin-top: 7%;
    margin-left: 25%;
}
</style>
