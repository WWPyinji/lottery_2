/**

 Created with JetBrains WebStorm.
 User: Administrator
 Date: 13-7-17
 Time: 上午9:13
 To change this template use File | Settings | File Templates. */

import config from './base'
import axios from 'axios'


export default {
  post: function (url, params, successCallBack, errorCallBack) {
    //配置请求参数
    config.serviceConfig.data = params;
    //返回请求参数
    axios.post(url, {}, config.serviceConfig)
      .then(function (response) {
        //成功回调
        console.log('service1:'+JSON.stringify(response));
        successCallBack(response);
      })
      .catch(function (response) {
        console.log('service2:'+JSON.stringify(response));
        errorCallBack(response);
      })
  }
}



