import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Main = () => import('@/views/MainPage.vue');
const SList = () => import('@/views/SearchResultPage.vue');

const Detail = () => import('@/views/DetailtPage.vue');

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    name: 'main',
    path: '/:type',
    component: Main,
  },
  {
    name: 'sList',
    path: '/sList',
    component: SList,
  },
  {
    name: 'detail',
    path: '/sDetail',
    component: Detail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
