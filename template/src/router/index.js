import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import ('@/vuepage/Index.vue')
const BaseForm = () => import('@/vuepage/form/BaseForm.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'
    }, {
      path: '/index',
      component: Index
    },
    {
      path: '/baseForm',
      component: BaseForm
    }
  ]
})
