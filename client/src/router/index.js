import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Beer from '@/components/Beer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/beer',
      name: 'Beer',
      component: Beer
    }
  ]
})
