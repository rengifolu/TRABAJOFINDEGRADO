<template >
  <div class="contenedorPrincipal">
    <v-card color="grey lighten-4" flat>

          <v-layout row wrap>
            <v-flex >
              <v-subheader>Tipo de ausencia</v-subheader>
            </v-flex>
            <v-flex xs6>
              <v-select
                v-bind:items="states"
                v-model="e2"
                label="Select"
                single-line
                auto
                append-icon="map"
                hide-details
              ></v-select>
            </v-flex>
          </v-layout>

    </v-card>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        e1: null,
        e2: 'Arkansas',
        e3: null,
        e4: null,
        items: [
          { text: 'State 1' },
          { text: 'State 2' },
          { text: 'State 3' },
          { text: 'State 4' },
          { text: 'State 5' },
          { text: 'State 6' },
          { text: 'State 7' }
        ],
        states: [
          'Ausencia Completa', 'Ausencia parcial', 'Consulta medica', 'Libres por festivo',
          'Vacaciones', 'Horas sindicales'
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contenedorPrincipal{
  width: 50%;
}
</style>
