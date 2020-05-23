import Vue from 'vue';
import Vuex from 'vuex';
import { searchMovie } from '@/api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieLS: [],
    title: '',
  },
  mutations: {
    SET_LIST(state, movieLS) {
      console.log(movieLS);

      state.movieDB = movieLS;
    },
    SET_TITLE(state, title) {
      console.log(title);

      state.movieDB = title;
    },
  },
  actions: {
    FETCH_LIST(context, title) {
      console.log(title);

      return searchMovie(title.movieDB)
        .then(res => {
          context.commit('SET_TITLE', res.data);

          return res;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  modules: {},
});
