function reject(array, iteratorFunction) {
  let result = array.filter((item) => {
    return iteratorFunction(item) !== true;
  })
  return result;
}

var res = reject([10,20,30], function (number) {
  return number > 15;
});

console.log(res);