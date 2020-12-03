// 쿠키 저장
function saveToCookie(type, value) {
  document.cookie = `${type}=${
    typeof value !== 'object' ? value : JSON.stringify(value)
  }`;
}
function saveToCookieArr(name, arr) {
  let str = '';
  for (let key in arr) {
    if (str !== '') str += ',';
    str += `${key}:${arr[key]}`;
  }
  saveToCookie(name, str);
}
// 쿠키 가져오기

function getCookieFromTitle() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)movie-title\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function getCookieFromDetailID() {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)id\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
export {
  saveToCookie,
  saveToCookieArr,
  getCookieFromTitle,
  getCookieFromDetailID,
  deleteCookie,
};
