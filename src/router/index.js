import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [
    {
      path:'/:catchAll(.*)',
      redirect: '/',
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: *login */ "../views/index.vue"),
    },
    // {
    //   path: '/project/:id',
    //   name: 'portfolio',
    //   component: () => import(/* webpackChunkName: *login */ "../views/portfolio/project.vue"),
    // }
  ]
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
