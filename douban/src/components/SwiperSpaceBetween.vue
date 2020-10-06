<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot name="swiper-item"></slot>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  mounted () {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 10,
      observer: true,
      observeParents: true
    })
    this.$swiper = swiper
  }
}
</script>

<style lang="less" scoped>
.swiper-container {
  width: 100%;
  img {
    height: 1.5rem;
  }
}
.swiper-slide {
  span {
    display: block;
  }
  span:nth-of-type(1) {
    font-size: .15rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: .05rem;
    margin-top: .05rem;
    color: black;
  }
  span:nth-of-type(2) {
    text-align: center;
    font-size: .13rem;
    color: #999;
  }
}
</style>
