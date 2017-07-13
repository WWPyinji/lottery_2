/**

 Created with JetBrains WebStorm.
 User: Administrator
 Date: 13-7-17
 Time: 上午9:13
 To change this template use File | Settings | File Templates. */

import Qs from 'qs'

export default {
  serviceConfig: {
    // `url`是将用于请求的服务器URL
    // url: '',
    // `method`是发出请求时使用的请求方法
    method: 'post', // 默认
    // `baseURL`将被添加到`url`前面，除非`url`是绝对的。
    // 可以方便地为 axios 的实例设置`baseURL`，以便将相对 URL 传递给该实例的方法。
    // baseURL: 'https://bird.ioliu.cn',//
    // baseURL: 'http://192.168.0.64:8080',
    // baseURL:'http://op.juhe.cn',
    baseURL:'http://192.168.1.111:8080',

    // `transformRequest`允许在请求数据发送到服务器之前对其进行更改
    // 这只适用于请求方法'PUT'，'POST'和'PATCH'
    // 数组中的最后一个函数必须返回一个字符串，一个 ArrayBuffer或一个 Stream
    transformRequest: [function (data) {
      // 做任何你想要的数据转换
      console.log("请求之前" + Qs.stringify(data));
      return data;
    }],
    // `transformResponse`允许在 then / catch之前对响应数据进行更改
    transformResponse: [function (data) {
      // Do whatever you want to transform the data
      return data;
    }],

    // `headers`是要发送的自定义 headers
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    // headers: {"Access-Control-Allow-Origin": '*'},
    // headers: {'Content-Type': 'text/html;charset=utf-8'},

    data: {},
    // `timeout`指定请求超时之前的毫秒数。
    // 如果请求的时间超过'timeout'，请求将被中止。
    timeout: 5000,
    // `withCredentials`指示是否跨站点访问控制请求
    // should be made using credentials
    // withCredentials: false, // default


    responseType: 'json', // default

  }
}
