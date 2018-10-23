import axios from '../jslib/dk-axios';
import { UploadDomain } from '../configs/env';

export const getImageUpload = data =>
  // eslint-disable-next-line
  axios({
    url: UploadDomain,
    headers: {
      'content-type': 'multipart/form-data',
    },
    method: 'POST',
    data,
  });

export const getCloudsToken = () =>
  // eslint-disable-next-line
  axios({
    url: '/app/communal/qiniu',
    method: 'GET',
  });
