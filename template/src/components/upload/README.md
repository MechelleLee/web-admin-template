### Upload 组件

> 设计原理

- 基于 label 标签实现 input 的隐藏和上传拦截

- 图片压缩基于 canvas 的 toDataURL 来完成图片压缩，需要注意的是 压缩质量比，通常可以 width / height 来实现比例的质量比的计算

- 由于 input:file 存在 multiple 即多选的模式，因此在批量加载和压缩、和上传的时候，需要引入 Promise.all 来完成数据的批量处理

> 使用样例

```html
<dankal-upload
  :accept="accept"
  :compress="true"
  :upload="handleImageUpload"
  :handle="handleImageBuilds"
  @error="onFileUploadError"
>
  <template slot-scope="scope">
    <div class="upload-block">
      <i class="el-icon-upload" />
      <span>文件上传</span>
    </div>
  </template>
</dankal-upload>
```

> 组件说明

- 组件属性

  | 属性      |     类型      |      默认      | 传入（require） | 说明                                                                                                                                                    |
  | :-------- | :-----------: | :------------: | :-------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | value     | Array, String |    () => []    |      false      | 文件上传的初始值，默认为空的数组，可以不传值                                                                                                            |
  | accept    | Array, String |    () => []    |      true       | 允许上传的文件类型，以[MIME](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)的文件类型参考为准 |
  | limit     |    Number     |       0        |      false      | 设置文件上传的个数，默认值为 0，标记为未限制模式                                                                                                        |
  | multiple  |    Boolean    |     false      |      false      | 是否允许在一次选取多个上传文件                                                                                                                          |
  | size      |    Number     |       0        |      false      | 设置上传文件的容量最大值，超过此值拒绝上传，默认值为 0，标记为未限制模式，单位为 KB                                                                     |
  | compress  |    Boolean    |     false      |      false      | 设置是否压缩上传的文件， 与 threshold 属性是关联使用的                                                                                                  |
  | threshold |    Number     |      500       |      false      | 压缩阈值触发点，当上传的文件大小超过该阈值时才会触发压缩行为，单位为 KB                                                                                 |
  | upload    |   Function    | () => () => {} |      false      | 上传的钩子函数，负责处理文件的上传，注意该函数必须时 Promise 的                                                                                         |
  | handle    |   Function    | () => () => {} |      false      | 上传完成的钩子函数，负责处理文件的上传之后的响应数据处理                                                                                                |

- 组件方法

  | 方法名称         | 说明                                          |
  | :--------------- | :-------------------------------------------- |
  | handlerFileClear | 用于清空 input 中的 files, 以及组件中的 files |

- 组件事件

  | 事件名称 | 说明                                               | 数据结构                |
  | :------- | :------------------------------------------------- | :---------------------- |
  | start    | 推送上传开始信号的事件，不响应任何数据             | {}                      |
  | ent      | 推送上传结束信号的事件，不响应任何数据             | {}                      |
  | error    | 推送上传错误信号的事件，响应对应的错误数据         | {type: '', message: ''} |
  | input    | 推送上传完成之后响应的文件远程地址和相关的文件信息 | [{}]                    |
