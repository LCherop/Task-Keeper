import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=> import('../components/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: ()=> import('../components/Registration.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/email-sent',
    name: 'email-sent',
    component: () => import('../components/ConfirmEmail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
