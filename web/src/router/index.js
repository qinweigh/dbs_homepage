import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to, from) => {
  // Umami Analytics Integration
  if (typeof umami !== 'undefined') {
    umami.trackView(to.path)
  }
})

export default router
