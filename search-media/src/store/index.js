import Vue from 'vue';
import Vuex from 'vuex';
import Cookie from 'vue-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    inputValue: Cookie.get('s-query') || null,
    searchDB: null,
  },

  mutations: {
    SET_VALUE(state, inputValue) {
      state.inputValue = Cookie.get('s-query') || inputValue;
    },
  },
  actions: {},
});
