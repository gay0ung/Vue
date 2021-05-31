import { client, clientKey } from './client';

function detailApi({ type, id }) {
  return client.get(`${type}/${id}${clientKey}`);
}

function recommendationsApi({ type, id }) {
  return client.get(`${type}/${id}/recommendations${clientKey}`);
}

function similarApi({ type, id }) {
  return client.get(`${type}/${id}/similar${clientKey}`);
}

function keywordsApi({ type, id }) {
  return client.get(`${type}/${id}/keywords${clientKey}`);
}

function creditsApi({ type, id }) {
  return client.get(`${type}/${id}/credits${clientKey}`);
}

function watchProviders({ type, id }) {
  return client.get(`${type}/${id}/watch/providers${clientKey}`);
}

// person
function personCreditsApi({ id }) {
  return client.get(`person/${id}/combined_credits${clientKey}`);
}

export {
  detailApi,
  watchProviders,
  recommendationsApi,
  similarApi,
  keywordsApi,
  creditsApi,
  personCreditsApi,
};
