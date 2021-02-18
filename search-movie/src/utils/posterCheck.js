function chekcImages(path) {
  // console.log(path);
  return path === null
    ? `"https://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg"`
    : `https://image.tmdb.org/t/p/original${path}`;
}

function checkProfileImg(path) {
  return path === null
    ? '../../assets/images/user-solid.svg'
    : `https://image.tmdb.org/t/p/original${path}`;
}

function checkStillpath(path) {
  return path !== null ? `https://image.tmdb.org/t/p/original${path}` : null;
}

export { chekcImages, checkProfileImg, checkStillpath };
