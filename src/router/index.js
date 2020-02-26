import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/home.vue'
import List from '@/pages/List/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    }
  ]
})
