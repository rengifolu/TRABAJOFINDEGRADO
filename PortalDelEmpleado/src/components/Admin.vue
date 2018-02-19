<template class="admin">
<div>
  <div class="barra" v-if="b">
    <barra-lateral></barra-lateral>
  </div>
<div class="tarjeta" v-if="t">
  <TarjetaEmpleado></TarjetaEmpleado>
  <TarjetaEmpleado></TarjetaEmpleado>
</div>
</div>
</template>
<script>
import TarjetaEmpleado from './admins/TarjetaEmpleado.vue'
import BarraLateral from './admins/BarraLateral.vue'
export default {
  components: {
    TarjetaEmpleado,
    BarraLateral
  },
  data: () => ({
    b: true,
    t: true
  })
}
</script>
<style scoped>
.barra{
}
.tarjeta{

}
.admin{
  width: 100%;
}
</style>
