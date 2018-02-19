<template >


  <v-menu transition="slide-x-transition" bottom right>
    <v-btn class="cyan" dark slot="activator" >
      <v-icon>apps</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.title" @click="" :to="item.link">
        <v-icon left >{{ item.icon }}</v-icon>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>





</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      items: [
        { icon: 'home', title: 'MIS HERRAMIENTAS' },
        { icon: 'alarm', title: 'MI INFORMACIÓN PERSONAL' },
        { icon: 'money', title: 'MIS DATOS ECONOMICOS' },
        { icon: 'domain', title: 'MI PUESTO DE TRABAJO' },
        { icon: 'alarm', title: 'MI TIEMPO DE TRABAJO', link: 'paginasEmpleados/tiempoTrabajo' },
        { icon: 'info', title: 'INFORMACIÓN' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
