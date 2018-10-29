/**
 * @author IvanCai
 * @description 自定义 axios 请求器
 */
import axios from 'axios';

import utils from './dk-utils';
import { Domain } from '../configs/env';

const DKAxios = axios.create({
  baseURL: Domain,
  // 设置超时时间
  timeout: 5000,
});

let timer;

DKAxios.interceptors.request.use(
  // eslint-disable-next-line
  config => {
    const token = utils.getCookie('token');

    if (token) {
      Object.assign(config.headers, {
        'X-Access-Token': token,
      });
    }

    if (timer) {
      clearTimeout(timer);
    }

    // 配置延时 Loading， 解决请求响应快的闪烁问题
    timer = setTimeout(() => {
      window.vm.$loading();
    }, 750);

    return config;
  },

  // eslint-disable-next-line
  error => {
    if (timer) {
      clearTimeout(timer);
    }

    window.vm.$loading.close();

    return Promise.reject(error);
  },
);

DKAxios.interceptors.response.use(
  // eslint-disable-next-line
  response => {
    if (timer) {
      clearTimeout(timer);
    }

    window.vm.$loading.close();

    return response;
  },

  // eslint-disable-next-line
  error => {
    if (timer) {
      clearTimeout(timer);
    }

    window.vm.$loading.close();

    if (!error.response) return;

    const { status, data } = error.response;

    switch (status) {
      case 401:
      case 412:
        utils.setCookie('token', '', -1);
        break;
      default:
        Promise.reject(data);
    }
  },
);

export default DKAxios;
