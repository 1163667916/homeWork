<template>
  <header class="header" :style="{'background': bgColor}" :class="{borderbottom: bgColor}">
    <div class="left" v-if="showBackIcon">
      <span class="icon-back" @click="goback"></span>
    </div>
    <slot name="center"></slot>
    <div class="header_right">
      <slot name="right"></slot>
    </div>
    <div class="right_icon" v-if="showMoreIcon">
      <span class="icon-more"></span>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    bgColor: String,
    showBackIcon: {
      type: Boolean,
      default: true
    },
    showMoreIcon: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
.header {
  height: 100/75rem;
  background: linear-gradient(to bottom, #ffffff, #dadada);
  border-bottom: 2/75rem solid #d3d2d2;
  position: fixed;
  width: 10rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  h2 {
    text-align: center;
    line-height: 100/75rem;
    font-size: 32/75rem;
    color: black;
  }
  .left {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 80/75rem;
    height: 80/75rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon-back {
    display: inline-block;
    width: 24/75rem;
    height: 39/75rem;
    background: url('../assets/images/icon/sprites.png') -49/75rem 0;
    background-size: 400/75rem auto;
  }
  .header_right {
    position: absolute;
    right: 20/75rem;
    top: 50%;
    transform: translateY(-50%);
    .home-login {
      color: white;
      font-size: 30/75rem;
    }
  }
  .right_icon {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    width: 80/75rem;
    height: 80/75rem;
    justify-content: center;
    align-items: center;
    .icon-more {
      display: inline-block;
      width: 36/75rem;
      height: 6/75rem;
      background: url('../assets/images/icon/shortcut-nav.png');
      background-size: 36/75rem auto;
    }
  }
}
.borderbottom {
    border-bottom: none;
  }
</style>
