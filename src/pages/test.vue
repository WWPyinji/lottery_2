<template>
  <div>
    <x-header :left-options="{backText: '',showBack:false}" class="" title="测试"></x-header>
    <br>
    <v-dialog v-show="dialog" :dialog-msg="dialogMsg" :link-url="linkUrl" @confirm="confirm"
              @cancel="cancel"></v-dialog>
    <button @click="showDialog">showDialog</button>
    <div>
      <button @click="showAlert">showAlert</button>
    </div>
    <div>
      <button @click="showLoadingFn">showLoading</button>
    </div>
    <div>
      <button @click="networkTest">网络测试</button>
    </div>
    <div>
      <router-link to="/test/aaaa">二级页面</router-link>
    </div>
  </div>
</template>
<script>
  import dialog from '../components/common/dialog.vue'
  import * as tools from '../utils/tools'
  import {XHeader} from 'vux'
  export default{
    data(){
      return {
        dialog: false,
        dialogMsg: '确认支付吗？',
        linkUrl: '',
        title: '订单',
        showLoading: false,
        text: ''
      }
    },
    components: {
      'v-dialog': dialog,
      'x-header': XHeader
    },
    methods: {
      showDialog: function () {
        this.dialog = true
      },
      confirm() {
        this.dialog = false
      },
      cancel() {
        this.dialog = false
      },
      showAlert: function () {
//        tools.alert('这是一个弹框', 'success');
        this.tools.alert('这是一个弹框', 'success');
      },
      showLoadingFn: function () {
        tools.showLoading(true);
        setTimeout(function () {
          tools.showLoading(false);
        }, 2000);
      },
      networkTest: function () {
        var data = {
          'name': 'zhangwei',
          'sex': '男'
        };
        this.httpService.getJoke(data, function (response) {
          console.log("成功：" + JSON.stringify(response));
        }, function (error) {
          console.log("失败：" + JSON.stringify(error));
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../assets/css/function';
</style>
