<template>
  <div>
    <Header>
      <template #title>
        <h2>
          广播
        </h2>
      </template>
      <template #icon1>
        <img src="../../assets/img/icon/ic_status_search_user.png" alt="">
      </template>
      <template #icon2>
        <img src="../../assets/img/icon/ic_chat_green.png" alt="">
      </template>
    </Header>
    <div class="main">
      <section class="login">
        <span @click="toLogin">
          <img src="../../assets/img/icon/user_normal.jpg" alt="">
          <span>登录发广播</span>
        </span>
      </section>
      <BroadcastItem v-for="(item,index) in broadcast"
      :key="index"
      :title="item.title"
      :time="item.time"
      :topic_title="item.topic_title"
      :up="item.up"
      :comment="item.comment"
      :transmit="item.transmit"
      >
      </BroadcastItem>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import BroadcastItem from './BroadcastItem'
export default {
  created () {
    this.getBroadcast()
  },
  data () {
    return {
      broadcast: []
    }
  },
  methods: {
    async getBroadcast () {
      const { data: res } = await this.$http.get('../../../static/data/radio.json')
      console.log(res)
      this.broadcast = res.radio_list
    },
    toLogin () {
      this.$router.push('/login')
    }
  },
  components: {
    Header,
    BroadcastItem
  }
}
</script>

<style lang="less" scoped>
.login {
  padding: .1rem 0 .1rem .2rem;
  border-bottom: 1px solid #d8d8d8;
  &>span {
    display: flex;
    align-items: center;
    font-size: .17rem;
    color: #999;
    img {
      border-radius: 50%;
      width: .48rem;
    }
    span {
      margin-left: .15rem;
    }
  }
}
</style>
