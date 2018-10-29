import ScriptLoader from '../jslib/script-loader';
import Async from '../jslib/async';

export default {
  install(Vue) {
    const $scripts = (options = {}, model = 'async') => {
      if (!options.scripts) {
        throw Object.assign(new Error(), {
          type: 'plugins',
          message: 'please check your config in $scripts',
        });
      }

      const { scripts, ...other } = options;
      const temp = [];

      switch (model) {
        case 'async':
          // eslint-disable-next-line
          scripts.forEach(item => {
            const loader = new ScriptLoader(item, ...other);
            loader.load();
          });
          break;
        case 'synchro':
          // eslint-disable-next-line
          scripts.forEach(item => {
            const loader = new ScriptLoader(item, ...other);
            temp.push(loader.load());
          });
          // eslint-disable-next-line
          Async.series(temp).catch(err => {
            throw err;
          });
          break;
        default:
      }
    };

    // eslint-disable-next-line
    Vue.scripts = Vue.prototype.$scripts = $scripts;
  },
};
