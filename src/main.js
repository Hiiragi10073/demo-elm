import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

// 引入 vant 组件
import { Tabbar, TabbarItem, Icon } from 'vant';

// 引入样式
import '@/styles/base.scss'
import 'lib-flexible';
import '@/fonts/iconfont.css';

// 挂载 UI 组件
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);

// axios 拦截器
// 请求拦截器
axios.interceptors.request.use(config => {
  return config;
}, err => {
  return Promise.reject(err);
});

// 响应拦截器
axios.interceptors.response.use(response => {
  return response;
}, err => {
  return Promise.reject(err);
});

// axios 基地址
axios.defaults.baseURL = 'https://elm.cangdu.org';

// 挂载 axios
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
