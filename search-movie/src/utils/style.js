function slideWidth(length) {
  return length <= 5
    ? `100%`
    : length > 5 && length <= 10
    ? `calc(100% * 2)`
    : `calc(100% * 3)`;
}

export { slideWidth };
