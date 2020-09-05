import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 状态
const state = {
  username: '',
  password: '',
}

const store = new Vuex.Store({
  state,
});

export default store;