// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import httpService from './http/httpService'
import * as _tools from './utils/tools'

Vue.config.productionTip = false;

Vue.prototype.httpService = httpService;
Vue.prototype.tools = _tools;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
