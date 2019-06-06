const debounce = (callbackFn, delay) => {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      interval = null;
      callbackFn(...args);
    }, delay);
  };
};
  debounce(function () {
    console.log('hello this is debounced function')
  }, 2000)('something passed as argument')