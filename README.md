# Dankal 后台管理模板 （基于 element 实现）

### 项目简介

该项目是一个后台管理模板，是基于 element 实现的。主要用于解决后台管理中的组件复用，element 未涉及的 JSSDK 集成，和为 CSS 模块化提供解决的思路

### 贡献代码的步骤

- 在贡献代码之前，你需要可以先阅览该项目的代码。如果你认为你想参加到这个项目的贡献中来，项目的地址：https://github.com/szdankal/web-admin-template.git

- 你需要 fork 该项目到自己的 github 中

- 在 fork 完成之后，你需要执行以下命令,将项目克隆到你的本地

```shell
git clone https://github.com/szdankal/web-admin-template.git
```

- 在 clone 完成之后，你便可以编写这个项目了，需要注意的是我们通常都是在 dev 分支开发，你还要执行以下的步骤

```shell
cd web-admin-template

git checkout -b dev origin/dev

# 建议你使用 yarn 来完成 node_modules 的安装，同样的你可以使用 npm install，但是我并不建议你这样操作
yarn install

# 或是 npm run dev
yarn dev
```

- 完成这些步骤，你便可以愉快的开发了。那么在开发完成，你要向我们贡献代码，那你最好要了解什么是[PUll REQUEST](https://help.github.com/articles/about-pull-requests/), 这样我们才能收到你的代码呢
