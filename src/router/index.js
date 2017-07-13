import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'guide',
    component: resolve => require(['../pages/guide.vue'], resolve),
  }
  ,
  {
    path: '/home',
    name: 'home',
    component: resolve => require(['../pages/home.vue'], resolve),
    children: [
      {
        path: '/',
        name: 'message',
        component: resolve => require(['../pages/message/message.vue'], resolve)
      }
      ,
      {
        path: '/shopLottery',
        name: 'shopLottery',
        component: resolve => require(['../pages/shopLottery/shopLottery.vue'], resolve)
      }
      ,
      {
        path: '/seniorService',
        name: 'seniorService',
        component: resolve => require(['../pages/seniorService/seniorService.vue'], resolve)
      }
      ,
      {
        path: '/my',
        name: 'my',
        component: resolve => require(['../pages/my/my.vue'], resolve)
      }
      ,
      {
        path: '/test',
        name: 'test',
        component: resolve => require(['../pages/test.vue'], resolve)
      }
      ,
      {
        path: '/wupeng',
        name: 'wupeng',
        component: resolve => require(['../pages/wupengceshi.vue'], resolve)
      }
    ]
  }
];

const router = new Router({
  routes
});


/**
 * 路油跳转前，显示loading
 */
router.beforeEach(function (to, from, next) {
  store.dispatch('setLoadingState', true);
  next()
})

/**
 * 路油跳转前，关闭loading
 */
router.afterEach(function (to) {
  store.dispatch('setLoadingState', false)
})

export default router;
