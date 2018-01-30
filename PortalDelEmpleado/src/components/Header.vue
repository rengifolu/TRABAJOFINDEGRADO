<template lang="html">
  <v-toolbar dark class="cyan">
    <v-toolbar-side-icon
      @click.stop="sideNav = !sideNav"
      class="hidden-sm-and-up "></v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">RRHH</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn
        flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link">
        <v-icon left dark>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      sideNav: true,
      menuItems: [
        { icon: 'home', title: 'Home', link: '/' },
        { icon: 'person', title: 'Profile', link: '/AboutUs' },
        { icon: 'face', title: 'Register', link: '/Register' },
        { icon: 'lock_open', title: 'Login', link: '/Login' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
