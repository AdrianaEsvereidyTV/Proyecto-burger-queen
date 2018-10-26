import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import SignIn from './components/SignIn.vue'
import Order from './components/Order.vue'
import SignUp from './components/SignUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
  ]
});