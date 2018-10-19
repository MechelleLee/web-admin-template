### EDITOR 组件

> 设计原理

- 基于 [CkEditor5](https://ckeditor.com/ckeditor-5/) 重新构建，模式为 npm 引入而非 cdn 引入
- 由于 CkEditor5 编辑器存在 4 种模式，但是模式中间是不存在区别的，因为该富文本编辑器同样是基于插件设计的
- 由于 CkEditor5 在 vue 的 webpack 打包环境中存在问题，导致我们无法直接引用 CkEditor5 已经集成的插件，基于此， 我是基于 @ckeditor/ckeditor5-build-decoupled-document 重新开发完成

> 使用样例

```html
<dankal-editor
  v-model="html"
  :config="config"
/>
```

> 组件说明

- 组件属性

  | 属性   |  类型  | 默认 | 传入（require） | 说明                            |
  | :----- | :----: | :--: | :-------------: | :------------------------------ |
  | value  | string |  ''  |      true       | 基于 v-model 实现的数据双向绑定 |
  | config | object |  {}  |      false      | 用于配置富文本编辑器            |

- 组件方法

  | 方法名称 | 说明 |
  | :------- | :--- |


* 组件事件

  | 事件名称 | 说明                 | 数据结构 |
  | :------- | :------------------- | :------- |
  | input    | v-model 的响应的事件 | string   |
  | error    | 编辑器实例化失败事件 | error    |

> 插件开发

- 由于 CkEditor5 的内置的插件所携带的功能不一定能满足我所需要的功能，所以我们可以重新按照指定的步骤完成插件的开发

- 以下是插件的基本代码结构，由于官方的[样例](https://ckeditor.com/docs/ckeditor5/latest/framework/guides/quick-start.html)存在问题(在 vue 环境中)，请参考以下代码结构:

  ```js
  export default class PluginName {
    // 编辑器实例用于获取名称，与 toolbar 匹配
    static get pluginName() {
      return 'PluginName';
    }

    // 用于接收编辑器实例，将控制权转让
    constructor(editor) {
      this.editor = editor;
    }

    // 编辑器实例只能通过该方法完成插件的初始化
    init() {}
  }
  ```

> 同时，插件开发的同时还需引入 npm 包：@ckeditor/ckeditor5-ui，负责完成 UI 的渲染功能，即 Toolbar 的图标（文字）样式, [相关配置文档](https://ckeditor.com/docs/ckeditor5/latest/api/module_ui_button_buttonview-ButtonView.html), 以下是参考样例:

```js
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
......
init {
  const { editor } = this;
  editor.ui.componentFactory.add('CloudUpload', (locale) => {
    const view = new ButtonView(locale);

    // 配置 toolbar 的显示信息
    view.set({
      label: '图片上传',
      withText: true,
      tooltip: true,
    });

    // 配置 toolbar 的点击之后的行为
    view.on('execute', () => {
    });

    return view;
  });
}
```

> 由于插件的配置是通过编辑器的配置来完成配置的，所以我们只能在编辑器实例化是配置插件的配置信息, 以下是参考代码：

```js
// 编辑器配置
{
  upload: {
  }
}
```

```
// 插件获取配置信息
this.editor.config.get('upload')
```

> 如果配置存在异步信息，那么我们需要配置能获取插件配置的函数，以下为参考代码:

```
// 编辑器配置
{
  upload: {
    config: () => {},
  }
}
```

> 插件列表 （自定义）

- CloudUpload （图片上传）

  - 编辑器配置

  ```js
  {
    plugins: [CloudUpload],
    toolbar: ['CloudUpload']
    upload: {
      // 配置获取上传需要的配置
      config: this.handleUploadConfig,
      // 上传完成后的回调处理，需返回图片链接返回给插件，完成图片插入
      handle: this.handlerImageUpload,
    }
  }
  ```

  - 插件配置 （基础配置）

  ```
  upload: {
    // 上传域名
    domain: 'https://upload-z2.qiniup.com',
    // 配置请求头
    header: {}
    // FormData中的文件名称
    filename: 'file',
    // FormData中的其他数据
    data: {
      token: ''
    }
  },
  ```
