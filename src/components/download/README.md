### CHECKBOX 组件

> 设计原理

- 状态输出，响应至 slot 中，仅设计 javascript 本身，Checkbox 作为容器，应把状态交还给容器内的组件

> 使用样例

```html
<dankal-download
  :type="type"
  :href="href"
  :download="this.network().getDownloadFile"
>
  <span class="download-button">DOWNLOAD</span>
</dankal-download>
```

> 组件说明

- 组件属性

  | 属性     |   类型   |   默认   | 传入（require） | 说明                                          |
  | :------- | :------: | :------: | :-------------: | :-------------------------------------------- |
  | name     |  string  |    ''    |      false      | 下载文件的名称                                |
  | href     |  string  |    ''    |      true       | 下载文件的路径                                |
  | type     |  string  |    ''    |      false      | 下载文件的类型                                |
  | download | function | () => {} |      true       | 下载文件的请求方法，需传入 Promise 的函数封装 |

- 组件事件

  | 事件名称 | 说明                     | 数据结构 |
  | :------- | :----------------------- | :------- |
  | error    | 回调下载过程中的错误事件 | Error    |
