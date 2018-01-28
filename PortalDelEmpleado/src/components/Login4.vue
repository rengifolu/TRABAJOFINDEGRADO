
<template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" placeholder="email" v-model="email">
    <br>
    <input type="password" name="password" placeholder="password" v-model="password">
    <br>
    <button>Register</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
</style>
