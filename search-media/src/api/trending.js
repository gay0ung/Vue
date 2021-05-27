import { client, KEY } from './client';

function trandingApi({ type, time }) {
  return client.get(`trending/${type}/${time}?${KEY}&language=ko-KR&page=1`);
}

export { trandingApi };
