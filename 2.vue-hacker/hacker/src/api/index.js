// 요청 시스템(장치)_ 요청하기 위한 애들만 여기에 가져온다.
import axios from "axios";

// 1.http request & respons 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2.api함수들을 정리 : 데이터를 가져오는 행동 대장들
function fetchListItem(pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}
// user
function fetchUserInfo(userName) {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}
function fetchCommentItem(commentId) {
  return axios.get(`${config.baseUrl}item/${commentId}.json`);
}

// 3. export : 행동대장들을 actions가 쓸 수 있도록 export해둠.
export { fetchListItem, fetchCommentItem, fetchUserInfo };
