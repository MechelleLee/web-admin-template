# 蛋壳创意科技vue项目模板
## 框架目录说明  ##
      - build   //webpack构建配置文件
      - config  //全局构建配置文件
      - src     //项目核心源文件
	  | - assets        //资源目录
        | - image         //放置图片资源
        | - style         //放置样式资源
      | - router        //路由   
      | - vuepage       //放置vue页面,注意每个项目需划分模块建立相应的目录 
        | - commom        //放置可复用vue组件
      | - jslib         //js类库
          App.vue       //顶层vue页面
          main.js       //入口文件
	       
## 项目须知
 * http请求类库必须强制使用axios,并且配合使用promise以及箭头函数.(axios全局配置类在src/jslib/HttpRequest.js,请根据实际需求添加响应请求头参数等)
 * 全局属性如api地址,七牛CDN资源地址等,请在入口文件使用js原型继承特性将变量注入在Vue对象.如 Vue.prototype.$apiAddress='api.dankal.cn',这样在所有Vue页面只需要访问$apiAddress变量即可,无需再引入配置文件.
 * 为提高代码代码简洁度,请尽量使用ES6常用的新特性编写代码,如箭头函数,函数简写方式等。
 * 请各成员在开发项目同时多注意代码复用性问题。
 * 此项目适用于公司H5移动端开发构建,请结合实际项目情况添加相关的vue组件库，尽量保持项目轻量性.
 * 请蛋壳成员严格按照本项目架构进行开发,如对此项目模板有任何提高建议请联系Ivan.谢谢！

## 特别注意事项！
 * 请注意route.js导入Vue组件的路径大小写问题, 如果vue页面在目录命名是大写,import时也必须是大写。否则会引起服务器打包构建失败。
 * 如果需要在npm仓库添加插件时,请务必使用 npm -S 命令保证package.json文件有添加相关依赖



