import ScriptLoader from '../jslib/script-loader';

export default {
  install(Vue, options = {}) {
    function $scripts() {
      if (!options.scripts) {
        throw Object.assign(new Error(), {
          type: 'plugins',
          message: 'please check your config in $scripts',
        });
      }

      const { scripts, ...other } = options;

      // eslint-disable-next-line
      scripts.forEach(item => {
        const loader = new ScriptLoader(item, ...other);
        loader.load();
      });
    }

    // eslint-disable-next-line
    Vue.scripts = Vue.prototype.$scripts = $scripts;
  },
};
