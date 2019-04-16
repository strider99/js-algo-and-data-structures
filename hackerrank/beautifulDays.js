
function beautifulDays(i, j, k) {
  let diff = j - i + 1;

// * Below is one nifty code for generating an array of numbers in a range.
  let arrayOfNumbers = Array.from(new Array(diff), (x, y) => y + i);

  let totalBeautifulDays = (arrayOfNumbers.filter(item => Math.abs(item - item.toString().split('').reverse().join('')) % k === 0)).length;
  return totalBeautifulDays;

}

// * Explanation :
