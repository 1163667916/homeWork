<template>
  <div>
    <Header>
      <template #center>
        <h2>购物车</h2>
      </template>
    </Header>
    <div class="main">
      <div class="safe">
        <span><i></i>您正在安全购物环境中，请放心购物</span>
      </div>
      <CartItem v-for="item in cartList" :key="item.id"
       :id="item.id"
       :tip="item.tip"
       :title="item.title"
       :imgUrl="item.imgUrl"
       :price="item.price"
       :num="item.num"
       :checked="item.checked"
       :changCartList="changCartList"
       :delGood="delGood"
       :changeGoodNum="changeGoodNum"
       >
      </CartItem>
    </div>
    <div class="total">
      <div class="checkbox">
        <nut-checkbox :value="checkAllStatus" @change="checkAll">全选</nut-checkbox>
      </div>
      <div class="heji">
        <span>合计：{{total | totalFilter(1)}}</span>
        <span>总额：￥{{total | totalFilter(1)}}&nbsp;&nbsp;&nbsp;返现：￥0.0</span>
      </div>
      <div class="jiesuan">
        <span>去结算：</span>
        <span>{{total | totalFilter(1, true)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import CartItem from './CartItem'
export default {
  data () {
    return {
      cartList: [
        { id: 1, tip: '您享受满79元免运费服务', title: '【豪华套装版】一加手机5T 6GB+64GB 星辰黑 高性能全...', imgUrl: require('../../assets/images/img/detail01.jpg'), price: 3000, num: 2, checked: false},
        { id: 2, tip: '商品用券前满99元(20kg内)免运费', title: '清风(APP)卷纸 原木纯品金装系列 4层160克24卷(整箱销售)', imgUrl: require('../../assets/images/img/detail02.jpg'), price: 100, num: 3, checked: true},
        { id: 3, tip: '商品用券前满99元(20kg内)免运费', title: '广西 青芒 芒果 2.5kg装 单果重约250g以上 新鲜水果', imgUrl: require('../../assets/images/img/detail03.jpg'), price: 29.9, num: 1, checked: false},
        { id: 4, tip: '商品用券前满99元(20kg内)免运费', title: '包邮 Vue.js实战+ES6标准入门第三版 2本 Vue.js前...', imgUrl: require('../../assets/images/img/detail04.jpg'), price: 49, num: 1, checked: false},
      ]
    }
  },
  methods: {
    changCartList (id, status) {
      this.cartList.some(item => {
        if (item.id === id) {
          item.checked = status
          return
        }
      })
    },
    checkAll (val) {
      this.cartList.forEach(item => val ? item.checked = true : item.checked = false)
    },
    delGood (id) {
      const index = this.cartList.findIndex(item => item.id === id)
      this.cartList.splice(index, 1)
    },
    changeGoodNum (id, num) {
      this.cartList.some(item => {
        if (item.id === id) {
          item.num = num
        }
      })
    }
  },
  computed: {
    total () {
      return this.cartList.reduce((total, item) => total += item.checked ? (item.price * item.num) : 0, 0)
    },
    checkAllStatus () {
      return this.cartList.filter(item => item.checked).length === this.cartList.length
    }
  },
  filters: {
    totalFilter (val, num, flag) {
      return !flag ? '￥' + val.toFixed(num) : val.toFixed(num)
    }
  },
  components: {
    Header,
    CartItem
  }
}
</script>

<style scoped lang="less">
.main {
  padding-top: 100/75rem;
  .safe {
    background: white;
    padding: 20/75rem 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20/75rem;
    span {
      font-size: 27/75rem;
    }
    i {
      display: inline-block;
      vertical-align: middle;
      background: url('../../assets/images/img/safe_icon.png');
      width: 36/75rem;
      height: 36/75rem;
      background-size: 36/75rem auto;
      margin-right: 20/75rem;
    }
  }
}
.total {
  background: rgba(0,0,0,.8);
  color: white;
  height: 120/75rem;
  display: flex;
  position: fixed;
  width: 10rem;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  .checkbox {
    width: 150/75rem;
    line-height: 120/75rem;
    padding-left: 15/75rem;
  }
  .heji {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    span:first-of-type {
      font-size: 30/75rem;
      margin-bottom: 10/75rem;
    }
    span:last-of-type {
      font-size: 25/75rem;
    }
  }
  .jiesuan {
    background: #d8505c;
    width: 250/75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-size: 35/75rem;
    }
    span:last-of-type {
      font-size: 25/75rem;
    }
  }
}
</style>