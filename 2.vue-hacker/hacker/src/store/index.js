import Vue from "vue";
import Vuex from "vuex";
import {
  fetchListItem,
  fetchCommentItem,
  fetchUserInfo,
} from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // 데이터 저장
    list: [],
    commentlist: [],
    user: "",
  },
  mutations: {
    //state에 저장.
    SET_LIST(state, list) {
      state.list = list;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_COMMENT(state, commentlist) {
      state.commentlist = commentlist;
    },
  },
  actions: {
    // api/index.js에 데이터 가져오는 행동대장들을 호출해서 받고, mutations에 넘김.

    //promise방식
    FETCH_LIST(context, pageName) {
      return fetchListItem(pageName)
        .then((res) => {
          context.commit("SET_LIST", res.data);
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    FETCH_USER(context, userName) {
      return fetchUserInfo(userName)
        .then((res) => {
          context.commit("SET_USER", res.data);
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    FETCH_COMMENT(context, commId) {
      fetchCommentItem(commId)
        .then((res) => {
          context.commit("SET_COMMENT", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  // async FETCH_LIST(context, pageName) {
  //   try {
  //     const res = await fetchListItem(pageName);
  //     context.commit("SET_LIST", res.data);
  //     return res;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
});
