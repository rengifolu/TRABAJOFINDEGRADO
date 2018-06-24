import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Presentacion from '@/components/Presentacion'
import Login from '@/components/Login'
import AboutUs from '@/components/AboutUs'
import Register from '@/components/Register'
import Admin from '@/components/Admin'
import Employee from '@/components/Employee'

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
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/empleados/Employee',
      name: 'Employee',
      component: Employee
    }
  ]
})
