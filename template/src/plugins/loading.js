import DankalLoading from '../components/loading/dankal-loading';

export default {
  install(Vue, pluginOptions = {}) {
    const Instance = Vue.extend(DankalLoading);

    let loading = null;

    function $loading() {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        if (!loading) {
          loading = new Instance({
            data: pluginOptions,
          });

          loading.$mount();

          document.querySelector('body').appendChild(loading.$el);
        }

        loading.open();
        resolve();
      });
    }

    $loading.close = () =>
      // eslint-disable-next-line
      new Promise((resolve, reject) => {
        if (!loading || !loading.active) {
          resolve();
        }

        loading.hide();
      });
    // eslint-disable-next-line
    Vue.loading = Vue.prototype.$loading = $loading;
  },
};
