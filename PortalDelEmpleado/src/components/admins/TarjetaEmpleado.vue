<template>
<div class="tarjeta" >
  <v-card v-for="empleado in empleados"
  :key="empleado.id" class="floating-box">
     <v-card-media src="static/imagen1.jpg" height="200px" >
     </v-card-media>
     <v-card-title primary-title>
       <div>
         <h3 class="headline mb-0">{{empleado.nombre}}</h3>
         <div>{{empleado.email}}<br>{{empleado.puesto}}<br>{{empleado.notas}}</div>
       </div>
     </v-card-title>
     <v-card-actions>
       <v-btn flat color="orange">Modificar</v-btn>
       <v-btn flat color="orange">Explorar</v-btn>
     </v-card-actions>
   </v-card>
</div>


</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      empleados: null
    }
  },
  async mounted () {
    this.empleados = (await AuthenticationService.empleados()).data
    console.log(this.empleados)
  }
}
</script>

<style scoped>
@impor url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');
.tarjeta{
  width: 100%;
  height: 100%;
}

.floating-box {
    float: left;
    width: 30%;
    //height: 105px;
    margin: 20px;
    border: 3px solid grey;
}


// http://lorempixel.com/350/230/
</style>
