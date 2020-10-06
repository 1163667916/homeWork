<template>
  <div class="item">
    <div class="head">
      <div class="head_avatar">
        <img :src="img_url" alt="">
      </div>
      <div class="head_title">
        {{group_name}}
      </div>
      <div class="head_member">{{group_member}}</div>
    </div>
    <div class="content">{{topic_title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    img_url: String,
    group_name: String,
    group_member: String,
    topic_title: String
  }
}
</script>

<style lang="less" scoped>
.item {
  padding: .15rem 0;
  border-bottom: 1px solid #d8d8d8;
  .head {
    display: flex;
    align-items: center;
    margin-bottom: .1rem;
    .head_avatar {
      width: .5rem;
      img {
        width: 100%;
      }
    }
    .head_title {
      padding-left: .1rem;
      width: 2.1rem;
      box-sizing: border-box;
      color: black;
    }
    .head_member {
      flex: 1;
      text-align: right;
      color: #d8d8d8;
    }
  }
  .content {
    color: #999;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: .14rem;
  }
}
</style>
