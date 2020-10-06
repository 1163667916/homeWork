<template>
  <div class="noteItem">
    <div class="avatar">
      <span>
        <i class="iconfont icon-douban"></i>
      </span>
    </div>
    <div class="right">
      <div class="title">
        <span>{{title}}</span>
        <span>写了日记</span>
        <p>{{time}}</p>
      </div>
      <div class="content">
        {{topic_title}}
      </div>
      <div class="fun">
        <span><i class="iconfont icon-zan"></i>{{up}}</span>
        <span><i class="iconfont icon--chat-"></i>{{comment}}</span>
        <span><i class="iconfont icon-fenxiang"></i>{{transmit}}</span>
        <span class="more"><i class="iconfont icon-gengduoAPP"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'time', 'topic_title', 'up', 'comment', 'transmit']
}
</script>

<style lang="less" scoped>
@import url('../../assets/iconFont/iconfont.css');
.noteItem {
  display: flex;
  padding: .15rem .2rem;
  .avatar {
    width: 30%;
    span {
      display: block;
      width: .45rem;
      height: .45rem;
      background: linear-gradient(to bottom, #59e960,#03960c);
      border-radius: 50%;
      text-align: center;
      line-height: .45rem;
      i {
        font-size: .35rem;
        color: white;
      }
    }
  }
  .right {
    padding-left: .05rem;
    .title {
      span:nth-of-type(1) {
        font-weight: bold;
      }
      span:nth-of-type(2) {
        color: #b8b8b8;
      }
      p {
        color: #b8b8b8;
        font-size: .14rem;
        margin-top: .05rem;
      }
    }
    .content {
      background: #f0efef;
      padding: .1rem;
      border-radius: .05rem;
    }
    .fun {
      margin-top: .1rem;
      span {
        margin-right: .2rem;
        color: #b8b8b8;
        i {
          margin-right: .1rem;
        }
      }
      .more {
        float: right;
        margin-right: 0;
        font-weight: bold;
        i {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
