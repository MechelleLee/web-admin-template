import Vue from 'vue'
import Router from 'vue-router'

const Login = () => import ('@/vuepage/Login')
const Index = () => import ('@/vuepage/Index')
const AdminManagement = () => import('@/vuepage/admin/list')
const UserManagement = () => import('@/vuepage/user/list')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/index'
    }, {
      path: '/index',
      component: Index,
      children: [
        {
          path: '',
          redirect: '/admin-management'
        },
        {
          path: '/admin-management',
          component: AdminManagement,
          meta: [{
            name: '管理员管理',
            url: '/admin-management'
          },
            {
              name: '管理员列表',
              url: '/admin-management'
            }
          ]
        },
        {
          path: '/user-management',
          component: UserManagement,
          meta: [{
            name: '会员管理',
            url: '/admin-management'
          }
          ]
        }
      ]
    },
    {
      path:'/login',
      component:Login
    }

  ]
})
