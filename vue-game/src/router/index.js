import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainPage.vue'),
  },
];

const router = new VueRouter({
  routes,
  history,
});

export default router;
