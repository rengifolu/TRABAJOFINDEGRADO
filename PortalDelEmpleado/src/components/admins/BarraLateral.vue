<template>
<div class="" >

  <v-navigation-drawer stateless hide-overlay :mini-variant.sync="mini" v-model="drawer" >
  <v-toolbar flat class="transparent">
    <v-list class="pa-0">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="static/imagen1.jpg" >
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>Nombre de Admin</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon @click.native.stop="mini = !mini">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-toolbar>
  <v-list class="pt-0" dense>
    <v-divider></v-divider>
    <v-list-tile v-for="item in items" :key="item.title" @click="">
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>

</div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'Modificar', icon: 'question_answer' },
          { title: 'Crear', icon: 'question_answer' },
          { title: 'Acerca de', icon: 'dashboard' },
          { title: 'Ayuda', icon: 'help' }
        ],
        mini: true,
        right: null
      }
    }
  }
</script>
