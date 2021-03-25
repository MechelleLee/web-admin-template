
const list = [
  {
    name: '商品详情',
    menuItem: {
      name: '商品详情',
      iconClass: 'dk-icon-home',
      route: '/commodity-management/commodity-detail',
    },
  },
  {
    name: '商品管理',
    menuItem: {
      name: '商品管理',
      iconClass: 'dk-icon-home',
      route: '/commodity-management',
    },
  },
  {
    name: '样例管理',
    menuItem: {
      name: '样例管理',
      iconClass: 'dk-icon-home',
      route: '/example-management',
    },
  },
  {
    name: 'xx列表',
    menuItem: {
      name: 'xx列表',
      iconClass: 'dk-icon-order',
      route: '/example-management/example-list',
    },
  },
  {
    name: '批量下载',
    menuItem: {
      name: '批量下载',
      iconClass: 'dk-icon-order',
      route: '/example-management/multiple-download',
    },
  },
  {
    name: '操作权限控制',
    menuItem: {
      name: '操作权限控制',
      iconClass: 'dk-icon-order',
      route: '/example-management/operation',
    },
  },
]

const mapper = new Map()
list.forEach((value) => {
  mapper.set(value.name, value.menuItem)
})

export default mapper
