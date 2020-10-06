<template>
  <div id="app">
    <router-view/>
    <Tabbar v-if="isShow"></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
export default {
  mounted() {
    console.log(this.$route)
  },
  components: {
    Tabbar
  },
  computed: {
    isShow () {
      return this.$route.path !== '/cart'
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0 auto!important;
  max-width: 10rem;
}
</style>
