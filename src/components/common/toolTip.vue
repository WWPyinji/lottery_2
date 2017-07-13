<template>
  <div class="title_box">
    <div class="mask"></div>
    <div class="title-wrap">
    	<div v-if="titleFlag" style="padding-top: 15px;">
    	</div>
      <div class="text">
        {{titleMsg}}
      </div>
      <div class="cont">
        {{titleCont}}
      </div>
      <div class="btn_title">
        <div class="btn" @click="cancal">取消</div>
        <div class="btn" @click="confirm">确定</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      titleMsg: String,
      titleCont:String,
      linkUrl: String,
      titleFlag:Boolean
    },
    data () {
      return {}
    },
    methods: {
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

  .title_box {
    text-align: center;
    z-index: 100;
    .title-wrap {
      position: fixed;
      box-sizing: border-box;
      width: px2rem(664px);
      height: px2rem(380px);
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border:3px solid #ffa826;
      border-radius: px2rem(18px);
      background: #fff8ce;
      z-index: 1002;
      .text {
        margin-top: px2rem(60px);
        font-size: 14px;
        /*line-height: px2rem(50px);*/
        color: #555;
      }
      .cont{
        margin-top: px2rem(40px);
        font-size: 14px;
      }
      .btn_title {
        display: flex;
        position: absolute;
        right: px2rem(40px);
        bottom: px2rem(40px);
        .btn {
          width:px2rem(230px);
          height:px2rem(80px);
          text-align: center;
          line-height:px2rem(80px);
          font-size: 14px;
          margin:0 px2rem(30px);
          &:first-child {
            background:#7d7b7b;
             color: #fff;
           }
          &:last-child {
            background: #ff9600;
             color: #fff;
           }
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
</style>
