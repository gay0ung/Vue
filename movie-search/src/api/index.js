import axios from 'axios';

const config = {
  BASE_URL:
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&',
  KEY: '6H19HF3Z57ETOX71I7T1',
};

// 영화제목
function searchMovie(title) {
  return axios.get(`${config.BASE_URL}titie=${title}&ServiceKey=${config.KEY}`);
}
// 영화정보
// function MovieInfo(movieDB) {s
//   return axios.get('', movieDB);
// }
export { searchMovie };

// http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_xml2.jsp?collection=kmdb_new2&detail=N&director=%EB%B0%95%EC%B0%AC%EC%9A%B1&ServiceKey=인증키값
