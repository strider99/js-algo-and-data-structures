// Object literals in function
const canvasDimensions = function (width, initialHeight) {
  const height = initialHeight * 9 / 16;
  return {
    width,
    height
  };
}