<template>
    <div id = "paybox">
      <div class="mask"></div>
      <div class = "paymodel">
        <group class = "tt">
          <selector value="C" title="当前店家" :options="list" @on-change="onChange"></selector>
        </group>
        <p>(联系电话:<span>13012345678</span>)</p>
        <p><label>账号余额:</label><span>1</span></p>
        <p><label>需要支付:</label><span>4</span><span>(余额不足请去充值)</span></p>
        <p><label>支付密码:</label><input type="number"></p>
        <div class="btn_title">
          <div class="btn" @click="cancal">取消</div>
          <div class="btn" @click="confirm">确定</div>
        </div>
      </div>
    </div>
</template>

<script>
  import { Selector, Group } from 'vux'
  export default {
    components: {
      Group,
      Selector
    },
    data () {
      return {
        demo01: '',
        demo02: '',
        defaultValue: '',
        plainList: ['广东', '广西'],
        list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}, {key: 'gs', value: '广悬'}, {key: 'gs', value: '广悬'}, {key: 'gs', value: '广悬'}],
        list2: [{key: true, value: '是'}, {key: false, value: '否'}],
        value1: '广西',
        value2: 'gd',
        value3: true,
        list1: ['A', 'B', 'C']
      }
    },
    methods: {
      onChange (val) {
        console.log(val)
      },
      confirm () {
        this.$emit('confirm')
      },
      cancal () {
        this.$emit('cancel')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/function';

  #paybox{
    z-index: 100;
    .paymodel{
      padding:0  px2rem(40px);
      position: fixed;
      box-sizing: border-box;
      width: px2rem(666px);
      height: px2rem(520px);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border:3px solid #ffa826;
      border-radius: px2rem(18px);
      background: #fff8ce;
      z-index: 1002;
      .tt{
        background: #fff8ce !important;
        .weui-cells{
          background: #fff8ce !important;
        }
      }
    }
    .mask {
      position: fixed;
      width: 100%;
      margin: 0 auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1001;
      background: rgba(0, 0, 0, .5);
    }
  }
  .weui-select{
    height:45px;
  }
  .vux-selector.weui-cell_select-after{
    padding-left: 0;
    border: none;
    background: #fff8ce;
  }

</style>
