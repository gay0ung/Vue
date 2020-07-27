import axios from 'axios';
import { setInterceptors } from './common/interceptors';

// 액시오스 초기화 함수
function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    // headers: {
    //   // 빈값을 먼저 보여준다(갱신된것을 보여주진 않는다.)
    //   Authorization: store.state.token,
    // },
  });
  return setInterceptors(instance);
}
const instance = createInstance();

// 회원가입 API
function registerUser(userData) {
  return instance.post('signup', userData);
  // promise기반으로 return해서 사용해야 한다.
}

// 로그인 API
function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
