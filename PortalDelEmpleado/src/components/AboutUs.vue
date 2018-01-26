<template>
  <transition name="slide-fade">
  <div role="tablist">
  

   <div>
	<b-jumbotron bg-variant="dark" text-variant="white" border-variant="dark">
	  <template slot="header">
	    RR-HH
	  </template>
	  <template slot="lead">
	    This is a simple hero unit, a simple jumbotron-style component for
	    calling extra attention to featured content or information.
	  </template>
	  <hr class="my-4">
	  <p>
	    It uses utility classes for typography and spacing to space content
	    out within the larger container.
	  </p>
	</b-jumbotron>

<!-- jumbotron-3.vue -->

   </div>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Accordion 1</b-btn>
      </b-card-header>
      <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            I start opened because <code>visible</code> is <code>true</code>
          </p>
          <p class="card-text">
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</b-btn>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-btn block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-btn>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">
            {{ text }}
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>


    <div>
      <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/technics/4/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/technics/8/" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://lorempixel.com/250/250/technics/4/" alt="Thumbnail" />
        </b-col>
      </b-row>
    </b-container>
    </div>

  
  </div>
  </transition>
</template>

<script>
export default {
  name: 'aboutUs',
  data () {
    return {
      text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


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
