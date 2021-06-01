import Vue from 'vue';
import Vuex from 'vuex';
import Cookie from 'vue-cookie';
import { searchApi } from '../api/search';
import {
  movieUpcoming,
  popularApi,
  trendingApi,
  tvOnTheAir,
} from '../api/trending';
import {
  creditsApi,
  detailApi,
  keywordsApi,
  recommendationsApi,
  similarApi,
  watchProviders,
} from '../api/detail';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputValue: Cookie.get('s-query') || null,
    mediaInfo: JSON.parse(Cookie.get('m-info')) || null,
    searchDB: null,

    // main page
    trandDaily: null,
    trandWeekly: null,

    popularDB: null,
    tvOnTheAirDB: null,
    movieUpcomingDB: null,

    // detail page
    detailDB: null,
    recommendationsDB: null,
    similarDB: null,
    keywordsDB: null,
    creditsDB: null,
    watchProvidersDB: null,
  },

  mutations: {
    SET_VALUE(state, inputValue) {
      state.inputValue = inputValue;
    },
    SET_MEDIA_INFO(state, mediaInfo) {
      state.mediaInfo = { type: mediaInfo.type, id: mediaInfo.id };
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
    SET_POPULAR(state, popularDB) {
      state.popularDB = popularDB.results;
    },
    SET_ONTHEAIR(state, tvOnTheAirDB) {
      state.tvOnTheAirDB = tvOnTheAirDB.results;
    },
    SET_UPCOMING(state, movieUpcomingDB) {
      state.movieUpcomingDB = movieUpcomingDB.results;
    },

    //  detail
    SET_DETAIL(state, detailDB) {
      state.detailDB = detailDB;
    },
    SET_RECOMMENDATIONS(state, recommendationsDB) {
      state.recommendationsDB = recommendationsDB.results;
    },
    SET_SIMILAR(state, similarDB) {
      state.similarDB = similarDB.results;
    },
    SET_KEYWORDS(state, keywordsDB) {
      state.keywordsDB = keywordsDB.keywords || keywordsDB.results;
    },
    SET_CREDITS(state, creditsDB) {
      const { cast, crew } = creditsDB;
      state.creditsDB = { cast, crew };
    },
    SET_WATCH_PROVIDERS(state, watchProvidersDB) {
      state.watchProvidersDB = watchProvidersDB.results.KR;
    },
  },
  actions: {
    async SEARCH_DATA({ commit }, value) {
      try {
        const { data } = await searchApi(value);
        commit('SET_SEARCH_RESULTS', data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async FETCH_TRENDING({ commit }, { type, time, commitType }) {
      try {
        const { data } = await trendingApi({ type, time });
        commit(commitType, data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async FETCH_POPULAR({ commit }, { type }) {
      try {
        const { data } = await popularApi({ type });
        commit('SET_POPULAR', data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async FETCH_ONTHEAIR({ commit }) {
      try {
        const { data } = await tvOnTheAir();
        commit('SET_ONTHEAIR', data);
      } catch (err) {
        console.log(err.response);
      }
    },

    async FETCH_UPCOMING({ commit }) {
      try {
        const { data } = await movieUpcoming();
        commit('SET_UPCOMING', data);
      } catch (err) {
        console.log(err.response);
      }
    },

    // detail page
    async FETCH_DETAIL({ commit }, { type, id }) {
      try {
        const { data } = await detailApi({ type, id });
        commit('SET_DETAIL', data);
      } catch (err) {
        console.log(err.response);
      }
    },
    async FETCH_RECOMMENDATIONS({ commit }, { type, id }) {
      try {
        const { data } = await recommendationsApi({ type, id });
        commit('SET_RECOMMENDATIONS', data);
      } catch (err) {
        console.log(err.response);
      }
    },
    async FETCH_SIMILAR({ commit }, { type, id }) {
      try {
        const { data } = await similarApi({ type, id });
        commit('SET_SIMILAR', data);
      } catch (err) {
        console.log(err.response);
      }
    },
    async FETCH_KEYWORDS({ commit }, { type, id }) {
      try {
        const { data } = await keywordsApi({ type, id });
        commit('SET_KEYWORDS', data);
      } catch (err) {
        console.log(err.response);
      }
    },
    async FETCH_CREDITS({ commit }, { type, id }) {
      try {
        const { data } = await creditsApi({ type, id });
        commit('SET_CREDITS', data);
      } catch (err) {
        console.log(err.response);
      }
    },
    async FETCH_WATCH_PROVIDERS({ commit }, { type, id }) {
      try {
        const { data } = await watchProviders({ type, id });
        commit('SET_WATCH_PROVIDERS', data);
      } catch (err) {
        console.log(err.response);
      }
    },
  },
});
