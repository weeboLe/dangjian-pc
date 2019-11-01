// axios 封装
import axios from 'axios';
import QS from 'qs';
import { log } from 'util';
// 请求拦截
axios.interceptors.request.use(config => {
  config.headers['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
  //config.baseURL = 'http://117.34.80.22:8300/TSY/';  //打包上线环境
  return config
}, error => {
  return Promise.error(error)
});
// 响应拦截器
axios.interceptors.response.use(response => {
  // 拦截处理返回状态
  return Promise.resolve(response);
  // 这里可以处理登录过期的一些方法
}, error => {
  return Promise.reject(error);

})

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}

