<template>
  <div class="read">
    <h2>最受关注图书 | 虚构类<span>更多</span></h2>
    <div class="box">
      <ul>
        <li v-for="(item, index) in readList" :key="index">
          <img :src="item.cover_url" alt="">
          <span>{{item.author}}</span>
          <span>评分：{{item.score}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.getReadList()
  },
  data () {
    return {
      readList: []
    }
  },
  methods: {
    async getReadList () {
      const { data: res } = await this.$http.get('../../../../static/data/read.json')
      this.readList = res.recommend_one
      console.log(this.readList)
    } 
  }
}
</script>

<style lang="less" scoped>
.read {
  padding: 0 .15rem;
  h2 {
    font-size: .18rem;
    padding: .1rem 0;
    span {
      float: right;
      font-size: .15rem;
      color: #42bd56;
    }
  }
  .box {
    overflow-x: scroll;
    ul {
      width: 1.2*6+.15*6rem;
      overflow: hidden;
      li {
        float: left;
        width: 1.2rem;
        margin-right: .15rem;
        span {
          color: black;
          font-size: .16rem;
          display: block;
          text-align: center;
          margin-top: .1rem;
        }
        span:nth-of-type(2) {
          font-size: .13rem;
          margin-top: .05rem;
          color: #999;
        }
      }
    }
  }
}
</style>
