// eslint-disable-next-line import/prefer-default-export
export const initialAuthority = ({ commit }, authority) => {
  if (!authority.length) {
    throw new Error('请传入权限数组');
  }

  commit('setAuthority', authority);
};
