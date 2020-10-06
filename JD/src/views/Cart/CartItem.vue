<template>
  <div class="item">
    <nut-row>
      <span>{{tip}}</span>
    </nut-row>
    <nut-row>
        <nut-col :span="2">
        <nut-checkbox :value="checked" @change="checkChange"></nut-checkbox>
        </nut-col>
        <nut-col :span="8">
        <div class="imgbox">
            <img :src="imgUrl" alt="">
        </div>
        </nut-col>
        <nut-col :span="14">
          <div class="content">
            <h2>{{title}}</h2>
            <span class="price">{{price | priceFilter | yuan}}</span>
            <nut-stepper :simple="false" :value="count" :min="1" @add="changeNum(true)" @reduce="changeNum(false)"></nut-stepper>
            <div class="delete" @click="showDialog"></div>
          </div>
        </nut-col>
    </nut-row>
  </div>
  
</template>

<script>
export default {
  mounted() {
    this.count = this.num
  },
  props: {
    id: Number,
    tip: String,
    title: String,
    imgUrl: String,
    price: Number,
    num: Number,
    checked: Boolean,
    changCartList: Function,
    delGood: Function,
    changeGoodNum: Function
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    checkChange (val) {
      this.changCartList(this.id, val)
    },
    showDialog () {
      this.$dialog({
        title: "确定删除此订单？",
        onOkBtn: () => {
          this.delThis()
          this.$dialog.closed()
        },
      })
    },
    delThis () {
      this.delGood(this.id)
    },
    changeNum (flag) {
      if (flag) {
        this.count += 1
        this.changeGoodNum(this.id, this.count)
      } else {
        this.count -= 1
        this.changeGoodNum(this.id, this.count)
      }
    }
  },
  filters: {
    priceFilter (val) {
      return val.toFixed(2)
    },
    yuan (val) {
      return '￥' + val
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  margin-bottom: 20/75rem;
}
.nut-row {
  background: white;
}
.nut-row:first-of-type {
  padding: 20/75rem 0 20/75rem 40/75rem;
  border-bottom: 2/75rem solid #e0e0e0;
  font-size: 25/75rem;
  color: #a59393;
}
.nut-row:last-of-type {
  padding: 20/75rem 20/75rem;
}
.imgbox {
  width: 100%;
  height: 100%;
  img {
    width: 200/75rem;
    margin: 0 auto;
  }
}
.nut-col:last-of-type {
  height: 150/75rem;
  box-sizing: border-box;
}
.content {
  position: relative;
  h2 {
    font-size: 30/75rem;
    color: black;
  }
  .price {
    font-size: 30/75rem;
    display: block;
    padding: 10/75rem 0;
  }
}
.delete {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50/75rem;
  height: 58/75rem;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 14/75rem;
    background: url('../../assets/images/img/delete_up.png');
    background-size: 100% auto;
    top: 0;
  }
  &:after {
    content: '';
    position: absolute;
    width: 45/75rem;
    height: 55/75rem;
    background: url('../../assets/images/img/delete_down.png') no-repeat;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background-size: 45/75rem auto;
  }
}
.nut-stepper {
  width: 200/75rem;
  height: 50/75rem;
  .nut-stepper-fake {
    font-size: 30/75rem;
  }
}
</style>