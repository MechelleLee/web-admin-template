
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
      iconClass: 'el-icon-download',
      route: '/example-management/multiple-download',
    },
  },
]

const mapper = new Map()
list.forEach((value) => {
  mapper.set(value.name, value.menuItem)
})

export default mapper
