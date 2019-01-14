function product(...numbers) {


  return numbers.reduce(function (acc, number) {
    return acc * number;
  }, 1)
}