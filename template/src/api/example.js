import axios from '../jslib/dk-axios';
import env from '../configs/env';

export const getImageUpload = data => axios({
  url: env.uploadDomain,
  headers: {
    'content-type': 'multipart/form-data',
  },
  method: 'POST',
  data,
});

export const getCloudsToken = () => axios({
  url: '/app/communal/qiniu',
  method: 'GET',
});
