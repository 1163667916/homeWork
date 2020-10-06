<template>
  <div class="mine">
    <Header>
      <template #center>
        <h2>我的京东</h2>
      </template>
    </Header>
    <div class="main">
      <!-- 用户卡片区域 -->
      <div class="user_info">
        <div class="user_card">
          <div class="user_guanli">
            账号管理
          </div>
          <div class="user_avatar">
            <img src="../../assets/images/icon/avator.jpg" alt="">
          </div>
          <div class="user_content">
            <p>快乐购物狂</p>
            <span>用户名:jd_569aa99957d5b</span>
            <div class="row">
              <span>金牌</span>
              <span>京享值14295</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 商品信息 -->
      <div class="goods_info">
        <div class="goods_item">
          <img src="../../assets/images/icon/unpay.png" alt="">
          <span>待付款</span>
        </div>
        <div class="goods_item">
          <img src="../../assets/images/icon/unreciev.png" alt="">
          <span>待收货</span>
        </div>
        <div class="goods_item">
          <img src="../../assets/images/icon/consult.png" alt="">
          <span>退换/售后</span>
        </div>
        <div class="goods_item">
          <img src="../../assets/images/icon/orders.png" alt="">
          <span>全部订单</span>
        </div>
      </div>

      <!-- 我的资源区域 -->
      <div class="user_resource">
        <div class="resource_item">
          <span>9张</span>
          <p>京东券</p>
        </div>
        <div class="resource_item">
          <span>4610元</span>
          <p>京东券</p>
        </div>
        <div class="resource_item">
          <span>527个</span>
          <p>京东券</p>
        </div>
        <div class="resource_item">
          <span>0张</span>
          <p>京东券</p>
        </div>
        <div class="resource_item">
          <img src="../../assets/images/icon/assets.png" alt="">
          <p>全部资产</p>
        </div>
      </div>

      <!-- 用户行为 -->
      <div class="user_behavior">
        <div class="behavior_item">
          <span>18</span>
          <p>关注的商品</p>
        </div>
        <div class="behavior_item">
          <span>8</span>
          <p>关注的店铺</p>
        </div>
        <div class="behavior_item">
          <span>3</span>
          <p>浏览记录</p>
        </div>
      </div>

      <!-- 客户服务 -->
      <div class="kefu">
        <span>客户服务</span>
      </div>

      <!-- 推荐 -->
      <section class="recommend">
        <div class="recommend_title">
          <span>为您推荐</span>
        </div>
        <div class="recommend_content">
          <div class="recommend_content_item" v-for="item in recommendList" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <div>
              <span class="title">{{item.title}}</span>
              <span class="price"><em>￥</em>{{item.price}}</span>
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
      recommendList: [
        { id: 1, imgUrl: require('../../assets/images/img/putao.jpg'), title: '爱奇果澳洲进口金手指提子1kg装 精...', price: '119.00' },
        { id: 2, imgUrl: require('../../assets/images/img/tap.jpg'), title: '北京故事新品遮阳小花刺绣户外运动棒...', price: '71.10' },
        { id: 3, imgUrl: require('../../assets/images/img/dazao.jpg'), title: '好想你 干果零食 新疆特产 阿克苏灰枣...', price: '19.90' },
        { id: 4, imgUrl: require('../../assets/images/img/donggua.jpg'), title: '美依家（EveryHome）...', price: '19.90' },
      ]
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.main {
  margin-top: 100/75rem;
  .user_info {
    background: white;
    padding: 20/75rem 30/75rem;
    .user_card {
      background: linear-gradient(to right, #ec3e3d, #fe7258);
      border-radius: 10/75rem;
      padding: 60/75rem 30/75rem;
      display: flex;
      align-items: center;
      position: relative;
      .user_guanli {
        position: absolute;
        right: 20/75rem;
        top: 30/75rem;
        color: #822019;
        font-size: 24/75rem;
        &::before {
          content: '';
          display: inline-block;
          background: url('../../assets/images/icon/zhanghao.png');
          width: 26/75rem;
          height: 26/75rem;
          background-size: 26/75rem auto;
          vertical-align: middle;
        }
      }
      .user_avatar {
        img {
          width: 120/75rem;
          border-radius: 50%;
          border: 2/75rem solid white;
        }
      }
      .user_content {
        padding-left: 30/75rem;
        color: white;
        p {
          font-size: 28/75rem;
        }
        &>span {
          color: #ccc;
          display: block;
          padding: 15/75rem 0;
          font-size: 25/75rem;
        }
        .row {
          span {
            display: inline-block;
            font-size: 23/75rem;
          }
          span:first-of-type {
            background: rgba(0,0,0,.3);
            padding: 3/75rem 15/75rem;
            border-radius: 20/75rem;
            padding-left: 30/75rem;
            position: relative;
            &:before {
              content: '';
              position: absolute;
              left: -5/75rem;
              width: 30/75rem;
              height: 30/75rem;
              background: url('../../assets/images/icon/icon_vip.png') -125/75rem -5/75rem;
              background-size: 200/75rem auto;
            }
          }
          span:last-of-type {
            background: rgba(0,0,0,.2);
            padding: 3/75rem 10/75rem;
            border-radius: 20/75rem;
            margin-left: 30/75rem;
          }
        }
      }
    }
  }
  .goods_info {
    display: flex;
    background: white;
    margin-top: 30/75rem;
    padding: 30/75rem 20/75rem;
    .goods_item {
      flex: 1;
      text-align: center;
      img {
        display: inline-block;
      }
      span {
        display: block;
        font-size: 24/75rem;
      }
    }
  }
  .user_resource {
    background: white;
    margin-top: 30/75rem;
    padding: 30/75rem 10/75rem;
    display: flex;
    .resource_item {
      flex: 1;
      text-align: center;
      img {
        display: inline-block;
        height: 40/75rem;
        vertical-align: top;
      }
      span {
        display: inline-block;
        height: 40/75rem;
        color: #e93b3d;
        font-size: 30/75rem;
      }
      p {
        margin-top: 20/75rem;
        font-size: 24/75rem;
      }
    }
  }
  .user_behavior {
    display: flex;
    background: white;
    margin-top: 30/75rem;
    padding: 30/75rem 0;
    .behavior_item {
      flex: 1;
      text-align: center;
      span {
        font-weight: bold;
        color: black;
        font-size: 30/75rem;
      }
      p {
        margin-top: 20/75rem;
        font-size: 24/75rem;
      }
    }
  }
  .kefu {
    padding: 30/75rem 20/75rem;
    background: white;
    margin-top: 30/75rem;
    span {
      color: #969696;
      font-size: 28/75rem;
    }
  }
  .recommend {
    margin-top: 30/75rem;
    .recommend_title {
      background: white;
      padding: 30/75rem 20/75rem;
      span {
        font-size: 28/75rem;
        color: #333333;
      }
    }
    .recommend_content {
      margin-top: 20/75rem;
      display: flex;
      flex-wrap: wrap;
      padding: 0 20/75rem;
      justify-content: space-between;
      .recommend_content_item {
        background: white;
        width: 48%;
        margin-bottom: 20/75rem;
        div {
          padding: 20/75rem;
        }
        img {
          width: 100%;
        }
        span {
          display: block
        }
        .title {
          font-weight: bold;
          color: black;
          font-size: 28/75rem;
          margin-bottom: 20/75rem;
        }
        .price {
          color: #ec1515;
          font-size: 30/75rem;
          em {
            font-size: 25/75rem;
          }
        }
      }
    }
  }
}
</style>