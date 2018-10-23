// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App';
import router from './router/index';
import 'element-ui/lib/theme-chalk/index.css';
import Loading from './plugins/loading';

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

// component, 注册全局组件
Vue.component('top-bar', TopBar);
Vue.component('dankal-card', DankalCard);

/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
/* eslint-disable no-new */
