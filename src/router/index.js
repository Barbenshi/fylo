import { createRouter, createWebHistory } from 'vue-router'
import fyloApp from '../views/fylo-app.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: fyloApp
  },
  ]
})

export default router
