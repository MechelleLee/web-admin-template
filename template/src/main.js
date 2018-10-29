// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';
import router from './router/index';

import Loading from './plugins/loading';
import Scripts from './plugins/scripts';

// vuex 配置
import store from './vuex/store';

// vue 全局组件
import TopBar from './components/top-bar';
import DankalCard from './components/card/dankal-card';

require('./filters/vue-filter');
require('./jslib/verify-code.min');

Vue.config.productionTip = false;

Vue.use(ElementUI);

// plugins, 注册全局插件
Vue.use(Loading, {
  // eslint-disable-next-line
  icon: require('./assets/images/loading.gif'),
  color: 'rgba(51, 51, 51, 0.8)',
});

Vue.use(Scripts);

// 注册模板所需要 CDN 库
Vue.scripts(
  {
    scripts: [
      'https://webapi.amap.com/maps?v=1.4.6&key=8d316f00a97d1a70b223694f6a18b91f',
      'https://webapi.amap.com/ui/1.0/main.js?v=1.0.11',
    ],
    tag: 'script',
    type: 'text/javascript',
  },
  'synchro',
);

// component, 注册全局组件
Vue.component('top-bar', TopBar);
Vue.component('dankal-card', DankalCard);

window.vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
