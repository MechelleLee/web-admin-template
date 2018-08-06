import { UPDATE_USER_NAME } from './mutation-types';

export default {
  [UPDATE_USER_NAME](state, name) {
    state.name = name
  },
}
