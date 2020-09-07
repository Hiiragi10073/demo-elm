<template>
  <div class="Address">
    <!-- 头部地址栏 -->
    <div class="header">
      <router-link to="/main">
        <span class="logo">ele.me</span>
      </router-link>
      <div class="sign">
        <router-link class="link" to="/login">登录</router-link>
        <span class="link">|</span>
        <router-link class="link" to="/register">注册</router-link>
      </div>
    </div>
    <!-- 当前定位城市 -->
    <div class="location">
      <div class="tips">
        <span>当前定位城市：</span>
        <span class="tips-text">定位不准时，请在城市列表中选择</span>
      </div>
      <van-cell
        :title="location.name"
        title-class="slect-cityname"
        is-link
        @click="toSelectAddress(location)"
      ></van-cell>
    </div>
    <!-- 热门城市 -->
    <div class="hot-city-list">
      <div class="title">热门城市</div>
      <van-grid>
        <van-grid-item
          :text="item.name"
          class="city"
          gutter="2px"
          v-for="item in hotCityList"
          :key="item.id"
          @click="toSelectAddress(item)"
        />
      </van-grid>
    </div>
    <!-- 城市列表 -->
    <div class="city-list" v-for="hash in cityListHash" :key="hash">
      <div class="title">
        {{ hash }}
        <span class="tips-text" v-if="hash === 'A'">(按字母排序)</span>
      </div>
      <van-grid>
        <van-grid-item
          :text="item.name"
          class="city"
          gutter="2px"
          v-for="item in cityList[hash]"
          :key="item.id"
          @click="toSelectAddress(item)"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { getCityList } from "api/api.js";

export default {
  data() {
    return {
      location: {},
      hotCityList: [],
      cityList: {},
    };
  },
  computed: {
    cityListHash() {
      return Object.keys(this.cityList).sort();
    },
  },
  methods: {
    async getLocation() {
      const res = await getCityList({ type: "guess" });
      this.location = res;
      this.$store.commit("changeCity", res);
    },
    async getHotCityList() {
      const res = await getCityList({ type: "hot" });
      this.hotCityList = res;
    },
    async getCityList() {
      const res = await getCityList({ type: "group" });
      this.cityList = res;
    },
    toSelectAddress(params) {
      this.$store.commit("changeCity", params);
      this.$router.push("/select-address");
    },
  },
  created() {
    this.getHotCityList();
    this.getCityList();
    this.getLocation();
  },
};
</script>

<style lang="scss" scoped>
.Address {
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

    .logo {
      font-size: 16px;
      color: #fff;
    }

    .link {
      font-size: 16px;
      color: #fff;
    }
  }

  .location {
    .tips {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      background-color: #fff;
      border-bottom: 1px solid #f5f5ff;
      height: 40px;

      .tips-text {
        font-weight: bold;
        color: #ccc;
      }
    }

    .slect-cityname {
      font-size: 16px;
      color: #3190e8;
    }
  }

  .hot-city-list,
  .city-list {
    margin-top: 20px;
    background-color: #fff;
    border-top: 2px solid #ccc;

    .title {
      padding: 10px;
    }

    .tips-text {
      color: #999;
    }

    .city {
      width: 25%;
    }
  }
}
</style>

<style lang="scss">
.Address .hot-city-list .van-grid-item__text {
  color: #3190e8;
}

.Address .city-list .van-grid-item__text {
  width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
