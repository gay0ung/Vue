function checkPoster(path) {
  return path === undefined || path === null
    ? `"https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg"`
    : `https://image.tmdb.org/t/p/original${path}`;
}

function checkBackDrop(path) {
  return path !== null ? `https://image.tmdb.org/t/p/original${path}` : null;
}

function checkProfileImg(path) {
  return path === null || path === undefined
    ? `"../../assets/images/—Pngtree—profile glyph black icon_4008321.png"`
    : `https://image.tmdb.org/t/p/original${path}`;
}

function checkStillpath(path) {
  return path !== null ? `https://image.tmdb.org/t/p/original${path}` : null;
}

export { checkPoster, checkBackDrop, checkProfileImg, checkStillpath };
