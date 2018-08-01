<template>
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
    const id = this.$store.state.route.params.identificador
    console.log('id : ', id)
    this.empleado = (await EmployeesService.empleado(id)).data
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
