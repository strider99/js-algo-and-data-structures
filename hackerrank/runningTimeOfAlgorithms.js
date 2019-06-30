function runningTime(arr) {
  let length = arr.length;
  let shifts = 0;
  for (let i = 1; i < length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
          shifts++;
      }
      arr[j + 1] = key;
  }
  return shifts;

}

console.log(runningTime([2,1,3,1,2]));