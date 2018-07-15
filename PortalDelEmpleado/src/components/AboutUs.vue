<template >
  <v-carousel hide-controls>
    <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i" ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: '../../static/imagen1.jpg'
          },
          {
            src: '../../static/imagen2.jpg'
          },
          {
            src: '../../static/logo-main.png'
          },
          {
            src: '../../static/imagen2.jpg'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
