import Vue from 'vue'
import VueRouter from 'vue-router'
import { Products, Lister } from '@/views'
import { Public } from '@/layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'public-layout',
    component: Public,
    children: [
      {
        name: 'products-items',
        path: '/',
        component: Products,
        meta: {
          title: 'Producs'
        },
      },
      {
        path: 'products-research',
        name: 'products-research',
        meta: {
          title: 'Product Lister'
        },
        component: Lister,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
