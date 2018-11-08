import Vue from 'vue';

// Vue 的 directive 文档
// 地址：https://cn.vuejs.org/v2/guide/custom-directive.html

// 防抖动指令，解决由于短时间重复点击造成的重复操作
Vue.directive('debounce', {
  inserted(el, binding) {
    let timer;
    // eslint-disable-next-line
    el.addEventListener('click', event => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        binding.value(event);
      }, 300);
    });
  },
});

// Vue.directive('monitor', {
//   inserted(el, binding) {
//     el.addEventListener('', () => {});
//   },
// });
