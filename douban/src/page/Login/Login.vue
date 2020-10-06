<template>
  <div class="login-box">
    <div class="login-box_top">
      <span class="iconfont icon-searchclose" @click="closeLoginPage"></span>
    </div>
    <h2>登录豆瓣</h2>
    <p>登录注册表示同意<span>豆瓣使用协议</span>、<span>隐私政策</span></p>
    <!-- 账号密码登录区域 -->
    <div class="login_submitMsg" v-if="isShow">
      <div class="input_box">
        <input type="text" placeholder="手机号/邮箱">
      </div>
      <div class="input_box">
        <input type="password" placeholder="密码">
      </div>
      <div class="btn_box">
        <button>登录</button>
      </div>
      <div class="other">
        <span @click="isShow=false">免密登录</span>
        <span>海外登录</span>
        <span>找回密码</span>
      </div>
    </div>

    <!-- 手机验证码登录区域 -->
    <div class="login_submitMsg phoneLogin" v-else>
      <div class="input_box">
        <span>+86</span>
        <input type="text" placeholder="手机号">
      </div>
      <div class="input_box">
        <input type="password" placeholder="手机验证码">
        <span>获取验证码</span>
      </div>
      <div class="btn_box">
        <button>登录</button>
      </div>
      <div class="other">
        <span @click="isShow=true">账号密码登录</span>
        <span>验证码收不到？</span>
      </div>
    </div>

    <!-- 第三方登录 -->
    <div class="otherMethod">
      <p>第三方登录</p>
      <div class="method">
        <span><i class="iconfont icon-weibo1"></i></span>
        <span><i class="iconfont icon-weixin"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
    }
  },
  methods: {
    closeLoginPage () {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="less" scope>
@import url('../../assets/iconFont/iconfont.css');
.login-box {
  padding: .1rem .2rem;
  .login-box_top {
    .iconfont {
      font-size: .3rem;
    }
  }
  h2 {
    text-align: center;
    font-size: .3rem;
    color: black;
    margin-bottom: .1rem;
  }
  p {
    text-align: center;
    color: #c5c5c5;
    font-size: .15rem;
    margin-bottom: .2rem;
    span {
      color: #42bd56;
    }
  }
  .login_submitMsg {
    .input_box {
      border: .01rem solid #dadada;
      height: .45rem;
      line-height: .45rem;
      overflow: hidden;
      &:nth-of-type(1) {
        border-bottom: none;
      }
      input {
        height: .45rem;
        vertical-align: top;
        text-indent: 1em;
        width: 100%;
      }
    }
    .btn_box {
      margin-top: .2rem;
      height: .45rem;
      button {
        width: 100%;
        height: .45rem;
        background: #a0deaa;
        color: white;
        font-size: .2rem;
      }
    }
    .other {
      margin-top: .1rem;
      font-size: .14rem;
      overflow: hidden;
      span {
        color: #5bc66d;
        margin-right: .1rem;
      }
      span:last-of-type {
        float: right;
        color: black;
        margin: 0;
      }
    }
  }
  .phoneLogin {
    .input_box {
      display: flex;
    }
    .input_box:nth-of-type(1) {
      span {
        color: black;
        width: 20%;
        text-align: center;
        border-right: .01rem solid #dadada;
      }
    }
    .input_box:nth-of-type(2) {
      span {
        font-size: .13rem;
        width: 30%;
        text-align: center;
        color: #42bd56;
      }
    }
  }
  .otherMethod {
    margin-top: 1rem;
    p {
      font-size: .14rem;
    }
    .method {
      text-align: center;
      display: flex;
      justify-content: center;
      span {
        padding: .1rem;
        box-shadow: 0 .01rem .03rem rgb(197, 196, 196);
        border-radius: 50%;
        margin: 0 .2rem;
        .iconfont {
          color: #39bb4a;
          font-size: .24rem;
        }
      }
    }
  }
}
</style>
