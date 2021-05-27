import Vue from 'vue';
import Vuex from 'vuex';
import Cookie from 'vue-cookie';
import { searchApi } from '../api/search';
import { trandingApi } from '../api/trending';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputValue: Cookie.get('s-query') || null,
    searchDB: null,
    trandDaily: null,
    trandWeekly: null,
  },

  mutations: {
    SET_VALUE(state, inputValue) {
      state.inputValue = inputValue;
    },
    SET_SEARCH_RESULTS(state, data) {
      state.searchDB = data.results;
    },
    SET_TRENDING_DAILY(state, trandData) {
      state.trandDaily = trandData.results;
    },
    SET_TRENDING_WEEKLY(state, trandData) {
      state.trandWeekly = trandData.results;
    },
  },
  actions: {
    async SEARCH_DATA({ commit }, value) {
      try {
        const { data } = await searchApi(value);
        commit('SET_SEARCH_RESULTS', data);
        console.log(data);
        return data;
      } catch (err) {
        console.log(err.response);
      }
    },

    async FETCH_TRENDING({ commit }, { type, time, commitType }) {
      try {
        const { data } = await trandingApi({ type, time });
        commit(commitType, data);
        return data;
      } catch (err) {
        console.log(err.response);
      }
    },
  },
});
