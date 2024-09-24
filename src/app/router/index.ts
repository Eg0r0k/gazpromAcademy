import { LogInPage } from '@/pages/auth/login'
import { SignUpPage } from '@/pages/auth/signup'
import { MainPage } from '@/pages/main'
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
    }
  ]
})

export default router
