import Vue from 'vue';
import Vuex from 'vuex';
import {
  trending,
  searchApi,
  detailApi,
  genreApi,
  findApi,
} from '@/api/index.js';
import { getCookieFromTitle } from '@/utils/cookies.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // search input
    inputValue: getCookieFromTitle() || '',
    searchDB: [], // search result

    // detail
    type: { type: '', id: 0 },
    detail: [], // click detail

    trandDaily: [], // trand daily
    trandWeekly: [], // trand weekly

    mGenreList: [],
    tGenreList: [],

    movieList: [],
    tvList: [],
  },
  mutations: {
    // searchForm
    SET_VALUE(state, inputValue) {
      state.inputValue = inputValue;
    },
    SET_ID(state, mObj) {
      state.type = { type: mObj.type, id: mObj.id };
    },
    SET_TRENDING_DAILY(state, tData) {
      state.trandDaily = tData.results;
    },
    SET_TRENDING_WEEKLY(state, tData) {
      state.trandWeekly = tData.results;
    },
    SET_MEDIA_DATA(state, data) {
      state.searchDB = data.results;
    },
    SET_MEDIA_DETAILE(state, data) {
      // console.log(data);
      state.detail = data;
    },
    SET_MOVIE_GENRES_LIST(state, list) {
      state.mGenreList = list;
    },
    SET_TV_GENRES_LIST(state, list) {
      state.tGenreList = list;
    },
    SET_MOVIE_LIST(state, data) {
      state.movieList = data;
    },
    SET_TV_LIST(state, data) {
      state.tvList = data;
    },
  },
  actions: {
    // 장르별로 검색하기 위해 영화와 tv프로그램 리스트 불러오기
    async FETCH_MEDIA_ALL_LIST({ commit }) {
      return await findApi()
        .then(res => {
          // type === 'movie'
          //   ? commit('SET_MOVIE_LIST', res)
          //   : commit('SET_TV_LIST', res);
          commit('SET_TV_LIST', res);
          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 장르종류
    async FETCH_GENRES_LIST({ commit }, type) {
      return await genreApi(type)
        .then(res => {
          type === 'movie'
            ? commit('SET_MOVIE_GENRES_LIST', res.data.genres)
            : commit('SET_TV_GENRES_LIST', res.data.genres);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 오늘의 인기 데이터
    async FETCH_TRANDING_DAILY({ commit }, typeObj) {
      return await trending(typeObj.type, typeObj.time)
        .then(res => {
          commit('SET_TRENDING_DAILY', res.data);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 인기 일주일 데이터
    async FETCH_TRANDING_WEEKLY({ commit }, typeObj) {
      return await trending(typeObj.type, typeObj.time)
        .then(res => {
          commit('SET_TRENDING_WEEKLY', res.data);
          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 검색결과 data list
    async FETCH_DATA({ commit }, sObj) {
      return await searchApi(sObj.type, sObj.title)
        .then(res => {
          commit('SET_MEDIA_DATA', res.data);
          return res;
        })
        .catch(err => console.log(err));
    },

    // 상세내용 data
    async FETCH_DETAILE({ commit }, dObj) {
      return await detailApi(dObj.type, dObj.id)
        .then(res => {
          commit('SET_MEDIA_DETAILE', res.data);
          return res;
        })
        .catch(err => console.log(err));
    },
  },
});
