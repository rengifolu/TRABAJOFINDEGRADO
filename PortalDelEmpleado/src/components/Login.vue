
<template>
  <div>


<!--   <button v-on:click="show = !show">
    Toggle
  </button> -->
  <transition name="slide-fade">
    <div v-if="show">

        <b-form @submit="onSubmit">

      <b-form-input v-model="text1"
                    type="text"
                    placeholder="username">
      </b-form-input>
      <p></p>

      <b-form-input v-model="text2"
                    type="password"
                    placeholder="password">
       </b-form-input>
      <p></p>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="secondary">Reset</b-button>

    </b-form>
    </div>
  </transition>

  </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'Login',
    data () {
      return {
        show: false
      }
    },
    mounted () {
      this.show = true
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



 div{

  margin-top: 10%;
  margin-left: 30%;
  margin-right: 30%;
 }

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>