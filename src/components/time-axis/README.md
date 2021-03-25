### TimeAxis 组件

> 设计原理

-

> 使用样例

```html
<dankal-time-axis :source="source">
  <template
    slot="side"
    slot-scope="scope"
  >
    <div
      v-if="scope.item.time"
      class="side-block"
    />
  </template>
  <template
    slot="icon"
    slot-scope="scope"
  >
    <i
      slot="icon"
      class="el-icon-menu icon-block"
    />
  </template>
  <template
    slot="main"
    slot-scope="scope"
  >
    <div class="main-block" />
  </template>
</dankal-time-axis>
```

> 组件说明

- 组件属性

  | 属性   | 类型  | 默认 | 传入（require） | 说明           |
  | :----- | :---: | :--: | :-------------: | :------------- |
  | source | array |  []  |      false      | 时间轴的数据源 |

* 组件方法

  | 方法名称 | 说明 |
  | :------- | :--- |


- 组件事件

  | 事件名称 | 说明 | 数据结构 |
  | :------- | :--- | :------- |


* 组件插槽

  | 插槽名称 | 说明                 |
  | :------- | :------------------- |
  | side     | 时间轴侧边的插槽(左) |
  | icon     | 时间轴上的 ICON      |
  | line     | 时间轴上的线         |
  | main     | 时间轴侧边的插槽(右) |
