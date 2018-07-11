import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import authority from './modules/authority';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    authority,
  },
  plugins: [createPersistedState()],
  strict: true,
});
