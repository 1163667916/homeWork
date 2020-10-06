<template>
  <div class="item" @click="toPage">
    <slot name="defaultImg" v-if="!selectItem"></slot>
    <slot name="activeImg" v-else></slot>
    <span :class="{active: selectItem}">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    mark: String,
    active: String,
    changeTab: Function
  },
  methods: {
    toPage () {
      if (this.$route.path === this.mark) return
      this.changeTab(this.mark)
      this.$router.push(this.mark)
      window.sessionStorage.setItem('curPath', this.mark)
    }
  },
  computed: {
    selectItem () {
      return this.active === this.mark
    }
  }
}
</script>

<style scoped lang="less">
.item {
    flex: 1;
    text-align: center;
    span {
        display: block;
        text-align: center;
        font-size: 14/100rem;
    }
    img {
        width: 35/100rem;
        margin: 0 auto;
    }
    .active {
      color: #42bd56;
    }
}
</style>
