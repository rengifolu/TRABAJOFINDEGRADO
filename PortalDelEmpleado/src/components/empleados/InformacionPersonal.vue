<template>
<div>
    <tarjeta>
  </tarjeta>  
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade"
      transition="fade"
    ></v-carousel-item>
  </v-carousel>
</div>
</template>

<script>
import Tarjeta from './Tarjeta.vue'
export default {
  components: {
    Tarjeta
  },
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
.list-group-item input[type=text]{
           width:100%;
           margin-bottom: 15px;
}

.completado{
           text-decoration: line-through;
           font-style: italic;
           color: gray;
}

</style>
