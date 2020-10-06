<template>
  <div>
    <Header>
      <template #title>
        <h2>
          小组
        </h2>
      </template>
      <template #icon1>
        <img src="../../assets/img/icon/ic_actionbar_search_icon.png" alt="">
      </template>
      <template #icon2>
        <img src="../../assets/img/icon/ic_chat_green.png" alt="">
      </template>
    </Header>

  <!-- 主体部分 -->
    <div class="main">
      <div class="list" v-for="(list) in groupList" :key="list.title">
        <h2>{{list.title}}</h2>
        <GroupItem v-for="(item,index) in list.group_list"
          :key="index"
          :img_url="item.img_url"
          :group_name="item.group_name"
          :group_member="item.group_member"
          :topic_title="item.topic_title" />
        <span class="more">更多相关小组</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import GroupItem from './GroupItem'
export default {
  created () {
    this.getGroupData()
  },
  data () {
    return {
      groupList: []
    }
  },
  components: {
    Header,
    GroupItem
  },
  methods: {
    async getGroupData () {
      const { data: res } = await this.$http.get('../../../static/data/groupData.json')
      this.groupList = res.group
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  padding: .2rem;
  h2 {
    font-size: .2rem;
    font-weight: bold;
  }
  .more {
    display: block;
    text-align: center;
    color: #43bd57;
    margin-top: .15rem;
    font-weight: bold;
  }
}
</style>
