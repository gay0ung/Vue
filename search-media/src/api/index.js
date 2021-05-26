import axios from 'axios';

const config = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  KEY: 'api_key=73aec5aab4d1dd1f2f46621795e15d37',
};

const { BASE_URL, KEY } = config;

function searchApi(value) {
  return axios.get(
    `${BASE_URL}search/multi?query=${value}&${KEY}&language=ko-KR&page=1`,
  );
}

export { searchApi };
