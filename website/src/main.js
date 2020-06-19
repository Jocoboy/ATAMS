import Vue from 'vue'
import App from './App'
import router from './router'
// import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css' 
import 'jquery-validation/dist/jquery.validate.min.js'
import 'jquery-validation/dist/localization/messages_zh.min.js'
// import 'bootstrapvalidator/dist/css/bootstrapValidator.min.css'
// import 'bootstrapvalidator/dist/js/bootstrapValidator.min.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
