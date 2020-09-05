import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

// 引入 vant 组件
import { Tabbar, TabbarItem, Icon, Swipe, SwipeItem, Grid, GridItem } from 'vant';

// 引入样式
import '@/styles/base.scss'
import 'lib-flexible';
import '@/fonts/iconfont.css';

// 挂载 UI 组件
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);

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


// 过滤器
Vue.filter('addBaseURL', value => {
  return 'https://fuss10.elemecdn.com/' + value;
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
