// 쿠키 저장
function saveToCookie(type, value) {
  document.cookie = `${type}=${value}`;
}

// 쿠키 가져오기
function getCookieFromTitle() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)movie-title\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}
function getCookieFromOption() {
  return document.cookie.replace();
}
export { saveToCookie, getCookieFromTitle, getCookieFromOption };
