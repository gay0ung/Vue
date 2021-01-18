function checkTilte(data) {
  return data.title === data.original_title ? null : data.original_title;
}

function checkOverview(text) {
  return text === '' ? '등록된 줄거리가 없습니다.' : text;
}

export { checkTilte, checkOverview };
