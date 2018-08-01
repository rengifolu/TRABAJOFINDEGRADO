<template>
 <v-layout row>
    <v-flex>
    

        <v-list subheader>
          <v-subheader>Ultimas gestiones</v-subheader>
          <v-list-tile
            v-for="item in items"
            :key="item"
            avatar
            @click=""
          >
            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
            {{item.title}}
            <v-list-tile-content>
              <v-list-tile-title ></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon :color="item.active ? 'teal' : 'grey'">delete</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

        <v-divider></v-divider>

    </v-flex>
  </v-layout>
</template>

</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
            { active: true, title: 'Vacaciones                15/07/2018 al 31/07/2018', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
            { active: true, title: 'Visita                    medica 04/05/2018 de 16:00 a 19:00', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
            { title: 'Retraso en entrada                      02/01/2018 10:15 am.', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' }
      ]
    }
  },
  methods: {
    agregarTarea: function (tarea) {
      this.tareas.unshift({
        titulo: tarea,
        completado: false
      })
      this.nuevaTarea = null
    },

    eliminarTarea: function (tarea) {
      // this.tareas.splice(indice, 1)
    },
    editarTarea: function (tarea) {
    },
    actualizarEstadoDeTarea: function (estado, tarea) {
    }
  }
}
</script>

<style scoped>
</style>
