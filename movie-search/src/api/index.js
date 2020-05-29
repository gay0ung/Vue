import axios from 'axios';

const config = {
  BASE_URL:
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&',
  KEY: '&ServiceKey=6H19HF3Z57ETOX71I7T1',
};

// title
function searchMovie(inputQuery) {
  return axios.get(`${config.BASE_URL}${inputQuery}${config.KEY}`);
}

export { searchMovie };

// http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2.jsp?collection=kmdb_new2&detail=N&director=%EB%B0%95%EC%B0%AC%EC%9A%B1&ServiceKey=인증키값
