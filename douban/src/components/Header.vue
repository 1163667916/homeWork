<template>
  <header class="header" :style="bgColor">
    <slot name="title"></slot>
    <div class="icon-group">
      <span>
        <slot name="icon1"></slot>
      </span>
      <span>
        <slot name="icon2"></slot>
      </span>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    color: String,
    borderBottom: Boolean
  },
  data () {
    return {
      // 根据传过来的 color 属性对header背景色设置
      bgColor: {
        backgroundColor: this.color,
        'border-bottom-color': this.borderBottom ? 'transparent' : 'rgb(233, 217, 217)'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 45/100rem;
  background: #f7f7f7;
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  max-width: 640px;
  border-bottom: 1px solid rgb(233, 217, 217);
  h2 {
    line-height: 45/100rem;
    text-align: center;
    font-size: 18/100rem;
    font-family: '微软雅黑';
    color: #7b7b7b;
  }
  .icon-group {
    position: absolute;
    height: 25/100rem;
    right: 10/100rem;
    top: 50%;
    transform: translateY(-50%);
    span:nth-of-type(2) {
      margin-left: 15px;
    }
    img {
      width: 25/100rem;
      height: 25/100rem;
      display: inline-block;
    }
  }
  .search-box {
    background: white;
    width: 3.2rem;
    margin-left: 10/100rem;
    height: 30/100rem;
    line-height: 0.3rem;
    border-radius: .05rem;
    transform: translateY(25%);
    input {
      height: .25rem;
      width: 2.2rem;
      font-size: .16rem;
    }
    img {
      width: 23/100rem;
      display: inline-block;
      vertical-align: middle;
    }
    img:nth-of-type(1) {
      margin-left: .05rem;
      margin-right: .1rem;
    }
    img:nth-of-type(2) {
      position: absolute;
      right: .15rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
