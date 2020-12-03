import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: '/main',
    component: () => import('@/views/MainPage.vue'),
  },
  {
    path: '/movie',
    component: () => import('@/views/MoviePage.vue'),
  },
  {
    path: '/tv',
    component: () => import('@/views/TVPage.vue'),
  },
  {
    path: '/sList',
    component: () => import('@/views/SearchReaultPage.vue'),
  },
  {
    path: '/sDetail',
    component: () => import('@/views/DetailtPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
