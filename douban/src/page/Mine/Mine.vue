<template>
  <div>
    <Header>
      <template #title>
        <h2>
          我的
        </h2>
      </template>
      <template #icon2>
        <img src="../../assets/img/icon/ic_settings.png" alt="">
      </template>
    </Header>
    <div class="main">
      <!-- 顶部操作区域 -->
      <div class="main-topBox">
        <div class="top_item">
          <span class="iconfont icon-mima"></span>
          <span>密码管理</span>
        </div>
        <div class="top_item">
          <span class="iconfont icon-vipcard"></span>
          <span>银行卡管理</span>
        </div>
      </div>

      <!-- 设置选项 -->
      <ul class="setting">
        <li>
          <div class="img_box">
            <i class="iconfont icon-edit"></i>
          </div>
          <span>风险承受能力评估</span>
          <i class="icon_right"></i>
        </li>
        <li>
          <div class="img_box">
            <i class="iconfont icon-safety-certificate"></i>
          </div>
          <span>安全保障</span>
          <i class="icon_right"></i>
        </li>
        <li>
          <div class="img_box">
            <i class="iconfont icon-people"></i>
          </div>
          <span>我的关注</span>
          <i class="icon_right"></i>
        </li>
        <li>
          <div class="img_box">
            <i class="iconfont icon-help"></i>
          </div>
          <span>帮助中心</span>
          <i class="icon_right"></i>
        </li>
        <li>
          <div class="img_box">
            <i class="iconfont icon-people"></i>
          </div>
          <span>关于我们</span>
          <i class="icon_right"></i>
        </li>
        <li>
          <div class="img_box">
            <i class="iconfont icon-sousuo"></i>
          </div>
          <span>检查更新</span>
          <i class="icon_right"></i>
        </li>
        <li>
          <div class="img_box">
            <i class="iconfont icon-kefu"></i>
          </div>
          <span>联系客服</span>
          <i class="icon_right"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
@import url('../../assets/iconFont/iconfont.css');
.main {
  .main-topBox {
    padding: .15rem 0;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e7e4e4;
    .top_item {
      text-align: center;
      img {
        width: .4rem;
        display: inline-block;
      }
      span {
        display: block;
        font-size: .14rem;
      }
      span:nth-of-type(1) {
        margin-bottom: .05rem;
      }
      .iconfont {
        font-size: .45rem;
        color: #42bd56;
      }
    }
  }
  .setting {
    li {
      display: flex;
      padding: .1rem ;
      border-bottom: 1px solid #e7e4e4;
      align-items: center;
      position: relative;
      span {
        font-size: .13rem;
      }
      .img_box {
        padding-right: .1rem;
        .iconfont {
          font-size: .3rem;
          margin-left: .1rem;
          color: #42bd56;
        }
      }
      .icon_right {
        position: absolute;
        right: .2rem;
        width: .1rem;
        height: .18rem;
        background: url('/static/img/icon/arrow_right_1.png') no-repeat;
        background-size: .1rem .18rem;
      }
    }
  }
}
</style>
