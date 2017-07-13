/**

 Created with JetBrains WebStorm.
 User: Administrator
 Date: 13-7-17
 Time: 上午9:13
 To change this template use File | Settings | File Templates. */

import service from './service'

/**
 * 获取笑话列表
 * @type {string}
 */
var IN_THEATERS = '/joke/?type=text';


var GET_MOVIE = 'v2/movie/top250';

var LOGIN = '/cms/get_list';

var SEARCH_MOVIE = '/onebox/movie/video';

var ADD_INFO = '/PWorkTask/add.koala';

export default {
  //获取笑话列表
  getJoke: function (params, succesCallback, errorCallback) {
    service.post(IN_THEATERS, params, succesCallback, errorCallback);
  },
  login: function (params, succesCallback, errorCallback) {
    service.post(LOGIN, params, succesCallback, errorCallback);
  }
  ,
  searchMovie: function (params, succesCallback, errorCallback) {
    service.post(SEARCH_MOVIE, params, succesCallback, errorCallback);
  }
  ,
  addInfo: function (params, succesCallback, errorCallback) {
    service.post(ADD_INFO, params, succesCallback, errorCallback);
  }
}



