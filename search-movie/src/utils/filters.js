function checkTilte(data) {
  return data.title === data.original_title ? null : data.original_title;
}

export { checkTilte };
