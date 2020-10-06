<template>
  <div>
    <Header>
      <template #title>
        <h2>
          书影音
        </h2>
      </template>
      <template #icon1>
        <img src="../../assets/img/icon/ic_actionbar_search_icon.png" alt="">
      </template>
      <template #icon2>
        <img src="../../assets/img/icon/ic_chat_green.png" alt="">
      </template>
    </Header>
    <div class="main">
      <nav class="nav">
        <router-link
        :to="item.path"
        v-for="(item,index) in navBar"
        :class="{avtive: activeIndex==index}"
        :key="item.id"
        @click.native="changIndex(index)"
        >{{item.title}}</router-link>
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
export default {
  data () {
    return {
      navBar: [
        { id: 1, title: '电影', path: '/audio/movie' },
        { id: 2, title: '读书', path: '/audio/read' },
        { id: 3, title: '电视', path: '/audio/tv' },
        { id: 4, title: '同城', path: '/audio/city' },
        { id: 5, title: '音乐', path: '/audio/music' }
      ],
      activeIndex: 0
    }
  },
  methods: {
    changIndex (index) {
      this.activeIndex = index
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="less">
.nav {
  display: flex;
  height: .4rem;
  line-height: .4rem;
  background: white;

  a {
    flex: 1;
    text-align: center;
    border-bottom: 1px solid rgb(233, 217, 217);
  }
  .avtive {
    background: #07d614;
    color: white;
  }
}
</style>
