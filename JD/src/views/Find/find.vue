<template>
  <div>
    <Header>
      <template #center>
        <h2>发现</h2>
      </template>
    </Header>
    <div class="main">
      <!-- 顶部导航 -->
      <nav class="nav">
        <span>
          <img src="../../assets/images/img/star1.png" alt="">
          <span>精选</span>
        </span>
        <span>
          <img src="../../assets/images/img/book1.png" alt="">
          <span>购物百科</span>
        </span>
        <span>
          <img src="../../assets/images/img/eat1.png" alt="">
          <span>好吃的</span>
        </span>
        <span class="active">
          <img src="../../assets/images/img/camera2.png" alt="">
          <span>好玩的</span>
        </span>
        <span>
          <img src="../../assets/images/img/look1.png" alt="">
          <span>好看的</span>
        </span>
      </nav>

      <!-- 内容区域 -->
      <section class="contetnt">
        <div class="top_area">
          <div class="top_area_item">
            <span>
              <img src="../../assets/images/img/haowan.png" alt="">
              <span>电脑</span>
            </span>
          </div>
          <div class="top_area_item">
            <span>
              <img src="../../assets/images/img/haowan.png" alt="">
              <span>数码</span>
            </span>
          </div>
          <div class="top_area_item">
            <span>
              <img src="../../assets/images/img/haowan.png" alt="">
              <span>手机</span>
            </span>
          </div>
          <div class="top_area_item">
            <span>
              <img src="../../assets/images/img/haowan.png" alt="">
              <span>流量卡</span>
            </span>
          </div>
        </div>

        <div class="body_area">
          <div class="body_area_item" v-for="item in playList" :key="item.id">
            <div class="left">
              <span>{{item.title}}</span>
              <div class="row">
                <img :src="item.avatar_url" alt="" class="avatar">
                <span class="auther">{{item.avatar_name}}</span>
                <span class="read">{{item.read}}</span>
              </div>
            </div>
            <div class="right">
              <img :src="item.imgUrl" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  data () {
    return {
      playList: [
        { id:1, title: '1超跑买到吐，沙特土壕都在抢这台中...', avatar_url: require('../../assets/images/img/tx.png'), imgUrl: require('../../assets/images/img/che.jpg'), avatar_name: '黑口袋', read: '2w+人阅读' },
        { id:2, title: '2超跑买到吐，沙特土壕都在抢这台中...', avatar_url: require('../../assets/images/img/tx.png'), imgUrl: require('../../assets/images/img/che.jpg'), avatar_name: '黑口袋', read: '4w+人阅读' },
        { id:3, title: '七年时间，一个真实黑莓粉丝的成长之路', avatar_url: require('../../assets/images/img/tx.png'), imgUrl: require('../../assets/images/img/wan.jpg'), avatar_name: '黑口袋', read: '1w+人阅读' },
        { id:4, title: '4超跑买到吐，沙特土壕都在抢这台中...', avatar_url: require('../../assets/images/img/tx.png'), imgUrl: require('../../assets/images/img/che.jpg'), avatar_name: '黑口袋', read: '3w+人阅读' },
        { id:5, title: '5超跑买到吐，沙特土壕都在抢这台中...', avatar_url: require('../../assets/images/img/tx.png'), imgUrl: require('../../assets/images/img/che.jpg'), avatar_name: '黑口袋', read: '4w+人阅读' },
        { id:6, title: '6超跑买到吐，沙特土壕都在抢这台中...', avatar_url: require('../../assets/images/img/tx.png'), imgUrl: require('../../assets/images/img/sele3.jpg'), avatar_name: '黑口袋', read: '9w+人阅读' },
        { id:7, title: '7超跑买到吐，沙特土壕都在抢这台中...', avatar_url: require('../../assets/images/img/tx.png'), imgUrl: require('../../assets/images/img/che.jpg'), avatar_name: '黑口袋', read: '7w+人阅读' },
        { id:8, title: '8超跑买到吐，沙特土壕都在抢这台中...', avatar_url: require('../../assets/images/img/tx.png'), imgUrl: require('../../assets/images/img/che.jpg'), avatar_name: '黑口袋', read: '6w+人阅读' }
      ]
    }
  },
  methods: {
    fn () {
      console.log(111)
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.main {
  padding-top: 100/75rem;
  .nav {
    display: flex;
    background: white;
    &>span {
      padding: 20/75rem 0;
      flex: 1;
      text-align: center;
      img {
        display: inline-block;
        width: 35/75rem;
        height: 35/75rem;
      }
      span {
        display: block;
        margin-top: 10/75rem;
      }
    }
    .active {
      background: linear-gradient(to right, #ea3f40, #fd9071);
      color: white;
      position: relative;
      overflow: hidden;
      &:after {
        content: '';
        left: 50%;
        bottom: -10/75rem;
        transform: translateX(-50%);
        margin-left: -10/75rem;
        position: absolute;
        border: 10/75rem solid transparent;
        border-top-color: white;
        border-right-color: white;
        transform: rotate(-45deg);
      }
    }
  }
}
.contetnt {
  padding-top: 30/75rem;
  .top_area {
    padding: 25/75rem 0;
    background: white;
    display: flex;
    .top_area_item {
      flex: 1;
      text-align: center;
      &>span {
        display: block;
        width: 100/75rem;
        margin: 0 auto;
        img {
          display: inline-block;
          width: 70/75rem;
        }
        span {
          display: block;
          margin-top: 15/75rem;
          font-size: 25/75rem;
          color: black;
        }
      }
    }
  }
  .body_area {
    padding: 20/75rem;
    .body_area_item {
      background: white;
      display: flex;
      margin-bottom: 20/75rem;
      .left {
        width: 50%;
        padding: 20/75rem 25/75rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &>span {
          display: block;
          color: black;
          font-size: 30/75rem;
          line-height: 60/75rem;
        }
        .row {
          display: flex;
          align-items: center;
          img {
            width: 50/75rem;
            border-radius: 50%;
            display: inline-block;
          }
          span {
            color: #999999;
            margin-left: 20/75rem;
            font-size: 25/75rem;
          }
        }
      }
      .right {
        width: 50%;
      }
    }
  }
}
</style>