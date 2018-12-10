
const list = [
  {
    name: '样例管理',
    menuItem: {
      name: '样例管理',
      iconClass: 'dk-icon-home',
      route: '/example-management',
    },
  },
  {
    name: '批量下载',
    menuItem: {
      name: '批量下载',
      iconClass: 'dk-icon-download',
      route: '/example-management/multiple-download',
    },
  },
  {
    name: '操作权限控制',
    menuItem: {
      name: '操作权限控制',
      iconClass: 'dk-icon-auth',
      route: '/example-management/operation',
    },
  },
]

const mapper = new Map()
list.forEach((value) => {
  mapper.set(value.name, value.menuItem)
})

export default mapper
