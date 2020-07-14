import Vue from 'vue'
import VueRouter from 'vue-router'
import { Products } from '@/views'
import { Public } from '@/layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'public-layout',
    component: Public,
    children: [
      {
        name: 'products',
        path: '/',
        component: Products,
        meta: {
          title: 'Producs'
        }
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
