import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入 vant 组件
import {
  Tabbar,
  TabbarItem,
  Icon, Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Rate,
  List,
  Cell,
  Field,
  NavBar,
  CellGroup,
} from 'vant';

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
Vue.use(Rate);
Vue.use(List);
Vue.use(Cell);
Vue.use(Field);
Vue.use(NavBar);
Vue.use(CellGroup);

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
