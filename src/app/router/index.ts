import { LogInPage } from '@/pages/auth/login'
import { SignUpPage } from '@/pages/auth/signup'
import { ExpertsPage } from '@/pages/experts'
import { MainPage } from '@/pages/main'
import { ParthsPage } from '@/pages/parths'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/login',
      name: 'login',
      component: LogInPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage
    },
    {
      path: '/partners',
      name: 'partners',
      component: ParthsPage
    },
    {
      path: '/dsdad',
      name: 'asdasds',
      component: ExpertsPage
    }
  ]
})

export default router
