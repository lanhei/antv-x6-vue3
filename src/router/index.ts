import { createRouter, createWebHistory } from 'vue-router'
import TestView from '../views/TestView.vue'
import Process from '../views/Process.vue'
import Dag from '../views/Dag.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
    {
      path: '/process',
      name: 'process',
      component: Process,
    },
    {
      path: '/dag',
      name: 'dag',
      component: Dag,
    },
  ],
})

export default router
