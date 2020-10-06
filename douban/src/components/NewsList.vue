<template>
  <div class="item">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  padding: .15rem .15rem;
  border-bottom: 1px solid #f4f4f4;
  &:last-of-type {
    border-bottom: none;
  }
  .item_content {
    width: 70%;
    padding-right: .1rem;
    span {
      display: block;
    }
    .item_content_title {
      font-weight: 600;
      margin-bottom: .05rem;
    }
    .item_content_desc {
      font-size: .14rem;
      color: #b3aeaf;
      margin-bottom: .05rem;
    }
    .item_content_author {
      color: #999;
      font-size: .13rem;
    }
  }
  .item_img {
      width: 30%;
      img {
          width: 100%;
      }
  }
}
</style>
