import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/search',
    },
    {
      path: '/search',
      component: () => import('@/views/SearchPage.vue'),
    },
    {
      path: '/movieInfo',
      component: () => import('@/views/InfoPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
