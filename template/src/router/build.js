import authority from './authority';
import example from './example';

const Index = () => import('@/vuepage/Index');

/**
 *
 * @param {*} router 全局路由控制，只有它可以控制 addRoutes 动态的添加路由
 * @param {*} initial 指定默认跳转的路由
 */
export default (router, initial) => {
  const children = [
    {
      path: '',
      redirect: initial,
    },
  ].concat(authority, example);

  router.addRoutes([
    {
      path: '/index',
      component: Index,
      children,
    },
  ]);
};
