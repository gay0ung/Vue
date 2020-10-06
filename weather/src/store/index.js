import Vue from 'vue';
import Vuex from 'vuex';
import {
  weatherCity,
  weatherWeek,
  // weatherIcon,
} from '../api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userCity: '',
    todayDATA: [],
    wMain: null,
    wInfo: null,
    Wind: null,
    weekDATA: [],
  },
  mutations: {
    // 데이터가 변경될때마다 반영된다.
    SET_CITY(state, userCity) {
      state.user = userCity;
    },
    SET_TODAY(state, today) {
      state.todayDATA = today;
      state.wMain = today.main;
      state.wInfo = today.weather[0];
      state.wind = today.wind;
    },
    SET_WEEK(state, week) {
      state.weekDATA = week;
    },
  },
  actions: {
    async FETCH_TODAY_W({ commit }, position) {
      try {
        const { data } = await weatherCity(position);
        commit('SET_TODAY', data);
        return data;
      } catch (error) {
        const errNum = error.request.status;
        console.log(error.message);
        errNum === 404
          ? alert('잘못된 정보입니다 .다시 입력해주세요.')
          : alert('검색어를 다시 확인해 주세요');
      }
    },

    async FETCH_WEEK_W({ commit }, position) {
      try {
        const { data } = await weatherWeek(position);

        commit('SET_WEEK', data);

        return data;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
