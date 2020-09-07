<template>
  <div class="header">
    <van-nav-bar
      :title="title"
      :right-text="rightText"
      left-arrow
      @click-left="$router.go(-1)"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  props: {
    onClickRight: {
      type: Function,
      default() {
        this.$router.go(-1);
      },
    },
    rightText: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "标题",
    },
  },
};
</script>

<style lang="scss">
.header {
  .van-nav-bar {
    background-color: #3190e8;

    .van-icon-arrow-left,
    .van-nav-bar__title,
    .van-nav-bar__text {
      color: #fff;
    }

    .van-nav-bar__title {
      font-weight: bold;
    }
  }
}
</style>