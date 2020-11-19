import Vue from 'vue';
import Vuex from 'vuex';
import { movieAPI } from '@/api/index.js';
import { getCookieFromTitle } from '@/utils/cookies.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // search input
    inputValue: getCookieFromTitle() || '',
    // input result
    movieDB: [],
    movieDT: [],
  },
  mutations: {
    // searchForm
    SET_VALUE(state, inputValue) {
      state.inputValue = inputValue;
    },
    SET_MOVIE_DATA(state, data) {
      state.movieDB = data;
    },
    SET_MOVIE_DETAILE(state, data) {
      state.movieDT = data.results[0];
    },
  },
  actions: {
    async FETCH_DATA({ commit }, mTitle) {
      return await movieAPI(mTitle)
        .then(res => {
          commit('SET_MOVIE_DATA', res.data);
          return res;
        })
        .catch(err => console.log(err));
    },

    async FETCH_DETAILE({ commit }, mTitle) {
      return await movieAPI(mTitle)
        .then(res => {
          commit('SET_MOVIE_DETAILE', res.data);
          return res;
        })
        .catch(err => console.log(err));
    },
  },
});
