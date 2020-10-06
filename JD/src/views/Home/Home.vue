<template>
  <div class="home" id="home">
    <Header
    :bgColor="'linear-gradient(to bottom, rgba(0,0,0,.8), rgba(0,0,0,.4), rgba(0,0,0,.1))'"
    :showBackIcon="false"
    :showMoreIcon="false"
    >
      <template #center>
        <div class="home-searchBox">
          <i class="icon-jd"></i>
          <i class="icon-search"></i>
          <input type="text" placeholder="请输入你要查找的内容">
        </div>
      </template>
      <template #right>
        <span class="home-login">登录</span>
      </template>
    </Header>
    <div class="main">
      <!-- 轮播图 -->
      <nut-swiper
        direction="horizontal"
        :loop="true"
        :canDragging="false"
        :paginationVisible="true"
        :autoPlay="3000"
        ref="swiper"
        >
        <div class="nut-swiper-slide gray" >
          <img src="../../assets/images/img/1.jpg" alt="">
        </div>
        <div class="nut-swiper-slide gray_1" >
          <img src="../../assets/images/img/2.jpg" alt="">
        </div>
        <div class="nut-swiper-slide gray" >
          <img src="../../assets/images/img/3.jpg" alt="">
        </div>
        <div class="nut-swiper-slide gray_1" >
          <img src="../../assets/images/img/4.jpg" alt="">
        </div>
        <div class="nut-swiper-slide gray_1" >
          <img src="../../assets/images/img/5.jpg" alt="">
        </div>
        <div class="nut-swiper-slide gray_1" >
          <img src="../../assets/images/img/6.jpg" alt="">
        </div>
        <div class="nut-swiper-slide gray_1" >
          <img src="../../assets/images/img/7.jpg" alt="">
        </div>
        <div class="nut-swiper-slide gray_1" >
          <img src="../../assets/images/img/8.jpg" alt="">
        </div>
      </nut-swiper>

      <!-- 导航 -->
      <nav class="nav">
        <ul>
          <li>
            <img src="../../assets/images/icon/nav0.png" alt="">
            <span>分类查询</span>
          </li>
          <li>
            <img src="../../assets/images/icon/nav1.png" alt="">
            <span>物流查询</span>
          </li>
          <li>
            <img src="../../assets/images/icon/nav2.png" alt="">
            <span>购物车</span>
          </li>
          <li>
            <img src="../../assets/images/icon/nav3.png" alt="">
            <span>我的京东</span>
          </li>
          <li>
            <img src="../../assets/images/icon/nav4.png" alt="">
            <span>京东生鲜</span>
          </li>
          <li>
            <img src="../../assets/images/icon/nav5.png" alt="">
            <span>领券中心</span>
          </li>
          <li>
            <img src="../../assets/images/icon/nav6.png" alt="">
            <span>京东超市</span>
          </li>
          <li>
            <img src="../../assets/images/icon/nav7.png" alt="">
            <span>我的关注</span>
          </li>
        </ul>
      </nav>

      <!-- 福利 -->
      <div class="fuli">
        <img src="../../assets/images/img/fuli.jpg" alt="">
      </div>

      <!-- 秒杀专区 -->
      <div class="seckill">
        <div class="seckill_head">
          <img src="../../assets/images/icon/seckill-icon.png" alt="闹钟">
          <span>掌上秒杀</span>
          <nut-countdown :start-time="Date.now()" :end-time="Date.now() + 19980800"></nut-countdown>
          <span>京选轮番秒</span>
        </div>
        <div class="seckill_body">
          <ul>
            <li v-for="(item, index) in seckillList" :key="index">
              <img :src="item.imgUrl" alt="">
              <span>￥{{item.curPrice}}</span>
              <span>￥{{item.oldPrice}}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 爱生活 -->
      <div class="likelife">
        <img src="../../assets/images/img/aishenghuo.jpg" alt="">
      </div>

      <!-- 生活专区 -->
      <div class="life">
        <div class="life_left">
          <img src="../../assets/images/img/cp1.jpg" alt="">
        </div>
        <div class="life_right">
          <div class="life_right_item">
            <img src="../../assets/images/img/cp2.jpg" alt="">
          </div>
          <div class="life_right_item">
            <img src="../../assets/images/img/cp3.jpg" alt="">
          </div>
        </div>
      </div>

      <!-- 推荐区域 -->
      <div class="recommend">
        <div class="recommend_title">
          <img src="../../assets/images/icon/upload.png" alt="">
          <span>为您推荐</span>
        </div>
        <div class="recommend_content">
          <div class="recommend_item" v-for="(item) in recommendList" :key="item.id">
            <img :src="item.imgUrl" alt="">
            <div class="content">
              <span class="title">{{item.title}}</span>
              <span class="price">￥{{item.price}}</span>
              <div>
                <span>好评率{{item.good}}</span>
                <span>看相似</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部区域 -->
      <div class="home-bottom">
        <div class="caozuo">
          <span>登录</span>
          <span>注册</span>
          <span>反馈</span>
          <span>返回顶部</span>
        </div>
        <div class="client">
          <div class="client_item">
            <i class="bg-1"></i>
            <span>客户端</span>
          </div>
          <div class="client_item">
            <i class="bg-2"></i>
            <span>触屏版</span>
          </div>
          <div class="client_item">
            <i class="bg-3"></i>
            <span>电脑端</span>
          </div>
        </div>
        <p>
          CopyRight &copy; 2004-2018京东JD.com版权所有
        </p>
      </div>
    </div>

    <!-- 返回顶部 -->
    <nut-backtop :bottom="130" el-id="body" :distance="400" :right="20">
    </nut-backtop>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../../components/Header'
export default {
  name: 'Home',
  mounted() {
  },
  data() {
    return {
      seckillList: [
        { imgUrl: require('../../assets/images/img/pro01.jpg'), curPrice: 80, oldPrice: 150 },
        { imgUrl: require('../../assets/images/img/pro02.jpg'), curPrice: 10, oldPrice: 30 },
        { imgUrl: require('../../assets/images/img/pro03.jpg'), curPrice: 40, oldPrice: 100 },
        { imgUrl: require('../../assets/images/img/pro04.jpg'), curPrice: 80, oldPrice: 140 },
        { imgUrl: require('../../assets/images/img/pro05.jpg'), curPrice: 80, oldPrice: 150 },
        { imgUrl: require('../../assets/images/img/pro07.jpg'), curPrice: 80, oldPrice: 150 },
      ],
      recommendList : [
        { id: 1, imgUrl: require('../../assets/images/img/item01.jpg'), title: '晋腾家用不锈钢手动压面机手摇多功能面条机水果榨....', price: 99, good: '94%' },
        { id: 2, imgUrl: require('../../assets/images/img/item02.jpg'), title: '品柜 连衣裙长裙长袖2018春装新款韩式韩版时尚女装修身显瘦....', price: 198, good: '99%' },
        { id: 3, imgUrl: require('../../assets/images/img/item03.jpg'), title: 'LG 29WK600-w 29英寸 21:9 超宽屏 FHD FreeSyn....', price: 1988.0, good: '99%' },
        { id: 4, imgUrl: require('../../assets/images/img/item04.jpg'), title: '劲仔小鱼 鱼干鱼仔 零食 香辣味 15g*20包/盒....', price: 23.80, good: '99%' },
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

<style lang="less" scope="this api replaced by slot-scope in 2.5.0+">
.main {
  margin-bottom: 130/75rem;
}
.home{
  .home-searchBox {
    background: white;
    width: 630/75rem;
    border-radius: 30/75rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 20/75rem;
    display: flex;
    align-items: center;
    i {
      display: inline-block;
    }
    .icon-jd {
      width: 40/75rem;
      height: 30/75rem;
      background: url('../../assets/images/icon/sprites.png');
      background-size: 400/75rem auto;
      margin-left: 25/75rem;
    }
    .icon-search {
      width: 37/75rem;
      height: 36/75rem;
      background: url('../../assets/images/icon/sprites.png') -120/75rem -220/75rem;
      background-size: 400/75rem auto;
      margin-left: 25/75rem;
      margin-right: 20/75rem;
    }
    input {
      height: 60/75rem;
      font-size: 30/75rem;
      width: 450/75rem;
    }
  }
  .nut-swiper {
    height: 350/75rem;
    img {
      width: 100%;
    }
  }
  .nav {
    background: white;
    padding: 30/75rem 20/75rem;
    border-bottom: 1px solid #c0c0c0;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        text-align: center;
        margin-bottom: 20/75rem;
        img {
          margin: 0 auto;
          margin-bottom: 10/75rem;
          width: 80/75rem;
        }
      }
    }
  }
  .fuli {
    margin-top: 10/75rem;
    img {
      width: 100%;
    }
  }
  .seckill {
    margin: 10/75rem;
    padding: 10/75rem;
    border: 2/75rem solid #d6d6d6;
    background: white;
    overflow: hidden;
    .seckill_head {
      position: relative;
      display: flex;
      align-items: center;
      margin-bottom: 20/75rem;
      &>span:nth-of-type(1) {
        color: #df505c;
        font-size: 30/75rem;
        margin-left: 20/75rem;
        margin-right: 10/75rem;
      }
      &>span:last-of-type {
        position: absolute;
        right: 0;
        color: #f23030;
        font-size: 25/75rem;
      }
      .nut-cd-timer {
        font-size: 30/75rem;
        span {
          margin: 0 5/75rem;
          color: black;
        }
      }
    }
    .seckill_body {
      overflow-x: scroll;
      ul {
        overflow: hidden;
        width: 6*190/75rem;
        li {
          float: left;
          margin-right: 15/75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 170/75rem;
          }
          &:last-of-type {
            margin-right: 0;
          }
          span {
            display: block;
            &:first-of-type {
              color: #d8505c;
              font-weight: bold;
              font-size: 30/75rem;
              margin-bottom: 10/75rem;
            }
            &:last-of-type {
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
  .likelife {
    img {
      width: 10rem;
    }
  }
  .life {
    display: flex;
    margin: 10/75rem;
    background: white;
    border: 2/75rem solid #d6d6d6;
    &>div {
      flex: 1;
      img {
        width: 100%;
      }
    }
    &>div:first-of-type {
      border-right: 2/75rem solid #c0c0c0;
    }
    .life_right {
      div {
        overflow: hidden;
      }
      div:first-of-type {
        border-bottom: 2/75rem solid #c0c0c0;
      }
    }
  }
  .recommend {
    margin-top: 50/75rem;
    .recommend_title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30/75rem;
      img {
        width: 35/75rem;
        margin-right: 25/75rem;
      }
    }
    .recommend_content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .recommend_item {
        width: 49%;
        border: 2/75rem solid #c0c0c0;
        margin-bottom: 20/75rem;
        img {
          width: 100%;
        }
        .content {
          padding: 10/75rem;
          div {
            display: flex;
            justify-content: space-between;
            span {
              font-size: 24/75rem;
              color: #999999;
            }
            span:last-of-type {
              border: 2/75rem solid #bfbfbf;
              border-radius: 10/75rem;
              padding: 5/75rem 10/75rem;
              color: #686868;
            }
          }
        }
        span {
          display: block;
        }
        .title {
          font-size: 25/75rem;
          letter-spacing: 3/75rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .price {
          color: #f23030;
          font-size: 28/75rem;
          font-weight: bold;
          padding: 10/75rem 0;
        }
      }
    }
  }
  .home-bottom {
    border-top: 2/75rem solid #bfbfbf;
    .caozuo {
      background: white;
      display: flex;
      padding: 30/75rem 10/75rem;
      border-bottom: 2/75rem solid #bfbfbf;
      span {
        flex: 1;
        text-align: center;
        font-size: 25/75rem;
        color: #848689;
        position: relative;
        &:after {
          content: '';
          position: absolute;
          width: 2/75rem;
          height: 25/75rem;
          background: #848689;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
      span:last-of-type {
        &:after {
          display: none;
        }
      }
    }
    .client {
      display: flex;
      padding: 20/75rem 0;
      border-bottom: 2/75rem solid #bfbfbf;
      .client_item {
        flex: 1;
        text-align: center;
        i {
          display: inline-block;
          width: 65/75rem;
          height: 65/75rem;
          background: url('../../assets/images/img/sprites.png');
          background-size: 400/75rem auto;
        }
        span {
          display: block;
          font-size: 25/75rem;
          color: #848689;
        }
        .bg-1 {
          background-position: -240/75rem -140/75rem;
        }
        .bg-2 {
          background-position: -80/75rem -140/75rem;
        }
        .bg-3 {
          background-position: -160/75rem -140/75rem;
        }
      }
    }
    & > p {
      padding-top: 10/75rem;
      text-align: center;
      color: #a18696;
      font-size: 24/75rem;
    }
  }
}
</style>
