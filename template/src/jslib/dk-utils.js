/**
 * @author IvanCai
 * @description 此工具类请放置一些常用操作函数，如字符操作，存取cookie等
 */

export default {
  getCookie(cname) {
    const name = `${cname}=`;
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i += 1) {
      const cookie = cookies[i].trim();

      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return '';
  },

  getQueryString(name) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },

  setCookie(cname, cvalue, exdays, path = '/') {
    const date = new Date();

    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);

    const expires = `expires=${date.toGMTString()}`;

    document.cookie = `${cname}=${cvalue}; ${expires}; path=${path}`;
  },
};
