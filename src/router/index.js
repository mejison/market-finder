import Vue from 'vue'
import VueRouter from 'vue-router'
import { Products, Lister, Viewer, Dashboard, NotFound } from '@/views'
import { Public } from '@/layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'public-layout',
    component: Public,
    children: [
      {
        name: 'dashboard',
        path: '/',
        component: Dashboard,
        meta: {
          title: 'Dashboard'
        },
      },
      {
        path: 'products-items',
        name: 'products-items',
        meta: {
          title: 'Product items'
        },
        component: Products,
      },
      {
        path: 'products-lister',
        name: 'products-lister',
        meta: {
          title: 'Product Lister'
        },
        component: Lister,
      },
      {
        path: 'products-viewer',
        name: 'product-viewer',
        meta: {
          title: 'Product Viewer'
        },
        component: Viewer,
      }
    ]
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
