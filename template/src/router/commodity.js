const commodityManagement = () => import('@/vuepage/commodity/index');
const CommodityDetail = () => import('@/vuepage/commodity/detail');

export default [
  {
    path: '/commodity-management',
    component: commodityManagement,
    children: [
      {
        path: 'commodity-detail',
        component: CommodityDetail,
        meta: [
          {
            name: '商品管理',
            url: '/commodity-management',
          },
          {
            name: '商品详情',
            url: 'commodity-detail',
          },
        ],
      },
    ],
  },
];
