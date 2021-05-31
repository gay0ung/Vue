import { client, clientKey } from './client';

function trendingApi({ type, time }) {
  return client.get(`trending/${type}/${time}${clientKey}`);
}

function popularApi({ type }) {
  return client.get(`${type}/popular${clientKey}`);
}

function tvOnTheAir() {
  return client.get(`tv/on_the_air${clientKey}`);
}

function movieUpcoming() {
  return client.get(`movie/upcoming${clientKey}`);
}

export { trendingApi, popularApi, tvOnTheAir, movieUpcoming };
