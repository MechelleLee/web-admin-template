
const list = [
  {
    name: '权限管理',
    menuItem: {
      name: '权限管理',
      iconClass: 'dk-icon-order',
      route: '/authority-management',
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
    name: '会员管理',
    menuItem: {
      name: '会员管理',
      iconClass: '',
      route: '',
    },
  },
]

const mapper = new Map()
list.forEach((value) => {
  mapper.set(value.name, value.menuItem)
})

export default mapper
