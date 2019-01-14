function repeatedString(s, n) {
  let len = s.length;
  let max_repetitions = Math.floor(n / len) + 1;
  let newStr = s.repeat(max_repetitions);
  let newStr_trimmed = newStr.substring(0, n);
  let count = 0;
  newStr_trimmed.split('').map(char => {
    if (char == 'a') {
      count++;
    }
  })
  return count;


}


const res = repeatedString('a',10000000);
console.log(res);