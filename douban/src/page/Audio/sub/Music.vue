<template>
  <div>
    <div class="list" v-for="(item1, index) in musicList" :key="index">
      <h2>{{item1.title}}<span>更多</span></h2>
      <div class="box">
        <ul :style="{'width': (item1.group_list.length * 120 + (item1.group_list.length - 1) * 15) / 100 + 'rem'}">
          <li v-for="(item2, index) in item1.group_list" :key="index">
            <img :src="item2.cover_url" alt="">
            <span>{{item2.title}}</span>
            <span>评分：{{item2.score}}</span>
            <el-rate
              :value="item2.score*1/2"
              disabled
              text-color="#ff9900"
              :max="5">
            </el-rate>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.getMusicList()
  },
  data () {
    return {
      musicList: []
    }
  },
  methods: {
    async getMusicList () {
      const { data: res } = await this.$http.get('../../../../static/data/music.json')
      this.musicList = res.group
    }
  },
}
</script>

<style lang="less" scoped>
.list {
  padding: 0 .15rem;
  padding-bottom: .2rem;
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
      overflow: hidden;
      li {
        float: left;
        width: 1.2rem;
        margin-right: .15rem;
        img {
          width: 100%;
          height: 1.7rem;
        }
        &:last-of-type {
          margin-right: 0;
        }
        span {
          color: black;
          font-size: .16rem;
          display: block;
          text-align: center;
          margin-top: .1rem;
        }
        span:nth-of-type(1) {
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
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
