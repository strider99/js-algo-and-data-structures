const maxSubarraySum = (arr,n) => {
  let tempsum = 0, maxsum = 0;
  if(arr.length < n )
    return null;

  for(let i = 0; i < n; i++){
    maxsum += arr[i];
  }
  tempsum = maxsum;

  for(let i = n; i < arr.length; i++){
    tempsum = tempsum - arr[i - n] + arr[i];
    maxsum = Math.max(tempsum,maxsum);
  }

  return maxsum

}

let res = maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
console.log(res);