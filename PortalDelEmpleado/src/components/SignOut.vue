<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Sign up</v-toolbar-title>
      </v-toolbar>
      <br>
      <br>
        <form name="tab-tracker-form" autocomplete="off">
          <v-text-field label="Email" v-model="email"></v-text-field>
          <br>
          <v-text-field label="Password" type="password" v-model="password" autocomplete="new-password" ></v-text-field>
          <br>
          <div class="danger-alert" v-html="error" />
          <br>
          <v-btn dark class="cyan" @click="register">Register</v-btn>
        </form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
    }
  }
}
</script>

<style scoped>
</style>
