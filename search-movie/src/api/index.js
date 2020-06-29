// 공공 api가 들어올 자리
import axios from 'axios';

const config = {
  BASE_URL:
    'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&sort=prodYear,1&',
  KEY: '&ServiceKey=6H19HF3Z57ETOX71I7T1',
};

function movieDate(value) {
  return axios.get(`${config.BASE_URL}${value}${config.KEY}`);
}

export { movieDate };