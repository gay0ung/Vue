import axios from 'axios';

const config = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  KEY: 'api_key=73aec5aab4d1dd1f2f46621795e15d37',
};

function trending(mType, time) {
  return axios.get(
    `${config.BASE_URL}trending/${mType}/${time}?${config.KEY}&language=ko-KR&page=1`,
  );
}

function searchApi(title) {
  return axios.get(
    `${config.BASE_URL}search/multi?query=${title}&${config.KEY}&language=ko-KR&page=1`,
  );
}

// 장르별로 검색
function genreApi(mType) {
  return axios.get(
    `${config.BASE_URL}genre/${mType}/list?${config.KEY}&language=ko-KR&page=1`,
  );
}

function detailApi(mType, ID) {
  return axios.get(
    `${config.BASE_URL}${mType}/${ID}?${config.KEY}&language=ko-KR&page=1`,
  );
}

// 추천 영상
function recommendationsApi(mType, ID) {
  return axios.get(
    `${config.BASE_URL}${mType}/${ID}/recommendations?${config.KEY}&language=ko-KR&page=1`,
  );
}

// 비슷한 영상
function similarApi(mType, ID) {
  return axios.get(
    `${config.BASE_URL}${mType}/${ID}/similar?${config.KEY}&language=ko-KR&page=1`,
  );
}

// 키워드 리스트
function kewordApi(mType, ID) {
  return axios.get(
    `${config.BASE_URL}${mType}/${ID}/keywords?${config.KEY}&language=ko-KR&page=1`,
  );
}

// 키워드별 미디어 목록
function keywordGetMediaApi(keyword_ID, type) {
  return axios.get(
    `${config.BASE_URL}keyword/${keyword_ID}/${type}?${config.KEY}&language=ko-KR&page=1`,
  );
}
// 출연진
function creditsApi(mType, ID) {
  return axios.get(
    `${config.BASE_URL}${mType}/${ID}/credits?${config.KEY}&language=ko-KR&page=1`,
  );
}

// 참여 작품
function personCreditsApi(id) {
  return axios.get(
    `${config.BASE_URL}person/${id}/combined_credits?${config.KEY}&language=ko-KR&page=1`,
  );
}
// 인물 사진들
function personImagesApi(id) {
  return axios.get(
    `${config.BASE_URL}person/${id}/images?${config.KEY}&language=ko-KR&page=1`,
  );
}
//company keyword movie multi person tv
export {
  searchApi,
  detailApi,
  trending,
  genreApi,
  recommendationsApi,
  similarApi,
  kewordApi,
  keywordGetMediaApi,
  creditsApi,
  personCreditsApi,
  personImagesApi,
};
