import Vue from 'vue';
import Vuex from 'vuex';

import authority from './modules/authority';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authority,
  },
  strict: true,
});
