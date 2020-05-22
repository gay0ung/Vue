import Vue from 'vue';
import Vuex from 'vuex';
import { searchMovie } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
  },
  mutations: {
    set_list(state, list) {
      state.list = list;
    },
  },
  actions: {
    FetchList(context, title) {
      return searchMovie(title)
        .then(res => {
          context.commit('set_list', res.data);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  modules: {},
});
