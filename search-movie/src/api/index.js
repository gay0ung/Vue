import axios from 'axios';

const config = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  KEY: 'api_key=73aec5aab4d1dd1f2f46621795e15d37',
};
// https://api.themoviedb.org/3/search/multi?query=해리포터&api_key=73aec5aab4d1dd1f2f46621795e15d37&language=ko-KR&page=1

// https://api.themoviedb.org/3/movie/672/credits?&api_key=73aec5aab4d1dd1f2f46621795e15d37&language=ko-KR&page=1

// https://api.themoviedb.org/3/movie/672?api_key=73aec5aab4d1dd1f2f46621795e15d37&language=ko-KR&page=1

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

function detailApi(mType, ID) {
  return axios.get(
    `${config.BASE_URL}${mType}/${ID}?${config.KEY}&language=ko-KR&page=1`,
  );
}
// 출연진을 알고 싶으면 ${id}/credits

//company keyword movie multi person tv
export { searchApi, detailApi, trending };
