/**
 * Created by IvanCai on 2017/4/19.
 * Modified by Zhi on 2018/7/8.
 */
import axios from 'axios';
import utils from './dk-utils';

import env from '../configs/env';

const dkAxios = axios.create({
  baseURL: env.apiDomain,
  timeout: 10000, // 设置超时时间
});

let loading;

dkAxios.interceptors.request.use(
  (config) => {
    const token = utils.getCookie('projectName_token');
    if (token) {
      const { headers } = config;

      // eslint-disable-next-line
      config.headers = Object.assign({}, headers, {
        token,
      });
    }

    loading = window.vm.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    });

    return config;
  },

  error => Promise.reject(error),
);

dkAxios.interceptors.response.use(
  (response) => {
    loading.close();
    return response;
  },

  // eslint-disable-next-line
  error => {
    loading.close();

    const { status, data } = error.response;

    switch (status) {
      case 401:
        window.vm.$router.replace('/login');
        break;
      default:
        window.vm.$message(data.error.message);
        return Promise.reject(error);
    }
  },
);

export default dkAxios;
