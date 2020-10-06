<template>
  <div>
    <Header color="#48bd5a" :borderBottom="true">
      <template #title>
        <div class="search-box">
          <img src="../../assets/img/icon/ic_group_search_small.png" alt="">
          <input type="text" placeholder="影视 图书 唱片 小组等">
          <img src="../../assets/img/icon/ic_scan_gray.png" alt="">
        </div>
      </template>
      <template #icon2>
        <img src="../../assets/img/icon/ic_chat_white.png" alt="">
      </template>
    </Header>
    <div class="main">
      <Swiper paginationpositon="right">
        <template #swiper-slide>
          <div class="swiper-slide">
            <img src="../../assets/img/banner/01.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/banner/02.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/banner/03.jpg" alt="">
          </div>
        </template>
      </Swiper>
      <div class="newsList">
        <NewsList v-for="(item) in newslist" :key="item.id">
          <template #content>
            <div class="item_content">
              <span class="item_content_title">{{item.title}}</span>
              <span class="item_content_desc">{{item.target.desc}}</span>
              <span class="item_content_author">作者：{{item.target.author.name}}</span>
            </div>
            <div class="item_img">
              <img :src="item.target.cover_url" alt="">
            </div>
          </template>
        </NewsList>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import Swiper from '../../components/Swiper'
import NewsList from '../../components/NewsList'
export default {
  mounted () {
    this.getNewList()
  },
  data () {
    return {
      newslist: []
    }
  },
  methods: {
    async getNewList () {
      const { data: res } = await this.$http.get('../../../static/data/homeData.json')
      console.log(res.recommend_feeds)
      this.newslist = res.recommend_feeds
    }
  },
  components: {
    Header,
    Swiper,
    NewsList
  }
}
</script>

<style lang="less" scoped>

</style>
