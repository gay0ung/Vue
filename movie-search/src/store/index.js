import Vue from 'vue';
import Vuex from 'vuex';
import { searchMovie } from '@/api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieList: [], // 데이터들이 담길 배열
    inputQuery: '', // 검색데이터
    option: '',
  },
  mutations: {
    // 데이터를 변경하는곳
    SET_LIST(state, movieList) {
      state.movieList = movieList.Data[0].Result;
    },
    SET_TITLE(state, inputQuery) {
      state.inputQuery = inputQuery;
    },
    SET_OPTION(state, option) {
      state.option = option;
    },
  },
  actions: {
    FETCH_LIST(context, inputQuery) {
      return searchMovie(inputQuery)
        .then(res => {
          context.commit('SET_LIST', res.data);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
});
