<template>
  <div id="app">
    <v-app>
      <page-header></page-header>
      <main>
        <v-container fluid>
         <router-view></router-view>
       </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import pageHeader from './components/Header.vue'
export default {
  components: {
    pageHeader
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
}

</style>
