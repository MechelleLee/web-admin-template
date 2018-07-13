import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

const state = {
  authority: [],
  // 默认恢复路由
  router: '',
  routers: [],
};

export default {
  actions,
  getters,
  state,
  mutations,
};
