<template>
  <div class="TV">
    <h2>最新电视<span>更多</span></h2>
    <div class="box">
      <ul :style="{'width': (newTV.length * 120 + (newTV.length - 1) * 15) / 100 + 'rem'}">
        <li v-for="(item, index) in newTV" :key="index">
          <img :src="item.cover" alt="">
          <span>{{item.title}}</span>
          <span>评分：{{item.rate}}</span>
          <el-rate
            :value="item.rate*1/2"
            disabled
            text-color="#ff9900"
            :max="5">
          </el-rate>
        </li>
      </ul>
    </div>

    <h2>过往电视<span>更多</span></h2>
    <div class="box">
      <ul :style="{'width': (oldTV.length * 120 + (oldTV.length - 1) * 15) / 100 + 'rem'}">
        <li v-for="(item, index) in oldTV" :key="index">
          <img :src="item.cover" alt="">
          <span>{{item.title}}</span>
          <span>{{item.rate}}</span>
          <el-rate
            :value="item.rate*1/2"
            disabled
            text-color="#ff9900"
            :max="5">
          </el-rate>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.getTVlist()
  },
  data () {
    return {
      TVlist: []
    }
  },
  methods: {
    async getTVlist () {
      const { data: res } = await this.$http.get('../../../../static/data/tv.json')
      console.log(res)
      this.TVlist = res.subjects
    }
  },
  computed: {
    newTV () {
      return this.TVlist.filter(item => item.is_new)
    },
    oldTV () {
      return this.TVlist.filter(item => !item.is_new)
    }
  },
}
</script>

<style lang="less" scoped>
.TV {
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
