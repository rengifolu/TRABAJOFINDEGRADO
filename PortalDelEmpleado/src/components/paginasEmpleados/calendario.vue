<template >
  <div class="">
    <div>
      <v-app id="inspire">
        <v-layout>
          <v-flex md12 lg8 class="hidden-xs-only">
            <v-date-picker color="green lighten-1" header-color="cyan" v-model="picker1" landscape></v-date-picker>
          </v-flex>
        </v-layout>
      </v-app>
    </div>
    <div>
      <v-app id="inspire">
        <v-layout>
          <v-flex md12 lg8 class="hidden-xs-only">
            <v-date-picker color="green lighten-1" header-color="cyan" v-model="picker2" landscape></v-date-picker>
          </v-flex>
        </v-layout>
      </v-app>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        picker1: null,
        picker2: null
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.application--wrap {
    padding-top: 10%;
}
</style>
