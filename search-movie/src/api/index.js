import axios from 'axios';

const config = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  KEY: 'api_key=73aec5aab4d1dd1f2f46621795e15d37',
};

function trending(mType, time) {
  return axios.get(
    `${config.BASE_URL}trending/${mType}/${time}?${config.KEY}&language=ko-KR&page=1`,
  );
}

function searchApi(mType, title) {
  return axios.get(
    `${config.BASE_URL}search/${mType}?query=${title}&${config.KEY}&language=ko-KR&page=1`,
  );
}

// 장르로 검색했을경우 영화와 tv프로그램 목록을 전부 불러온다.
function findApi() {
  return axios.get(
    `${config.BASE_URL}search/multi?${config.KEY}&language=ko-KR&page=1`,
  );
}
// 장르별로 검색
function genreApi(mType) {
  return axios.get(
    `${config.BASE_URL}genre/${mType}/list?${config.KEY}&language=ko-KR&page=1`,
  );
}

function detailApi(mType, ID) {
  return axios.get(
    `${config.BASE_URL}${mType}/${ID}?${config.KEY}&language=ko-KR&page=1`,
  );
}
// 출연진을 알고 싶으면 ${id}/credits

//company keyword movie multi person tv
export { searchApi, detailApi, trending, genreApi, findApi };
