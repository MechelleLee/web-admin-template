### Step 组件

> 设计原理

-

> 使用样例

```html
<dankal-step :source="steps">
  <template
    slot="above"
    slot-scope="scope"
  >
    <div
      class="side-block"
    />
  </template>
  <template
    slot="cores"
    slot-scope="scope"
  >
    <i class="el-icon-menu icon-block" />
  </template>
  <template
    slot="below"
    slot-scope="scope"
  >
    <div class="main-block" />
  </template>
</dankal-step>
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

  | 插槽名称 | 说明               |
  | :------- | :----------------- |
  | above    | 步骤条顶部的插槽   |
  | icon     | 步骤条上的 ICON    |
  | line     | 步骤条上的线       |
  | below    | 步骤条顶底部的插槽 |
