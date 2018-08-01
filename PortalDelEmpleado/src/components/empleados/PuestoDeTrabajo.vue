<template>
   <v-app id="inspire">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media
            src="https://image.freepik.com/vector-gratis/programador-en-el-ordenador_23-2147505689.jpg"
            height="400px"
          ></v-card-media>
  
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{empleado.nombre}}</h3>
              <div>{{empleado.puesto}}<br>{{empleado.email}}<br>{{empleado.notas}}</div>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn flat color="orange">Info</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import EmployeesService from '@/services/EmployeesService'
export default {
  data () {
    return {
      empleado: null,
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  },
  async mounted () {
    const id = this.$store.state.route.params.identificador
    console.log('id : ', id)
    this.empleado = (await EmployeesService.empleado(id)).data
  }
}
</script>

<style scoped>
</style>
