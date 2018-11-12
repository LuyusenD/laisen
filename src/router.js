import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Products from './views/Products.vue'
import Details from './views/Details.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Details',
      name: 'Details',
      component: Details,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
