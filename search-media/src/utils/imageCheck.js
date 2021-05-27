function checkImages(path) {
  return !path
    ? 'https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg'
    : `https://image.tmdb.org/t/p/original${path}`;
}

export { checkImages };
