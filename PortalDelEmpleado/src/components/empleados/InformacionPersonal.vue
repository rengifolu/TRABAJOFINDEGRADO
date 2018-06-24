<template>
    <div class="">
      <div class="container">
      <todo-list  :tareas="tareas"></todo-list>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-offset=3 col-md-5 col-lg-offset=3 col-lg=5">
      <h2>Información Personal</h2>

      <!-- formulario -->
      <form class="form"  @submit.prevent="agregarTarea(nuevaTarea)">
        <div class="input-group">
          <input v-model="nuevaTarea" type="text" class="form-control">
           <span class="input-group-btn">
             <button class="btn btn-default" type="submit"><span class="glyphicon-plus"></span>Añadir tarea</button>
           </span>
        </div>
      </form>


      <!-- LISTA DE TAREAS -->
      <ul class="list-group">
        <li  v-for="tarea in tareas"
         class="list-group-item clearfix"> <!-- si completado es igual a completado true asociara esta clase y sera la que se visualice en este caso tachara-->
          <p class="lead" v-bind:class="{completado:tarea.completado}">
           {{ tarea.titulo}}

          <!-- <img class="avatar">

          <small></small> -->   <!--@blur="editandoTarea = null, editarTarea(tarea)"-->
        </p>            <!--   ponemos de nuevo editando a null para proximas eleccioes y llamamos a editar tardea para q ejecute-->
          <input  @blur="editandoTarea = null , editarTarea(tarea)"
                  v-model="tarea.titulo"
                  v-show="editandoTarea === $index" type="text">
                   <!--asociamos elemento a input y mostramos si igual a index -->
          <div>
              <span class="pull-right">  <!-- asociamos el inde a edit..-->
                  <button   @click="editandoTarea = $index"
                            class="btn btn-default btn-xs">
                      <span class="glyphicon glyphicon-pencil"></span>
                  </button>
                  <button   v-show="editandoTarea === $index"
                            @click="editandoTarea = null , editarTarea(tarea)"
                            class="btn btn-default btn-xs">
                      <span class="glyphicon glyphicon-floppy-saved"></span>
                  </button>  <!--@click="tarea.completado = true"  activa comletado-->
                            <!-- @click="tarea.completado = true"  antes -->
                  <button    @click="actualizarEstadoDeTarea(true,tarea)"
                             class="btn btn-primary btn-xs">
                      <span class="glyphicon glyphicon-ok"></span></button>
                            <!-- @click="tarea.completado = false" antes -->
                  <button   @click="actualizarEstadoDeTarea(false,tarea)"
                            class="btn btn-primary btn-xs">
                      <span class="glyphicon glyphicon-repeat"></span>
                 </button>      <!-- $index) es variable de coneveniencia -->
                            <!-- @click="eliminarTarea($index)"  antes-->
                  <button  @click="eliminarTarea(tarea)"
                            class="btn btn-danger btn-xs">
                      <span class="glyphicon glyphicon-remove"></span>
                  </button>
              </span>
          </div>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
@impor url('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
.list-group-item input[type=text]{
           width:100%;
           margin-bottom: 15px;
}

.completado{
           text-decoration: line-through;
           font-style: italic;
           color: gray;
}

</style>
