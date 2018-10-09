> 设计原理

- 状态输出，响应至 slot 中，仅设计 javascript 本身，Checkbox 作为容器，应把状态交还给容器内的组件
- Checkbox 容器本身只维护容器本身数据状态
- 注意使用上下文注入来完成父组件对子组件的状态托管至子组件

> 组件说明

- dankal-checkbox-group
  - 作用：Checkbox 状态存储容器，负责存储 Checkbox 选择中的状态
- dankal-checkbox
  - 作用：Checkbox 容器承载选择的值，监控选择状态，并向父容器传递自身的状态

> 使用样例

```html
<!-- checkbox-group 作为存储父容器 -->
<dankal-checkbox-group
  v-model="group"
  :limit="limit"
>
  <!-- checkbox 传入可选择的值 -->
  <dankal-checkbox
    v-for="(item, index) in [1, 2, 3, 4, 5, 6]"
    :key="index"
    :label="item"
  >
    <template slot-scope="scope">
      <!-- slot 提供自定义样式 -->
      <span
        class="dankal-checkbox-container"
        :class="{checked: scope.checked}"
      >
        {{ scope.data }}
      </span>
    </template>
  </dankal-checkbox>
</dankal-checkbox-group>
```
