import axios from '../jslib/dk-axios';

// eslint-disable-next-line
export const getImageUpload = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      hash: '201810151726',
    });
  }, 2000);
});

export const getCloudsToken = () => axios({
  url: '/app/communal/qiniu',
  method: 'GET',
});
