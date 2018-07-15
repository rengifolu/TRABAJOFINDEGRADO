<template>
<div class="tarjeta" >
  <v-card class="floating-box">
     <v-card-media src="static/imagen1.jpg" height="200px" >
     </v-card-media>
     <v-card-title primary-title>
       <div>
         <h3 class="headline mb-0"></h3>
         <div>{{'empleado.nombre'}}<br><br></div>
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
import EmployeesService from '@/services/EmployeesService'
export default {
  data () {
    return {
      empleado: null
    }
  },
  async mounted () {
    this.empleado = (await EmployeesService.empleados()).data
    console.log('aqui carajo', this.empleado)
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');
.tarjeta{
  width: 100%;
  height: 100%;
}

.floating-box {
    float: left;
    width: 30%;
    margin: 20px;
    border: 3px solid grey;
}
</style>
