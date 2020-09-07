<template>
  <div class="SelectAddress">
    <elm-header rightText="切换城市" :title="$store.state.city.name" :onClickRight="onClickRight"></elm-header>
    <!-- 搜索框 -->
    <div class="search">
      <input class="search-ipt" type="text" v-model.trim="keyword" placeholder="输入学校、商务楼、地址" />
      <button class="submit" @click="search">提交</button>
    </div>
    <!-- 搜索历史 -->
    <div class="history" v-if="showHistory">
      <div class="title">搜索历史</div>
      <van-cell-group v-for="item in $store.state.citySearchHistory" :key="item.id">
        <van-cell :title="item.name" :label="item.address" @click="selectAddress(item)" />
      </van-cell-group>
      <button class="clear" @click="clearHistory">清空所有</button>
    </div>
    <!-- 搜索结果 -->
    <div class="search-result" v-if="searchRes.length">
      <van-cell-group v-for="item in searchRes" :key="item.geohash">
        <van-cell :title="item.name" :label="item.address" @click="selectAddress(item)" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import elmHeader from "components/elm-header.vue";
import { getAddress } from "api/api.js";

export default {
  data() {
    return {
      // 搜索关键词
      keyword: "",
      // 决定是否展示历史记录
      showHistory: true,
      // 搜索结果
      searchRes: [],
    };
  },
  created() {
    // 查看是否存在历史记录
    if (this.$store.state.citySearchHistory.length) {
      this.showHistory = true;
    } else {
      this.showHistory = false;
    }
  },
  methods: {
    // 切换城市的函数
    onClickRight() {
      this.$router.push("/address");
    },
    // 搜索地址
    async search() {
      if (!this.keyword) return;

      const res = await getAddress({
        city_id: this.$store.state.city.id,
        keyword: this.keyword,
        type: "search",
      });
      this.searchRes = res;
      this.$store.commit("addHistory", res);
    },
    // 清除历史记录
    clearHistory() {
      this.$store.commit("clearHistory");
      this.showHistory = true;
    },
    // 选择地址
    selectAddress(data) {
      this.$store.commit("selectAddress", data);
      this.$router.push("/main");
    },
  },
  components: {
    elmHeader,
  },
};
</script>

<style lang="scss" scoped>
.SelectAddress {
  .search {
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;

    .van-cell-group {
      border: 1px solid #ccc;
    }

    .search-ipt {
      display: block;
      width: 100%;
      height: 30px;
      padding: 5px;
      border: 1px solid #ccc;

      &:focus {
        border-color: sandybrown;
      }
    }

    .submit {
      display: block;
      width: 100%;
      height: 30px;
      margin-top: 10px;
      background-color: #3190e8;
      color: #fff;
      text-align: center;
    }
  }
  .history {
    .title {
      margin: 10px;
    }
    .van-cell-group {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }

    .clear {
      display: block;
      width: 100%;
      height: 50px;
      background-color: #fff;
      font-size: 16px;
      color: #999;
    }
  }
}
</style>