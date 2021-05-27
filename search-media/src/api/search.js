import { client, KEY } from './client';

function searchApi(value) {
  return client.get(`search/multi?query=${value}&${KEY}&language=ko-KR&page=1`);
}

export { searchApi };
