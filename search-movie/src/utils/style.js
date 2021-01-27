function calculatedSlideWidth(length) {
  const lenCheck = Math.ceil(length / 5);

  return `${100 * lenCheck}%`;
}

export { calculatedSlideWidth };
