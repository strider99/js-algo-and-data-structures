const maxSumSubArray = (arr, k) => {
  let sum = 0;
  let max = 0;

  for(let i = 0; i < arr.length; i++){
    sum += arr[i];

    if(i >= k - 1){
      max = Math.max(max, sum);
      sum = sum - arr[i - (k-1)];
    }

  }
  return max;
}

console.log(maxSumSubArray([4,2,1,7,8,1,2,8,1,0],3))
;