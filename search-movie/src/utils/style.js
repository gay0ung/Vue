function slideWidth(length) {
  return length <= 5
    ? `100%`
    : length > 5 && length <= 10
    ? `calc(100% * 2)`
    : length > 10 && length <= 15
    ? `calc(100% * 3)`
    : `calc(100% *4)`;
}

export { slideWidth };
