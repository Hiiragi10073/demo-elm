<template>
  <div class="Main">
    <!-- 头部地址栏 -->
    <div class="header">
      <router-link to="/search">
        <i class="iconfont icon-search"></i>
      </router-link>
      <router-link to="/address">
        <div class="address">虹口区中国建设银行...</div>
      </router-link>
      <div class="sign">
        <router-link class="link" to="/login">登录</router-link>
        <span class="link">|</span>
        <router-link class="link" to="/register">注册</router-link>
      </div>
    </div>
    <!-- 食品种类分类 -->
    <div class="categorys">
      <van-swipe duration="300" @change="swipeChange">
        <van-swipe-item>
          <van-grid>
            <van-grid-item
              v-for="item in categorys.list1"
              :key="item.id"
              @click="toDetail(item.id)"
            >
              <img class="category-img" :src="item.image_url | addBaseURL" />
              <span>{{item.title}}</span>
            </van-grid-item>
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid>
            <van-grid-item
              v-for="item in categorys.list2"
              :key="item.id"
              @click="toDetail(item.id)"
            >
              <img class="category-img" :src="item.image_url | addBaseURL" />
              <span>{{item.title}}</span>
            </van-grid-item>
          </van-grid>
        </van-swipe-item>
        <!-- 自定义指示器 -->
        <template #indicator>
          <div class="custom-indicator">
            <div class="indicator" :class="{active: swipeIndex === 0}"></div>
            <div class="indicator" :class="{active: swipeIndex === 1}"></div>
          </div>
        </template>
      </van-swipe>
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
    return {
      categorys: {
        list1: [],
        list2: [],
      },
      swipeIndex: 0,
    };
  },
  components: {
    elmTabbar,
  },
  methods: {
    async getCategorys() {
      const res = await this.$axios.get("v2/index_entry");
      const { status, data } = res;

      if (status === 200) {
        this.categorys.list1 = data.filter((item, index) => index < 8);
        this.categorys.list2 = data.filter((item, index) => index >= 8);
      }
    },

    // 轮播图改变
    swipeChange(index) {
      this.swipeIndex = index;
    },

    // 去往分类详情
    toDetail(id) {
      console.log(id);
    },
  },
  created() {
    this.getCategorys();
  },
};
</script>

<style lang="scss" scoped>
.Main {
  // 头部地址栏
  padding: 50px 0;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
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

  // 食品分类
  .categorys {
    background-color: #fff;

    .category-img {
      width: 40px;
      height: 40px;
    }

    // 自定义轮播图按钮
    .custom-indicator {
      display: flex;
      justify-content: space-between;

      width: 40px;
      margin: 0 auto 10px;

      .indicator {
        width: 13px;
        height: 13px;
        background-color: #ccc;
        border-radius: 50%;

        &.active {
          background-color: #3190e8;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.Main {
  .categorys .van-grid .van-grid-item .van-hairline::after {
    border: 0;
  }
}
</style>