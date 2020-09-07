import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 状态
const state = {
  // 城市信息
  city: {},
  // 选择地区信息
  addressInfo: {},
  // 地区搜索历史记录
  citySearchHistory: [],
}

const mutations = {
  changeCity(state, data) {
    state.city = data;
  },
  selectAddress(state, data) {
    state.addressInfo = data;
  },
  addHistory(state, data) {
    state.citySearchHistory.push(...data);
  },
  clearHistory(state) {
    state.citySearchHistory = [];
  }
}

const getters = {
  address(state) {
    return state.addressInfo.name ? state.addressInfo.name : '请选择地址';
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
});

export default store;