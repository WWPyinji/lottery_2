<template>
  <div id="home">
    <router-view></router-view>
    <v-tabar></v-tabar>
  </div>
</template>
<script>
  import {Tabbar, TabbarItem} from 'vux'
  import tabbar from '../components/common/tabbar.vue'
  require('../assets/css/base.css')
  export default{
    name: 'home',
    data(){
      return {}
    },
    components: {
      Tabbar,
      TabbarItem,
      'v-tabar': tabbar,
    }
  }
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';

  .header {
    text-align: center;
  }

  .weui-tabbar {
    background: #fff;
    position: fixed;
  }

  .weui-bar__item_on span {
    color: #ff9c49;
  }
</style>
