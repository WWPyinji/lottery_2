<template>
  <div id="">
    <tabbar v-show="isShowTabbar">
      <tabbar-item selected link="/home">
        <img slot="icon" src="../../assets/images/news@2x.png">
        <img slot="icon-active" src="../../assets/images/news_on@2x.png">
        <span slot="label">资讯</span>
      </tabbar-item>
      <tabbar-item link="/shopLottery">
        <img slot="icon" src="../../assets/images/buycar@2x.png">
        <img slot="icon-active" src="../../assets/images/buycar_on@2x.png">
        <span slot="label">购彩</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/my">
        <img slot="icon" src="../../assets/images/my@2x.png">
        <img slot="icon-active" src="../../assets/images/my_on@2x.png">
        <span slot="label">我的</span>
      </tabbar-item>
      <tabbar-item show-dot link="/test">
        <!--选中前的图标-->
        <img slot="icon" src="../../assets/images/logo.png">
        <!--选中后的图标-->
        <img slot="icon-active"
             src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495533401&di=88f2731ef39318c4e1c91e12f31fcda6&imgtype=jpg&er=1&src=http%3A%2F%2Fdl.bizhi.sogou.com%2Fimages%2F2012%2F03%2F14%2F124196.jpg">
        <span slot="label">测试</span>
      </tabbar-item>
      <tabbar-item show-dot link="/wupeng">
      <img slot="icon" src="../../assets/images/logo.png">
      <img slot="icon-active"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495533401&di=88f2731ef39318c4e1c91e12f31fcda6&imgtype=jpg&er=1&src=http%3A%2F%2Fdl.bizhi.sogou.com%2Fimages%2F2012%2F03%2F14%2F124196.jpg">
      <span slot="label">伍鹏测试</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
  import {Tabbar, TabbarItem} from 'vux'
  export default{
    name: '',
    data(){
      return {}
    },
    computed: {
      isShowTabbar () {
        let routeLength = this.$route.path.split('/').length
        return routeLength > 2 ? false : true
      }
    },
    components: {
      Tabbar,
      TabbarItem,
    },
    methods: {}
  }
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>

