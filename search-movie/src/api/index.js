import axios from 'axios';

const config = {
  BASE_URL: 'https://api.themoviedb.org/3/search/movie?query=',
  KEY: 'api_key=73aec5aab4d1dd1f2f46621795e15d37&',
};

// https://api.themoviedb.org/3/search/movie?query=해리포터&api_key=e7638a32d5dab5f71c53ca3627e15d57&language=ko-KR

function movieAPI(movieTitle) {
  return axios.get(
    `${config.BASE_URL}${movieTitle}&${config.KEY}language=ko-KR&page=1`,
  );
}

export { movieAPI };
