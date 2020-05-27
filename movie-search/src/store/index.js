import Vue from 'vue';
import Vuex from 'vuex';
import { searchMovie } from '@/api/index.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: '',
    director: '',
  },
  mutations: {
    // 데이터를 변경하는곳
    SET_TITLE(state, title) {
      state.title = title;
    },
    SET_DIRECTOR(state, director) {
      state.director = director;
    },
  },
  actions: {
    SEARCH(movieData) {
      const res = searchMovie(movieData);
      console.log(res);
    },
  },
});
