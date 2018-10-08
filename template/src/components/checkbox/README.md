### Checkbox 设计

- 状态输出，响应至 slot 中，仅设计 javascript 本身，Checkbox 作为容器，应把状态交还给容器内的组件
- Checkbox 容器本身只维护容器本身数据状态
- 注意使用上下文注入来完成父组件对子组件的状态托管至子组件
