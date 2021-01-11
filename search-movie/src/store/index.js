import Vue from 'vue';
import Vuex from 'vuex';
import { trending, searchApi, detailApi } from '@/api/index.js';
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
      state.detail = data.results;
    },
    SET_PATH(state, path) {
      state.currentPath = path;
    },
  },
  actions: {
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

    // 현재 위치의 path명
    CHECKING_PATH({ commit }, path) {
      console.log(commit);
    },
  },
});
