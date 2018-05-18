# 后台管理



## 框架目录说明 

 ```cmd
├─build       #webpack构建配置文件
├─config      #全局构建配置文件
├─src         #项目核心源文件
│  ├─assets   #资源目录
│  │  ├─images   #放置图片资源
│  │  └─styles   #放置样式资源
│  ├─components  #放置复用性组件,如果组件比较多的话要划分二级目录
│  ├─jslib       #放置第三方或个人类库
│  ├─router      #路由划分
│  └─vuepage     #放置vue文件页面
│      ├─admin #模块划分
│      └─user  #模块划分
```



## 特别注意事项！
 * 请注意route.js导入Vue组件的路径大小写问题, 如果vue页面在目录命名是大写,import时也必须是大写。否则会引起服务器打包构建失败。
 * 如果需要在npm仓库添加插件时,请务必使用 npm -S 命令保证package.json文件有添加相关依赖



