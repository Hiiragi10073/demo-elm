import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入页面组件
import Main from 'main/Main.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: Main },
  ]
});

export default router;