<template>
<!--   <div>
    <h1>{{ msg }}</h1>
  </div> -->
<!-- <img src="./assets/logo.png"> -->
<div>
<transition name="slide-fade">
<div>
  <div>
    <video-bg :sources="['../../static/landing-video.mp4']" img="">

        <img src="http://www.imer.mx/wp-content/uploads/sites/36/logo_inai.png" alt="Vue logo"/>
        <h1>RR-HH</h1>
        <h4>Design by Diego Lujan R.</h4>
        <a href="https://github.com/rengifolu" class="button">Source on GitHub</a>
    </video-bg>
  <!-- If you want to add content here, a slot is waiting! -->
  </div>

</div>
</transition>

        <div class="texto">

            <h2 class="font-bold light-blue-text my-3">Lorem ipsum dolor sit amet, consectetur quis elit.</h2>
            <p align="justify">Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis commodi porro, cumque provident rem corporis odit, ut quas dolores maxime nesciunt possimus quis, soluta velit debitis amet, veritatis cupiditate reprehenderit.</p>

        </div>

        <div class="parallax"></div>


        <div class="texto">
            

            <v-jumbotron>
              <v-container fill-height>
                <v-layout align-center>
                  <v-flex>
                    <h3 class="display-3">Welcome to the site</h3>

                    <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>

                    <v-divider class="my-3"></v-divider>

                    <div class="title mb-3">Check out our newest features!</div>

                    <v-btn
                      class="mx-0"
                      color="primary"
                      large
                    >
                      See more
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-jumbotron>
         </div>


</div>
</template>

<script>
import VideoBg from 'vue-videobg'
import Login from './Login.vue'
export default {
  components: {
    VideoBg,
    Login
  },
  name: 'Presentacion',
  data () {
    return {
      msg: 'PRESENTACION'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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







  .VideoBg {
    position: relative;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }
  .VideoBg video {
    position: absolute;
    top: 50%;
    left: 50%;
    visibility: hidden;
    transform: translate(-50%, -50%);
  }
  .VideoBg__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

* {
  margin: 100;
}

img {
  padding-left: 20%;
  width: 70%;
  margin-top: 10%;
}

h1, h4 {
  cursor: default;
  padding-left: 40%;
}

a {
  text-decoration: none;
}

h1 {
  margin: 40px 0;
  font-family: 'Dosis', 'Source Sans Pro', 'Helvetica Neue', sans-serif;
  font-weight: 300;
  font-size: 4em;
  color: #ebebeb;

}

h4, a {
  font-family: 'Source Sans Pro', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #7f8c8d;


}

.button {

  display: inline-block;
  width: 180px;
  margin-left: 40%;
  padding: 12px 14px;
  background-color: #4fc08d;
  font-weight: 700;
  color: #fff;
  border-bottom: 2px solid #3aa373;
  border-radius: 4px;
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;

}

.button:hover {
  background-color: #5dc596;
  -webkit-transform: translate(0, -2px);
  -ms-transform: translate(0, -2px);
  transform: translate(0, -2px);
}

#social {
  margin-top: 20px;
  padding-left: 42%;
}

#social iframe {
  margin: 0 4px;
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



.parallax {
    /* The image used */
    background-image: url("https://mdbootstrap.com/img/Photos/Others/img%20%2844%29.jpg");

    /* Set a specific height */
    min-height: 500px;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.texto{
    padding-top: 5%;
    padding-left: 20%;
    padding-right: 20%;
    padding-bottom: 5%;
}
h2 {
    text-align: center;
    color: #53AF86;

}



</style>
