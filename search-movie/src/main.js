import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch as fasSearch } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft as fasChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight as fasChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fasSearch, fasChevronLeft, fasChevronRight, fasStar, farStar);

Vue.component('font-awesom-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

export const evnetBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
