<template>
<div>

     <!-- LABEL AÑADIR ASUCENCIA -->
      <v-alert v-if="!registrarAusencia"
      :value="true"
      color="cyan"
      icon="info" 
      >
      Registrar auscencia
      </v-alert>

      <!-- BOTON AÑADIR AUSCENCIA -->
      <v-btn color="cyan" dark v-if="!registrarAusencia" v-on:click="registrarAusencia=!registrarAusencia" >
        <v-icon dark>add</v-icon>
      </v-btn>
     <!-- SELECCIONAR TIPO DE AUSENCIA -->
      <v-select
        v-if="registrarAusencia"
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Tipo de ausencia"
        required
      ></v-select>

      <!-- CALENDARIO Y RELOJ -->
      <v-layout row wrap v-if="registrarAusencia">
          <v-date-picker
            v-model="ausencia.date"
            full-width
            landscape
            class="mt-3"
            color="cyan accent-4"
          ></v-date-picker>
        <v-spacer></v-spacer>
        <!-- PRIMER RELOJ -->
          <v-flex xs11 sm5>
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              v-model="menu2"
              :nudge-right="40"
              :return-value.sync="ausencia.timeInicial"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="ausencia.timeInicial"
                label="Hora de inicio de auscencia"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
              color="cyan accent-4"
                v-if="menu2"
                v-model="ausencia.timeInicial"
                @change="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-flex>
          
           <!-- SEGUNDO RELOJ -->
           
          <v-flex xs11 sm5>
            <v-menu
              ref="menu"
              :close-on-content-click="false"
              v-model="menu2"
              :nudge-right="40"
              :return-value.sync="ausencia.timeFinal"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <v-text-field
                slot="activator"
                v-model="ausencia.timeFinal"
                label="Hora final de auscencia"
                prepend-icon="access_time"
                readonly
              ></v-text-field>
              <v-time-picker
              color="cyan accent-4"
                v-if="menu2"
                v-model="ausencia.timeFinal"
                @change="$refs.menu.save(time)"
              ></v-time-picker>
            </v-menu>
          </v-flex>

      </v-layout>

      <v-divider></v-divider>
      <v-divider></v-divider>
      <!-- BOTON GUARDAR-->
      <v-btn color="cyan" dark v-if="registrarAusencia" v-on:click="aniadirAusencia()">
        <v-icon dark>save</v-icon>
      </v-btn>

      <!-- BOTON CANCELAR-->
      <v-btn color="cyan" dark v-if="registrarAusencia" v-on:click='registrarAusencia = !registrarAusencia'>
        <v-icon dark>cancel</v-icon>
      </v-btn>


      <!-- <lista></lista> -->
      <CRUDAusencias></CRUDAusencias>
</div>
</template>

<script>
import Lista from './Lista.vue'
import CRUDAusencias from './CRUDAusencias.vue'
import AusenciasesService from '@/services/AusenciasesService'
export default {
  components: {
    Lista,
    CRUDAusencias
  },
  async mounted () {
    const id = this.$store.state.route.params.identificador
    this.empleado = (await AusenciasesService.getAusencias(id)).data
  },
  data () {
    return {
      empleado: null,
      ausencia: {
        date: '2018-03-02',
        timeInicial: null,
        timeFinal: null,
        email: null
      },
      menu2: false,
      modal2: false,
      registrarAusencia: false,
      select: null,
      items: [
        'Visita medica',
        'Retraso en entrada',
        'Vacaciones',
        'Ausencia injustificada'
      ]
    }
  },
  methods: {
    async aniadirAusencia () {
      this.registrarAusencia = !this.registrarAusencia
      console.log(this.items[0])
      // enviar cambio a servidor
      await AusenciasesService.registrarAusencia(this.ausencia)
      console.log(this.ausencia.date)
      console.log(this.ausencia.timeInicial)
      console.log(this.ausencia.timeFinal)
      console.log(this.items)
    }
  }
}
</script>

<style scoped>
.letra{
  font: 250% sans-serif;
}
</style>
