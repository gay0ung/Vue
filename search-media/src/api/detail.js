import { client, clientKey } from './client';

const detailApi = ({ type, id }) => {
  return client.get(`${type}/${id}${clientKey}`);
};

const recommendationsApi = ({ type, id }) => {
  return client.get(`${type}/${id}/recommendations${clientKey}`);
};

const similarApi = ({ type, id }) => {
  return client.get(`${type}/${id}/similar${clientKey}`);
};

const keywordsApi = ({ type, id }) => {
  return client.get(`${type}/${id}/keywords${clientKey}`);
};

const keywordListsApi = ({ id }) => {
  return client.get(`keyword/${id}/movies${clientKey}`);
};

const creditsApi = ({ type, id }) => {
  return client.get(`${type}/${id}/credits${clientKey}`);
};

const watchProviders = ({ type, id }) => {
  return client.get(`${type}/${id}/watch/providers${clientKey}`);
};

// person
const personCreditsApi = ({ id }) => {
  return client.get(`person/${id}/combined_credits${clientKey}`);
};

export {
  detailApi,
  watchProviders,
  recommendationsApi,
  similarApi,
  keywordsApi,
  keywordListsApi,
  creditsApi,
  personCreditsApi,
};
