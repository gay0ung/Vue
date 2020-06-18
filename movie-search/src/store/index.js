import Vue from 'vue';
import Vuex from 'vuex';
import { searchMovie } from '@/api/index.js';
import { getTitleFromCookie, getTypeFromCookie } from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //search
    movieList: [], // 데이터들이 담길 배열
    inputQuery: '', // 검색데이터
    //info
    getvalue: getTitleFromCookie() || '',
    seleted: getTypeFromCookie() || '',
    // detail
    deaileItem: [],
    // keyword
    keyword: '',
    keywordList: [],
    keywordResult: [],
  },
  mutations: {
    SET_LIST(state, movieList) {
      state.movieList = movieList.Data[0].Result;
    },
    // SearchForm page
    SET_TITLE(state, inputQuery) {
      state.inputQuery = inputQuery;
    },
    SET_OPTION(state, seleted) {
      state.seleted = seleted;
    },
    // ditailForm page
    SET_DEITEM(state, deaileItem) {
      state.deaileItem = deaileItem;
    },
    // keyword
    SET_KEYWORD(state, keyword) {
      state.keyword = keyword;
    },
    SET_KEYWORDLIST(state, data) {
      state.keywordList = data;
      state.keywordResult = data.Data[0].Result;
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
    FETCH_KEYWORD(context, keyword) {
      return searchMovie(keyword)
        .then(res => {
          context.commit('SET_KEYWORDLIST', res.data);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
});
