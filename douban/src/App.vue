<template>
  <div id="app">
    <router-view/>
    <Tabbar v-if="isShowTabbar"/>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  data () {
    return {
      isShowTabbar: true
    }
  },
  name: 'App',
  watch: {
    $route (to) {
      this.isShowTabbar = to.path === '/login' ? false : true
    }
  },
  components: {
    Tabbar
  }
}
</script>

<style lang="less">
@import url('./assets/global.less');
@import url('./assets/css/common.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main {
  margin-top: .45rem;
  margin-bottom: .54rem;
}
</style>
