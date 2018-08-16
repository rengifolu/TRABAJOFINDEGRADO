<template>
<div>
    <v-card
      class="hide-overflow"
      color="cyan accent-4"
      dark
    >
      <v-toolbar
        card
        color="cyan accent-4"
      >
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light"></v-toolbar-title>
        <v-spacer></v-spacer>
          <v-btn
            color="purple darken-3"
            fab
            small
            @click="isEditing = !isEditing"
          >
            <v-icon v-if="isEditing">mdi-close</v-icon>
            <v-icon v-else>mdi-pencil</v-icon>
          </v-btn>
      </v-toolbar>


      <v-card-text>
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Nombre"
          v-model="empleado.nombre"
        ></v-text-field>
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Email"
          v-model="empleado.email"
        ></v-text-field>
  
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Puesto"
          v-model="empleado.puesto"
        ></v-text-field>

        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Empresa"
          v-model="empleado.empresa"
        ></v-text-field>
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Telefono"
          v-model="empleado.telefono"
        ></v-text-field>
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Notas"
          v-model="empleado.notas"
        ></v-text-field>
      </v-card-text>


      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!isEditing"
          color="success"
          @click="save"
        >
          Save
        </v-btn>
      </v-card-actions>

      <v-snackbar
        v-model="hasSaved"
        :timeout="2000"
        absolute
        bottom
        left
      >
        Tus datos se han actualizado
      </v-snackbar>
    </v-card>
</div>
</template>

<script>
import EmployeesService from '@/services/EmployeesService'
export default {
  components: {
  },
  data () {
    return {
      empleado: {
        nombre: null,
        email: null,
        puesto: null,
        empresa: null,
        telefono: null,
        notas: null,
        id: null
      },
      hasSaved: false,
      isEditing: null,
      model: null
    }
  },
  async mounted () {
    const id = this.$store.state.route.params.identificador
    this.empleado = (await EmployeesService.empleado(id)).data
  },
  methods: {
    async save () {
      this.isEditing = !this.isEditing
      this.hasSaved = true
      console.log(this.hasSaved)
      try {
        if (this.hasSaved) {
          // enviar cambio a servidor
          await EmployeesService.put(this.empleado)
        }
      } catch (error) {
        //
        console.log('error al enviar actualización de empleado en front')
      }
    }
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
.list-group-item input[type=text]{
           width:100%;
           margin-bottom: 15px;
}
</style>

