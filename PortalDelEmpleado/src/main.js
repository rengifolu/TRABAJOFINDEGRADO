// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
// import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(Vuetify)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

// Vue.use(VueResource) // para post
// Vue.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080'
// Vue.http.headers.common['Access-Control-Request-Method'] = '*'
