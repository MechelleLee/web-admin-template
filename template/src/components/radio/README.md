### Radio 组件

> 设计原理

-

> 使用样例

```html
<dankal-radio
  v-for="(item, index) in radios"
  :key="index"
  :item="item"
  :label="item"
  v-model="radio"
>
  <template slot-scope="scope">
    <div class="dankal-radio-item">
      <i :class="{checked: scope.checked}" />
      <span>{{ scope.label }}</span>
    </div>
  </template>
</dankal-radio>
```

> 组件说明

- 组件属性

  | 属性  |      类型      | 默认 | 传入（require） | 说明         |
  | :---- | :------------: | :--: | :-------------: | :----------- |
  | value | string, number |  ''  |      false      | 数据双向绑定 |
  | label | string, number |  ''  |      true       | 可选值       |

- 组件方法

  | 方法名称 | 说明 |
  | :------- | :--- |


* 组件事件

  | 事件名称 | 说明 | 数据结构 |
  | :------- | :--- | :------- |

