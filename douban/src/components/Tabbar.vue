<template>
  <footer class="footer">
      <Item title="首页" mark="/home" :active="active" :changeTab="changeTab">
        <template #defaultImg>
          <img src="../assets/img/icon/footer/ic_tab_home_normal.png" alt="">
        </template>
        <template #activeImg>
          <img src="../assets/img/icon/footer/ic_tab_home_active.png" alt="">
        </template>
      </Item>
      <Item title="书影音" mark="/audio" :active="active" :changeTab="changeTab">
        <template #defaultImg>
          <img src="../assets/img/icon/footer/ic_tab_subject_normal.png" alt="">
        </template>
        <template #activeImg>
          <img src="../assets/img/icon/footer/ic_tab_subject_active.png" alt="">
        </template>
      </Item>
      <Item title="广播" mark="/broadcast" :active="active" :changeTab="changeTab">
        <template #defaultImg>
          <img src="../assets/img/icon/footer/ic_tab_status_normal.png" alt="">
        </template>
        <template #activeImg>
          <img src="../assets/img/icon/footer/ic_tab_status_active.png" alt="">
        </template>
      </Item>
      <Item title="小组" mark="/group" :active="active" :changeTab="changeTab">
        <template #defaultImg>
          <img src="../assets/img/icon/footer/ic_tab_group_normal.png" alt="">
        </template>
        <template #activeImg>
          <img src="../assets/img/icon/footer/ic_tab_group_active.png" alt="">
        </template>
      </Item>
      <Item title="我的" mark="/mine" :active="active" :changeTab="changeTab">
        <template #defaultImg>
          <img src="../assets/img/icon/footer/ic_tab_profile_normal.png" alt="">
        </template>
        <template #activeImg>
          <img src="../assets/img/icon/footer/ic_tab_profile_active.png" alt="">
        </template>
      </Item>
  </footer>
</template>

<script>
import Item from './Item'
export default {
  mounted () {
    const path = window.sessionStorage.getItem('curPath')
    this.active = path || '/home'
  },
  data () {
    return {
      active: '/home'
    }
  },
  methods: {
    changeTab (val) {
      this.active = val
    }
  },
  computed: {

  },
  components: {
    Item
  }
}
</script>

<style scoped lang="less">
.footer {
  display: flex;
  border-top: 1px solid rgb(233, 217, 217);
  width: 100%;
  max-width: 640px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  z-index: 10;
}
</style>
