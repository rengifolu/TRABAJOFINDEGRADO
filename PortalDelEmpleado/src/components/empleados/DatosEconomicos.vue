<template>
<div>
  <h1>últimos recibos</h1>
  <lista></lista>
   <!--Datos economicos-->
   <embed src="../../static/nomina1.pdf" type="application/pdf" width="100%" height="1200px">
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
    }
  }
}
</script>

<style scoped>
</style>
