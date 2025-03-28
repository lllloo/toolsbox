import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: { layout: 'DefaultLayout' },
    },
    {
      path: '/banner',
      name: 'banner',
      component: () => import('@/views/Banner.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('@/views/Products.vue'),
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('@/views/Cards.vue'),
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/TableView.vue'),
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/FormView.vue'),
    },
  ],
})

export default router
