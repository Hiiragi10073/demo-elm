<template>
  <div class="Main">
    <!-- 头部地址栏 -->
    <div class="header">
      <router-link to="/search">
        <i class="iconfont icon-search"></i>
      </router-link>
      <router-link to="/address" class="address">
        <div>{{ $store.getters.address }}</div>
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
              @click="toCategoryDetail(item.id)"
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
              @click="toCategoryDetail(item.id)"
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
    <!-- 附近商家 -->
    <div class="shop-list">
      <div class="title">
        <i class="iconfont icon-shangdian"></i>
        <span>附近商家</span>
      </div>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="500"
      >
        <elm-shop-item v-for="item in shopList" :key="item.id" :data="item"></elm-shop-item>
      </van-list>
    </div>
    <!-- 导航栏 -->
    <div class="tabber">
      <elm-tabbar></elm-tabbar>
    </div>
  </div>
</template>

<script>
import elmTabbar from "components/elm-tabbar.vue";
import elmShopItem from "components/elm-shop-item.vue";

import { getCategory, getShopList } from "api/api.js";

export default {
  data() {
    return {
      categorys: {
        list1: [],
        list2: [],
      },
      swipeIndex: 0,
      // 商店列表
      shopList: [],
      loading: false,
      finished: false,
      config: {
        latitude: "",
        longitude: "",
        offset: 0,
        limit: 20,
      },
    };
  },
  components: {
    elmTabbar,
    elmShopItem,
  },
  methods: {
    // 获取食品分类
    async getCategorys() {
      const data = await getCategory();

      if (data) {
        this.categorys.list1 = data.filter((item, index) => index < 8);
        this.categorys.list2 = data.filter((item, index) => index >= 8);
      } else {
        return;
      }
    },

    // 获取商店列表
    async getShopList() {
      const data = await getShopList(this.config);

      if (data) {
        this.shopList.push(...data);
        if (this.shopList.length % this.config.limit !== 0) {
          this.finished = true;
        }
      }
    },

    // 加载更多商店列表
    async onLoad() {
      this.config.offset += this.config.limit;
      await this.getShopList(this.config);
      this.loading = false;
    },

    // 轮播图改变
    swipeChange(index) {
      this.swipeIndex = index;
    },

    // 去往分类详情
    toCategoryDetail(id) {
      console.log(id);
    },
  },
  created() {
    this.getCategorys();

    if (this.$store.state.addressInfo.address) {
      this.config.latitude = "" + this.$store.state.addressInfo.latitude;
      this.config.longitude = "" + this.$store.state.addressInfo.longitude;
      this.getShopList();
    } else {
      this.loading = false;
      this.finished = true;
    }
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
    height: 50px;

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
      flex: 1;
      height: 100%;
      text-align: center;
      font-size: 18px;
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

  // 商店列表
  .shop-list {
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    color: #999;

    .title {
      .iconfont {
        margin-right: 5px;
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