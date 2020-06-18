// 부분 공백 없애주는 함수
function replaceName(name) {
  return name.replace(/!HS|\s!HE\s/gi, '');
}

// 전체 공백 없애주는 함수
function allReplaceName(name) {
  return name.replace(/!HS|!HE|(\s*)/gi, '');
}

// 날짜 변환 함수
function repRlsDateReplace(date) {
  return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3');
}
// 포스터 분리
function splitPoster(posters) {
  return posters.split('|')[0];
}

// 키워드, 장르 특수 문자 제거
function specialStrRemove(list) {
  const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/gi;

  if (regExp.test(list)) {
    return list.length > 1 ? list.split(regExp)[1] : list.split(regExp)[0];
  }
}
export {
  replaceName,
  allReplaceName,
  repRlsDateReplace,
  splitPoster,
  specialStrRemove,
};
