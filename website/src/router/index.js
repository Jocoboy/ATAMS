import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import Jumbotron from '@/components/Jumbotron'
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        LoginForm: LoginForm,
        Jumbotron: Jumbotron,
        Footer: Footer
      }
    }
  ]
})
