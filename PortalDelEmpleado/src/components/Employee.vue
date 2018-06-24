<template>
  <div class="contenedor">
    <div class="pagina">
    <!-- <cambio-contrasena></cambio-contrasena> -->
    <!-- <peticion-ausencias></peticion-ausencias> -->
    <informacion-personal></informacion-personal>
    </div>
    <div class="barra">
      <Barra></Barra>
    </div>
  </div>
</template>

<script>
import Barra from './empleados/BarraLateral.vue'
import PeticionAusencias from './empleados/PeticionAusencias.vue'
import CambioContrasena from './empleados/CambioContrasena.vue'
import InformacionPersonal from './empleados/InformacionPersonal.vue'
export default {
  components: {
    Barra,
    PeticionAusencias,
    CambioContrasena,
    InformacionPersonal
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.contenedor{
   margin: auto;
   margin-top: 50px;
   width: 100%;
   height: 800px;
   // background-color: red;
}
.barra{
  width: 16%;
  height: 800px;
  //background-color: blue;
}
.pagina{
  width: 83%;
  float: right;
  padding-right: 15%;
}
</style>
