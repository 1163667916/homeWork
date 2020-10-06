<template>
  <div class="swiper-container" :class="'swiper-container' + swiper_name">
    <div class="swiper-wrapper">
      <slot name="swiper-slide"></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div :class="['swiper-pagination', swiper_name]" v-if="paginationShow" :style="{textAlign: paginationpositon}"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" :class="[swiper_name + 'left']" v-if="needButton"></div>
    <div class="swiper-button-next" :class="[swiper_name + 'right']" v-if="needButton"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  mounted () {
    this.initSwiper()
  },
  props: {
    // 是否显示分页器
    paginationShow: {
      type: Boolean,
      default: true
    },
    // 指定调用组件名称
    swiper_name: {
      type: String,
      default: 'swiper-pagination'
    },
    // 分页器类型 bullets fraction progressbar
    paginationtype: {
      type: String,
      default: 'bullets'
    },
    // 切换效果  slide fade cube coverflow
    effect: {
      type: String,
      default: 'slide'
    },
    // 受否需要前进后退按钮
    needButton: {
      type: Boolean,
      default: false
    },
    // 分页器位置
    paginationpositon: {
      type: String,
      default: 'center'
    }
  },
  methods: {
    initSwiper () {
      const _this = this
      const swiper = new Swiper('.swiper-container' + this.swiper_name, {
        autoplay: true,
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: '.' + _this.swiper_name,
          type: _this.paginationtype
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.' + this.swiper_name + 'right',
          prevEl: '.' + this.swiper_name + 'left'
        },
        // 切换效果
        effect: this.effect
      })
      this.$swiper = swiper
    }
  }
}
</script>

<style lang="less">
img {
    width: 100%;
}
</style>
