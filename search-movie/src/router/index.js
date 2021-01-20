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
    name: 'sList',
    path: '/sList',
    component: () => import('@/views/SearchResultPage.vue'),
  },
  {
    name: 'Detail',
    path: '/sDetail',
    component: () => import('@/views/DetailtPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeRouteEnter((to, from, next) => {
//   console.log(to, from, next);
// });

export default router;
