<template>
  <van-tabbar v-model="active" class="elm-tabbar" active-color="#000">
    <van-tabbar-item to="/main">
      <span>外卖</span>
      <template #icon="props">
        <van-icon class="iconfont icon-logo" :class="props.active ? icon.active : ''"></van-icon>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/search">
      <span>搜索</span>
      <template #icon="props">
        <van-icon class="iconfont icon-search" :class="props.active ? icon.active : ''"></van-icon>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/orders">
      <span>订单</span>
      <template #icon="props">
        <van-icon class="iconfont icon-order" :class="props.active ? icon.active : ''"></van-icon>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/profile">
      <span>我的</span>
      <template #icon="props">
        <van-icon class="iconfont icon-user" :class="props.active ? icon.active : ''"></van-icon>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon: {
        active: "active",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.elm-tabbar {
  border-top: 1px solid #ccc;

  .iconfont {
    font-size: 20px;
    line-height: 24px;
  }

  .iconfont.icon-logo {
    font-size: 32px;
    line-height: 22px;
  }
  .active {
    color: #3190e8;
  }
}
</style>