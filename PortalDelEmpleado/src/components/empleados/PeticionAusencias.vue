<template>
<div>
<v-layout row wrap>
    <v-date-picker
      v-model="date"
      full-width
      landscape
      class="mt-3"
      color="cyan accent-4"
    ></v-date-picker>
   <v-spacer></v-spacer>
    <v-flex xs11 sm5>
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu2"
        :nudge-right="40"
        :return-value.sync="time"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="time"
          label="Hora de inicio de auscencia"
          prepend-icon="access_time"
          readonly
        ></v-text-field>
        <v-time-picker
         color="cyan accent-4"
          v-if="menu2"
          v-model="time"
          @change="$refs.menu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-flex>
</v-layout>
<v-divider></v-divider>
<v-divider></v-divider>
<v-divider></v-divider>
<lista></lista>
</div>
</template>

<script>
import Lista from './Lista.vue'
export default {
  components: {
    Lista
  },
  data () {
    return {
      date: '2018-03-02',
      time: null,
      menu2: false,
      modal2: false
    }
  }
}
</script>

<style scoped>
.cuerpo{
  /* margin-left: 25%; */ 
}
/* .calendario{
  float: left;
}
.reloj{
  float: left;
  margin-left: 20%;
} */
</style>
