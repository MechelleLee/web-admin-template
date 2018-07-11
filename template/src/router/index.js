import Vue from 'vue';
import Router from 'vue-router';

const Login = () => import('@/vuepage/Login');
// const Index = () => import('@/vuepage/Index');

// const AdminManagement = () => import('@/vuepage/admin/list')
// const UserManagement = () => import('@/vuepage/user/list');

// import authority from './authority';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/login',
    },
    {
      path: '/login',
      component: Login,
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
