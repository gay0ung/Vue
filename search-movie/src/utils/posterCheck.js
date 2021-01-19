function checkPoster(data) {
  let path = '';
  if (!data.poster_path) {
    path = data.profile_path;
  } else {
    path = data.poster_path;
  }

  return path === undefined || path === null
    ? 'https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg'
    : `https://image.tmdb.org/t/p/original${path}`;
}

function checkBackDrop(path) {
  return path !== null ? `https://image.tmdb.org/t/p/original${path}` : null;
}

export { checkPoster, checkBackDrop };
