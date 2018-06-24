<template>
  <div id="app">
    <v-app>
      <page-header></page-header>
      <main>
      <router-view></router-view>
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

<style scoped>
/* *{
  width: 100%;
} */
</style>
