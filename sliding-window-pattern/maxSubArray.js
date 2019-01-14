function maxSubarraySum(arr,num) {
  // create a tempsum variable and assign it 0
  let tempsum = 0,maxsum = 0;
  // check for edge case error
  if(num > arr.length){
    return null;
  }
  // find the sum upto num and assign it to tempsum
  for(let i = 0; i < num; i++){
    maxsum += arr[i];
  }

  // assign tempsum to maxsum
 tempsum = maxsum;
  // run a loop to find new tempsum  by subtracting one element and adding the next element in the array and check whether it is greater than maxsum
  for(let i = num; i < arr.length; i++){
    tempsum = tempsum - arr[i - num] + arr[i];
    maxsum = Math.max(maxsum, tempsum);
  }

  return maxsum

}

let res = maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
console.log(res);