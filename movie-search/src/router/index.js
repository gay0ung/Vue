import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/SearchPage.vue'),
    },
    {
      path: '/info',
      component: () => import('@/views/InfoPage.vue'),
    },
  ],
});
