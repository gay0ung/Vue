import { trending, searchApi, detailApi } from '@/api/index.js';

export default {
  // 오늘의 인기 데이터
  async FETCH_TRANDING_DAILY({ commit }, typeObj) {
    try {
      const res = await trending(typeObj.type, typeObj.time);
      commit('SET_TRENDING_DAILY', res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  // 인기 일주일 데이터
  async FETCH_TRANDING_WEEKLY({ commit }, typeObj) {
    try {
      const res = await trending(typeObj.type, typeObj.time);
      commit('SET_TRENDING_WEEKLY', res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  // 검색결과 data list
  async FETCH_DATA({ commit }, sObj) {
    try {
      const res = await searchApi(sObj.type, sObj.title);
      commit('SET_MEDIA_DATA', res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },

  // 상세내용 data
  async FETCH_DETAILE({ commit }, dObj) {
    try {
      const res = await detailApi(dObj.type, dObj.id);
      commit('SET_MEDIA_DETAILE', res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};
