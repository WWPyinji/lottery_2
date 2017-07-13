<template>
  <div>
    <h2>伍鹏测试页面</h2>
    <v-tip v-show="toolTip" :title-flag="titleFlag" :title-msg="titleMsg" :title-cont="titleCont" :link-url="linkUrl" @confirm="confirm"
           @cancel="cancel"></v-tip>
    <button @click="showToolTip">showToolTip</button>
    <!--<v-payment v-show="toolTip" :title-msg="titleMsg" :title-cont="titleCont" :link-url="linkUrl" @confirm="confirm"-->
           <!--@cancel="cancel"></v-payment>-->
    <v-payment v-show="payFlag" @confirm="confirm" @cancel="cancel"></v-payment>
    <button @click="pay">pay</button>
  </div>
</template>

<script>
  import tooltip from '../components/common/toolTip.vue'
  import payment from '../components/common/payment.vue'
  export default{
    data(){
      return {
        toolTip: false,
        titleMsg: '',
        titleCont:'',
        linkUrl: '',
        titleFlag:false,
        payFlag:false
      }
    },
    components: {
      'v-tip': tooltip,
      'v-payment':payment
    },
    methods: {
      showToolTip: function () {
        this.toolTip = true;
//      this.tools.tit('这是一个弹框wewe','是否前往更新dsd',false);
				this.tools.tit('这是一个弹框wewe','',true);
      	this.titleMsg = this.$store.state.com.titleMsg;
      	this.titleCont = this.$store.state.com.titleCont;
        this.titleFlag = this.$store.state.com.titleFlag;
        console.log(this.$store.state.com)
      },
      confirm() {
        this.toolTip = false
      },
      cancel() {
        this.toolTip = false
      },
      pay:function(){
        this.payFlag = true
      }
    }
  }
</script>
