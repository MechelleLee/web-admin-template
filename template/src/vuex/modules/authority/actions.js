export const initialAuthority = ({ commit }, authority) => {
  if (!authority['length']) {
    throw new Error('请传入权限数组');
    return;
  }

  commit('setAuthority', authority);

  // sessionStorage 无法存储数组、对象，只能存储字符串和数字
  const cache = authority.join(',');

  window.sessionStorage.setItem('authority', cache);
};

export const recoveryAuthority = ({ commit }) => {
  const cache = window.sessionStorage.getItem('authority');

  // 权限恢复前检测
  if (!cache) {
    return;
  }

  const authority = cache.split(',');

  commit('setAuthority', authority);
};
