<template>
  <div class="Main">
    <!-- 头部地址栏 -->
    <div class="header">
      <i class="iconfont icon-search"></i>
      <div class="address">虹口区中国建设银行...</div>
      <div class="sign">
        <router-link class="link" to="/login">登录</router-link>
        <span class="link">|</span>
        <router-link class="link" to="/register">注册</router-link>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="tabber">
      <elm-tabbar></elm-tabbar>
    </div>
  </div>
</template>

<script>
import elmTabbar from "components/elm-tabbar.vue";

export default {
  data() {
    return {};
  },
  components: {
    elmTabbar,
  },
};
</script>

<style lang="scss" scoped>
.Main {
  // 头部地址栏
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #3190e8;
    padding: 10px;

    .icon-search {
      font-size: 20px;
      color: #fff;
    }

    .address {
      font-size: 20px;
      color: #fff;
    }

    .link {
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>