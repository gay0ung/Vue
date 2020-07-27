import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: '',
    token: '',
  },
  // 데이터의 값이 변경 됐을때 사용
  getters: {
    isLogin(state) {
      // 로그인이 되어있을때
      return state.username !== '';
    },
  },
  mutations: {
    // 데이터를 변경한다.
    setUsername(state, username) {
      state.username = username;
    },

    // 로그아웃 하기
    clearUsername(state) {
      state.username = '';
    },

    // 토큰값 셋팅하기
    setToken(state, token) {
      state.token = token;
    },
  },
});
