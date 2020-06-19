import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [

  {
    path:'/',
    redirect: '/login'
  },

  {
    path: '/login',
    component:()=> import('../views/login/index')
  },
  {
    path: '/404',
    component:()=> import('../views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component:()=> import('../views/error/401'),
    hidden: true
  }
]

const createRouter = () => new Router({
  routes: constantRoutes
})

const router = createRouter()


export default router
