import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Presentacion from '@/components/Presentacion'
import Login from '@/components/Login'
import AboutUs from '@/components/AboutUs'
import SignOut from '@/components/SignOut'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/Presentacion',
      name: 'Presentacion',
      component: Presentacion
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/AboutUs',
      name: 'About',
      component: AboutUs
    },
    {
      path: '/SignOut',
      name: 'SignOut',
      component: SignOut
    }
  ]
})
