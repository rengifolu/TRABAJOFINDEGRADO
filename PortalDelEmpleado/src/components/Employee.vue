<template>
  <div class="contenedor">
    <div class="pagina">
        <div class="text-xs-center">
          <v-menu
            transition="slide-y-transition"
            bottom
          >
            <v-btn @click="mostrar('infoPersonal')"
              slot="activator"
              class="purple"
              color="primary"
              dark
            >
              Informacion Personal
            </v-btn>
          </v-menu>

          <v-menu
            bottom
            origin="center center"
            transition="scale-transition"
          >
            <v-btn @click="mostrar('tiempoDeTrabajo')"
              slot="activator"
              color="primary"
              dark
            >
              Ausencias
            </v-btn>
          </v-menu>

          <v-menu
            transition="slide-x-transition"
            bottom
            right
          >
            <v-btn @click="mostrar('cambioContrasena')"
              slot="activator"
              class="deep-orange"
              color="primary"
              dark
            >
              Cambio de Contrasena
            </v-btn>
          </v-menu>

          <v-menu
            transition="slide-y-transition"
            bottom
          >
            <v-btn @click="mostrar('datosEconomicos')"
              slot="activator"
              class="purple"
              color="primary"
              dark
            >
              Datos economicos
            </v-btn>
          </v-menu>

           <v-menu
            transition="slide-y-transition"
            bottom>
            <v-btn @click="mostrar('puestoDeTrabajo')"
              slot="activator"
              class="purple"
              color="primary"
              dark
            >
              puesto de trabajo
            </v-btn>
          </v-menu>

          <v-menu
            transition="slide-y-transition"
            bottom>
            
            <v-btn @click="mostrar('informacion')"
              slot="activator"
              class="purple"
              color="primary"
              dark
            >
              Información
            </v-btn>
          </v-menu>

        </div>
        <br>
        <br>



        <v-scale-transition v-if="cambioContrasena">
          <cambio-contrasena transition="slide-y-transition"></cambio-contrasena>
        </v-scale-transition>
        <v-scale-transition v-if="infoPersonal">
          <informacion-personal  transition="slide-y-transition" ></informacion-personal>
        </v-scale-transition>
        <v-scale-transition v-if="tiempoDeTrabajo">
          <peticion-ausencias  transition="slide-y-transition"></peticion-ausencias>
        </v-scale-transition>
        <v-scale-transition v-if="datosEconomicos">
          <datos-economicos   transition="slide-y-transition"></datos-economicos>
        </v-scale-transition>
        <v-scale-transition v-if="puestoDeTrabajo">
          <puesto-de-trabajo  transition="slide-y-transition"></puesto-de-trabajo>
        </v-scale-transition>
        <v-scale-transition v-if="informacion">
          <informacion  transition="slide-y-transition"></informacion>
        </v-scale-transition>


        </div>
        <!-- <div class="barra">
          <Barra></Barra>
        </div> -->
  </div>
</template>

<script>
import Barra from './empleados/BarraLateral.vue'
import PeticionAusencias from './empleados/PeticionAusencias.vue'
import CambioContrasena from './empleados/CambioContrasena.vue'
import InformacionPersonal from './empleados/InformacionPersonal.vue'
import DatosEconomicos from './empleados/DatosEconomicos.vue'
import PuestoDeTrabajo from './empleados/PuestoDeTrabajo.vue'
import Informacion from './empleados/Informacion.vue'
export default {
  components: {
    Barra,
    PeticionAusencias,
    CambioContrasena,
    InformacionPersonal,
    DatosEconomicos,
    PuestoDeTrabajo,
    Informacion
  },
  data () {
    return {
      cambioContrasena: false,
      infoPersonal: true,
      datosEconomicos: false,
      puestoDeTrabajo: false,
      tiempoDeTrabajo: false,
      informacion: false
    }
  },
  methods: {
    mostrar (value) {
      console.log('aqui', value)
      if (value === 'cambioContrasena') {
        this.cambioContrasena = true
        this.infoPersonal = false
        this.datosEconomicos = false
        this.puestoDeTrabajo = false
        this.tiempoDeTrabajo = false
        this.informacion = false
      }
      if (value === 'infoPersonal') {
        this.infoPersonal = true
        this.cambioContrasena = false
        this.datosEconomicos = false
        this.puestoDeTrabajo = false
        this.tiempoDeTrabajo = false
        this.informacion = false
      }
      if (value === 'datosEconomicos') {
        this.datosEconomicos = true
        this.cambioContrasena = false
        this.infoPersonal = false
        this.puestoDeTrabajo = false
        this.tiempoDeTrabajo = false
        this.informacion = false
      }
      if (value === 'puestoDeTrabajo') {
        this.puestoDeTrabajo = true
        this.cambioContrasena = false
        this.infoPersonal = false
        this.datosEconomicos = false
        this.tiempoDeTrabajo = false
        this.informacion = false
      }
      if (value === 'tiempoDeTrabajo') {
        this.tiempoDeTrabajo = true
        this.cambioContrasena = false
        this.infoPersonal = false
        this.datosEconomicos = false
        this.puestoDeTrabajo = false
        this.informacion = false
      }
      if (value === 'informacion') {
        this.informacion = true
        this.cambioContrasena = false
        this.infoPersonal = false
        this.datosEconomicos = false
        this.puestoDeTrabajo = false
        this.tiempoDeTrabajo = false
      }
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
   /* border-style: solid;*/
   /* background-color: red;*/
}
.barra{
  width: 16%;
  height: 800px;
  /*background-color: blue; */
}
.pagina{
  width: 83%;
  float: right;
  padding-right: 15%;
}
</style>
