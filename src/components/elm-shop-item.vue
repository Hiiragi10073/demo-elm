<template>
  <div class="elm-shop-item" @click="toShopDetail(data.id)">
    <img :src="'http://localhost:8000/img/' + data.image_path" alt />
    <div class="info">
      <div class="top">
        <div class="title">
          <span class="premium" v-if="data.is_premium">品牌</span>
          <span class="name">{{ data.name }}</span>
        </div>
        <div class="supports">
          <div class="supports-icon" v-for="item in data.supports" :key="item.id">{{item.icon_name}}</div>
        </div>
      </div>
      <div class="middle">
        <div class="rate">
          <van-rate
            v-model="data.rating"
            :size="12"
            color="#ff9a0d"
            void-icon="star"
            void-color="#eee"
            readonly
            class="rate"
          />
          <span class="rate-text">{{ data.rating }}&nbsp;</span>
          <span>月售{{ data.recent_order_num }}单</span>
        </div>
        <div class="delivery_mode">
          <div
            v-if="data.delivery_mode"
            class="mode"
            :style="{backgroundColor: '#' + data.delivery_mode.color}"
          >{{data.delivery_mode.text}}</div>
        </div>
      </div>
      <div class="bottom">
        <div class="piece">
          <span>￥20起送 / {{data.piecewise_agent_fee.tips}}</span>
        </div>
        <div>
          <span>{{data.distance}}</span>
          /
          <span class="time">{{data.order_lead_time}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    toShopDetail(id) {
      this.$router.push(`/shopDetail/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.elm-shop-item {
  display: flex;
  padding: 10px 5px;
  border-bottom: 1px solid #f5f5f5;

  img {
    width: 60px;
    height: 60px;
    padding: 0 10px;
    object-fit: cover;
  }

  .info {
    flex: 1;
  }

  .top {
    display: flex;
    justify-content: space-between;

    .premium {
      display: inline-block;
      height: 16px;
      line-height: 16px;
      margin-right: 5px;
      padding: 0 2px;

      color: #000;
      font-weight: bold;
      background-color: #ffd930;
      border-radius: 3px;
    }

    .name {
      font-size: 16px;
      font-weight: bold;
      color: #000;
    }

    .supports-icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin: 2px;

      line-height: 14px;
      border: 1px solid #ccc;
      border-radius: 2px;
    }
  }

  .middle {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;

    .rate {
      margin-right: 5px;
    }

    .rate-text {
      color: #ff8b9f;
    }

    .mode {
      color: #fff;
      padding: 0 2px;
      border-radius: 2px;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;

    .time {
      color: #3190e8;
    }
  }
}
</style>

<style lang="scss">
.elm-shop-item {
  .rate {
    .van-rate__item {
      padding-right: 0;
    }
  }
}
</style>