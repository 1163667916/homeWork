<template>
  <div class="footer-item" @click="changeTab">
    <template v-if="!showIcon">
      <slot name="defaultIcon"></slot>
    </template>
    <template v-else>
      <slot name="activeIcon"></slot>
    </template>
    
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  props: {
    active: String,
    path: String
  },
  computed: {
    showIcon () {
      return this.active === this.path
    }
  },
  methods: {
    changeTab () {
      PubSub.publish('TabbarChange', this.path)
      this.$router.push(this.path)
      window.sessionStorage.setItem('path', this.path)
    }
  },
}
</script>

<style lang="less" scoped>
.footer-item {
  flex: 1;
  img {
    width: 100%;
  }
}
</style>
