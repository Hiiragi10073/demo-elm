import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入页面组件
import Main from 'main/Main.vue';
import Address from 'main/Address.vue';
import SelectAddress from 'main/SelectAddress.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: Main },
    { path: '/search', component: Main },
    { path: '/orders', component: Main },
    { path: '/profile', component: Main },
    { path: '/address', component: Address },
    { path: '/select-address', component: SelectAddress },
    { path: '/login', component: Main },
    { path: '/register', component: Main },
    { path: '/shopDetail/:id', component: Main },
  ]
});

export default router;