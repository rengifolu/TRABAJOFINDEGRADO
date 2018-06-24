<template>

<div class="contenedor">
  <!-- <div class="cartas">
    <v-layout row wrap ></p>
     <v-flex xs3 v-for="i in 4" :key="`4${i}`">
      <TarjetaEmpleado ></TarjetaEmpleado><p></p>
    </v-flex>
    </v-layout>
  </div> -->
<div class="cartas">
  <!-- <panel-trabajadores></panel-trabajadores> -->
   <TarjetaEmpleado></TarjetaEmpleado><p></p>
</div>
  <div class="barra">
    <Barra></Barra>
  </div>

  <!-- <v-container grid-list-xl fill-height>
   <v-layout row wrap>
     <v-flex >
       <Barra></Barra>
     </v-flex>
     <v-layout row wrap >
     <v-flex xs3 v-for="i in 5" :key="`4${i}`" >
       <TarjetaEmpleado></TarjetaEmpleado>
     </v-flex>
     </v-layout>
   </v-layout>
   <boton></boton>
 </v-container> -->
 <boton></boton>
</div>


</template>

<script>
import TarjetaEmpleado from './admins/TarjetaEmpleado.vue'
// import PanelTrabajadores from './admins/PanelTrabajadores.vue'
import Barra from './admins/BarraLateral.vue'
import Boton from './admins/BotonCrear.vue'
export default {
  components: {
    TarjetaEmpleado,
    Barra,
    Boton
  },
  data () {
    return {
    }
  }
}
</script>
<style scope>
*{
   margin: 0px;
   padding: 0px;
}
.contenedor{
   margin: auto;
   margin-top: 50px;
   width: 100%;
   height: 800px;
   // background-color: red;
}
.cartas{
  width: 83%;
  //height: 800px;
  float: right;
  //background-color: green;
  padding-right: 15%;
}
.barra{
  width: 16%;
  height: 800px;
  //background-color: blue;

}



</style>
