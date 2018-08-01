<template>
  <div class="">
    <v-btn
          fab
          bottom
          right
          color="pink"
          dark
          fixed
          @click.stop="dialog = !dialog"
        >
          <v-icon>add</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="800px">
      <form  @submit.prevent="registro(),dialog = false">
        <v-card>
          <v-card-title
            class="grey lighten-4 py-4 title"
          >
            Crear Administrador
          </v-card-title>
          <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
              <v-flex xs12 align-center justify-space-between>
                <v-layout align-center>
                  <v-avatar size="40px" class="mr-3">
                    <img
                      src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                      alt=""
                    >
                  </v-avatar>
                  <v-text-field
                    placeholder="Nombre"
                    v-model="nombre"
                    required
                  ></v-text-field>
                </v-layout>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  prepend-icon="business"
                  placeholder="Empresa"
                  v-model="empresa"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  placeholder="Puesto de trabajo"
                  v-model="puesto"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="mail"
                  placeholder="Email"
                  required
                  v-model="email"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="fingerprint"
                  placeholder="Contraseña"
                  type= password
                  required
                  v-model="password"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  type="tel"
                  prepend-icon="phone"
                  placeholder="(000) 000 - 0000"
                  mask="phone"
                  v-model="telefono"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  prepend-icon="notes"
                  placeholder="Notas"
                  v-model="notas"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-card-actions>
            <v-btn flat color="primary">Mas</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="dialog = false">Cancelar</v-btn>
            <v-btn flat  type="submit" color="primary"  >Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </form>

        </v-dialog >
  </div>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      dialog: false,
      nombre: '',
      empresa: '',
      puesto: '',
      email: '',
      password: '',
      telefono: '',
      notas: '',
      error: null
    }
  },
  methods: {
    // este metodo enlaza desde '@/services/AuthenticationService' y
    // desde ahi con Api.js donde esta axios
    async registro () { // asyn creo que conecta con axios por que sino no uncionaba
      try {
        const response = await AuthenticationService.register({ // almacena en response
          email: this.email,                                    // email de axios con this.email de v-model
          password: this.password,
          nombre: this.nombre,
          empresa: this.empresa,
          puesto: this.puesto,
          telefono: this.telefono,
          notas: this.notas
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    ocultar () {
      this.dialog = false
    }
  }
}
</script>

<style lang="css">
</style>
