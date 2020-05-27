import axios from 'axios';

const config = {
  BASE_URL:
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&posterUrl=',
  KEY: '6H19HF3Z57ETOX71I7T1',
};

// title
function searchMovie(movieData) {
  return axios.get(
    `${config.BASE_URL}titie=${movieData}&ServiceKey=${config.KEY}`,
  );
}

// director
function movieDirector(movieData) {
  return axios.get(
    `${config.BASE_URL}&director=${movieData}&ServiceKey=${config.KEY}`,
  );
}

// posters
function moviePosters(movieData) {
  return axios.get(
    `${config.BASE_URL}&posterUrl=${movieData}&ServiceKey=${config.KEY}`,
  );
}

export { searchMovie, movieDirector, moviePosters };

// http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2.jsp?collection=kmdb_new2&detail=N&director=%EB%B0%95%EC%B0%AC%EC%9A%B1&ServiceKey=인증키값
