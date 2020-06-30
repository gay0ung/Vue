import Vue from 'vue';
import Vuex from 'vuex';
import { movieData } from '@/api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieData: [],
    detail: [],
    seleted: '',
    searchTxt: '',
  },
  mutations: {
    SET_DATA(state, data) {
      console.log(data);

      // 영화 전체 데이터
      state.movieData = data;
      // 영화 세부정보 데이터
      state.detail = data.Data[0].Result;
    },
    INPUT_VALUE(state, searchTxt) {
      state.searchTxt = searchTxt;
    },
    SET_OPTION(state, seleted) {
      state.seleted = seleted;
    },
  },
  actions: {
    FETCH_DATA(context, data) {
      console.log(data);
      return movieData(data.searchTxt)
        .then(res => {
          context.commit('SET_DATA', res.data);
          console.log(res);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
});
