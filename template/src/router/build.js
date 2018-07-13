const Index = () => import('@/vuepage/Index');

/**
 *
 * @param {*} router 全局路由控制，只有它可以控制 addRoutes 动态的添加路由
 * @param {*} initial 指定默认跳转的路由
 */
export default (router, initial, authority) => {
  const children = [
    {
      path: '',
      redirect: initial,
    },
  ].concat(...authority);

  router.addRoutes([
    {
      path: '/index',
      component: Index,
      children,
    },
  ]);
};
