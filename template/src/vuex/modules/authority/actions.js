export const initialAuthority = ({ commit }, authority) => {
  if (!authority['length']) {
    throw new Error('请传入权限数组');
    return;
  }

  commit('setAuthority', authority);
};
