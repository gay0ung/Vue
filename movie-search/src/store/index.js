import Vue from 'vue';
import Vuex from 'vuex';
import { searchMovie } from '@/api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // movieValue: [],
    movieData: '',
  },
  mutations: {
    // 데이터를 변경하는곳
    // SET_VALUE(state, movieValue) {
    //   state.movieValue = movieValue;
    // },
    SET_MOVIEDB(state, movieData) {
      state.movieData = movieData;
    },
  },
  actions: {
    async SEARCH({ commit }, movieData) {
      const { data } = await searchMovie(movieData);

      console.log(data.Data[0].Result[0].title);

      //commit('SET_VALUE', data);
      commit('SET_MOVIEDB', data.Data[0].Result[0]);

      return data;
    },
  },
});
