<template>
    <!-- <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar dark class="cyan">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">RRHH</router-link>
        <v-icon left dark>public</v-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn"
          flat
          dark
          @click="logOut">
          <v-icon left dark>lock</v-icon>
          Salir
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
        { icon: 'info', title: 'Info', link: '/AboutUs' },
        { icon: 'face', title: 'Registrarse', link: '/Register' },
        { icon: 'lock_open', title: 'Entrar', link: '/Login' }
      ]
    }
  },
  methods: {
    logOut () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      // y regresamos a pagina prinipal
      this.$router.push({
        name: 'Hello'
      })
    }
  }
}
</script>

<style scoped>

</style>
