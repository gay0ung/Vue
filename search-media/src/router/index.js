import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Main = () => import('@/views/HomePage.vue');
const Tv = () => import('@/views/TvPage.vue');
const Movie = () => import('@/views/MoviePage.vue');
const Search = () => import('@/views/SearchListPage.vue');
const Detail = () => import('@/views/DetailPage.vue');
const Favorite = () => import('@/views/FavoritePage.vue');
const Person = () => import('@/views/PersonPage.vue');

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: Main,
  },
  { name: 'tv', path: '/tv', component: Tv },
  { name: 'movie', path: '/movie', component: Movie },
  { name: 'person', path: '/person/:id', component: Person },
  { name: 'search', path: '/search', component: Search },
  { name: 'detail', path: '/detail/:id', component: Detail },
  { name: 'favorite', path: '/favorite', component: Favorite },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
