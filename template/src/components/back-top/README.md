### BACKTOP 组件

> 设计原理

-

> 使用样例

```html
<dankal-back-top :element="element">
  <i
    slot="icon"
    class="el-icon-caret-top"
    style="color: #d92128;"
  />
</dankal-back-top>
```

> 组件说明

- 组件属性

  | 属性   |             类型             |                  默认                   | 传入（require） | 说明                    |
  | :----- | :--------------------------: | :-------------------------------------: | :-------------: | :---------------------- |
  | elemnt | HTMLHtmlElement, HTMLElement | document.documentElement, document.body |      false      | 监听滚动事件的 DOM 节点 |

* 组件方法

  | 方法名称 | 说明 |
  | :------- | :--- |


- 组件事件

  | 事件名称 | 说明 | 数据结构 |
  | :------- | :--- | :------- |

