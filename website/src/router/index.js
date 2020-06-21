import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


// import Layout from '@/layout'
// import { component } from 'vue/types/umd'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

  {
    path:'/',
    redirect: '/login',
  },

  {
    path: '/login',
    component:()=> import('../views/login/index')
  },

  // {
  //   path: '/dashboard',
  //   component: Layout,
  //   children: [
  //     {
  //       component: ()=> import('@views/dashboard/index'),
  //       name: 'Dashboard',
  //       meta: { title : 'Dashboard' , icon: 'dashboard', affix: true}
  //     }
     
  //   ]
  // },

  {
    path: '/404',
    component:()=> import('../views/error/404'),
    hidden: true
  },
  {
    path: '/401',
    component:()=> import('../views/error/401'),
    hidden: true
  },

  { path: '*', redirect: '/404', hidden: true}
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [


]

const createRouter = () => new Router({
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// export function resetRouter(){
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher
// }

// router.beforeEach((to,from,next)=>{
//   if(to.meta.title){
//     document.title = to.meta.title
//   }
//   next()
// })

export default router
