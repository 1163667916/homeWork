<template>
  <footer class="footer">
    <TabItem path="/home" :active="active">
      <template #defaultIcon>
        <img src="../assets/images/icon/icon-home.png" alt="">
      </template>
      <template #activeIcon>
        <img src="../assets/images/icon/icon-home-active.png" alt="">
      </template>
    </TabItem>

    <TabItem path="/catergry" :active="active">
      <template #defaultIcon>
        <img src="../assets/images/icon/icon-catergry.png" alt="">
      </template>
      <template #activeIcon>
        <img src="../assets/images/icon/icon-catergry-active.png" alt="">
      </template>
    </TabItem>

    <TabItem path="/find" :active="active">
      <template #defaultIcon>
        <img src="../assets/images/icon/icon-find.png" alt="">
      </template>
      <template #activeIcon>
        <img src="../assets/images/icon/icon-find-active.png" alt="">
      </template>
    </TabItem>

    <TabItem path="/cart" :active="active">
      <template #defaultIcon>
        <img src="../assets/images/icon/icon-cart.png" alt="">
      </template>
      <template #activeIcon>
        <img src="../assets/images/icon/icon-cart-active.jpg" alt="">
      </template>
    </TabItem>

    <TabItem :active="active" path="/mine">
      <template #defaultIcon>
        <img src="../assets/images/icon/icon-me.png" alt="">
      </template>
      <template #activeIcon>
        <img src="../assets/images/icon/icon-me-active.png" alt="">
      </template>
    </TabItem>
  </footer>
</template>

<script>
import PubSub from 'pubsub-js'
import TabItem from './TabbarItem'
export default {
  mounted() {
    PubSub.subscribe('TabbarChange', (msg, val) => {
      this.active = val
    })
    this.active = window.sessionStorage.getItem('path') || '/home'
    this.$router.push(this.active)
  },
  data () {
    return {
      active: '/home'
    }
  },
  components: {
    TabItem
  }
}
</script>

<style lang="less" scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 10rem;
  display: flex;
  background: white;
}
</style>
