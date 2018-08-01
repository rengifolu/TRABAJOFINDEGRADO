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
        <v-toolbar-title class="font-weight-light">Hola {{empleado.nombre}}</v-toolbar-title>
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
        {{empleado.nombre}}
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Name"
        ></v-text-field>
        {{empleado.puesto}}
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Profesión"
        ></v-text-field>
        {{empleado.email}}
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Email"
        ></v-text-field>
        {{empleado.notas}}
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Experiencia"
        ></v-text-field>
        {{empleado.telefono}}
        <v-text-field
          :disabled="!isEditing"
          color="white"
          label="Telefono"
        ></v-text-field>
        <v-autocomplete
          :disabled="!isEditing"
          :items="states"
          :filter="customFilter"
          color="white"
          item-text="name"
          label="State"
        ></v-autocomplete>
      </v-card-text>
      <v-divider></v-divider>
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
        Your profile has been updated
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
      empleado: null,
      hasSaved: false,
      isEditing: null,
      model: null,
      states: [
        { name: 'León', abbr: 'FL', id: 1 },
        { name: 'Madrid', abbr: 'GA', id: 2 },
        { name: 'Valladolid', abbr: 'NE', id: 3 },
        { name: 'Barcelona', abbr: 'CA', id: 4 },
        { name: 'Sevilla', abbr: 'NY', id: 5 }
      ]
    }
  },
  async mounted () {
    const id = this.$store.state.route.params.identificador
    console.log('id : ', id)
    this.empleado = (await EmployeesService.empleado(id)).data
  },
  methods: {
    customFilter (item, queryText, itemText) {
      const textOne = item.name.toLowerCase()
      const textTwo = item.abbr.toLowerCase()
      const searchText = queryText.toLowerCase()

      return textOne.indexOf(searchText) > -1 ||
        textTwo.indexOf(searchText) > -1
    },
    save () {
      this.isEditing = !this.isEditing
      this.hasSaved = true
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

