import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueCookies from 'vue-cookies';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch as fasSearch } from '@fortawesome/free-solid-svg-icons';

Vue.use(VueCookies);
Vue.$cookies.config('1d');

library.add(fasSearch);
Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

export const evnetBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
