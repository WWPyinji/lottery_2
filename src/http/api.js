/**

 Created with JetBrains WebStorm.
 User: Administrator
 Date: 13-7-17
 Time: 上午9:13
 To change this template use File | Settings | File Templates. */

import axios from 'axios'
// import qs from 'qs'
import urlCofig from './urlCofig'

axios.defaults.baseURL = 'https://bird.ioliu.cn/'

axios.defaults.timeout = 5000
axios.defaults.method = 'get'
axios.defaults.headers.post['Content-Type'] = 'application/json'


//添加请求拦截器
axios.interceptors.request.use(function (config) {
  //在发送请求之前做某事
  config.data["token"] = 'abcdefghjklmnopqrstuvwxyz';
  console.log(config);
  return config;
}, function (error) {
  //请求错误时做些事
  return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(function (response) {
  //对响应数据做些事

  if (response && response.data.status.code == 200) {
    console.log("response:" + response.data.status.code);
    return response;
  } else {
    console.log("接口请求失败");
    return Promise.reject(response);
  }
}, function (error) {
  //请求错误时做些事
  return Promise.reject(error);
});


// export  default  axios
export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  // 获取笑话列表
  getJoke(data){
    return fetch(urlCofig.IN_THEATERS, data);
  }
}
