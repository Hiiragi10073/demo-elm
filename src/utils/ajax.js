import axios from 'axios';

// axios 拦截器
// 请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
});

// 响应拦截器
axios.interceptors.response.use(response => {
  return response;
}, err => {
  return Promise.reject(err);
});

export default function ajax(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    let promise;

    if (method === 'GET') {
      promise = axios.get(url, { params: data });
    } else {
      promise = axios.post(url, data);
    }

    promise.then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    });
  });
}