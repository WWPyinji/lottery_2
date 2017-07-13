<template>
  <div id="app">
    <!--<v-alert v-show="showAlert"></v-alert>-->
    <toast v-model="showToast" :type="toastType" :time="2000" is-show-mask :text="toastMsg"
           position="middle"></toast>
    <loading v-model="isLoading" loading=false></loading>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  //  import alert from '@/components/alert'
  import {mapGetters, mapActions, mapState} from 'vuex'
  import {Loading} from 'vux'
  import {Toast} from 'vux'

  export default {
    name: 'app',
    data(){
      return {};
    },
    components: {
//      'v-alert': alert,
      Toast,
      Loading
    },
    computed: {
      ...mapGetters([
        'showToast'
      ]),
      ...mapState({
        toastMsg: state => state.com.toastMsg,
        toastType: state => state.com.toastType,
        isLoading: state => state.com.isLoading
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import './assets/css/function';

  @font-face {
    font-family: 'icon';  /* project id 172436 */
    src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot');
    src: url('//at.alicdn.com/t/font_w71lovnj7adobt9.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.woff') format('woff'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_w71lovnj7adobt9.svg#iconfont') format('svg');
  }

  html, body {
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    background: #F5F5F5;
  }
</style>
