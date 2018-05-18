// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
require ('./jslib/verify-code')
import TopBar from './components/top-bar'
Vue.config.productionTip = false
Vue.use(ElementUI)

//每个页面都需要用的组件可以注册成全局组件，方便每个页面使用
Vue.component('top-bar',TopBar)
/* eslint-disable no-new */
window.vm=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

