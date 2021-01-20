function slideWidth(length) {
  return length <= 5
    ? `100%`
    : length > 5 && length <= 10
    ? `calc(100% * 4)`
    : `calc(100% * 5)`;
}

export { slideWidth };
