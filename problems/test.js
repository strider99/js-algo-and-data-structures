const twoSum = (arr, total) => {
  let hashTable = {};
  let result = []
  for(let i = 0; i < arr.length; i++){
    let currentEle = arr[i];
    let compliment = total - arr[i];

    if(hashTable[compliment]){
      result.push([currentEle, compliment]);
    }
    hashTable[currentEle] = true;

  }

  return result;
}
console.time('start');
console.log(twoSum([3, 9, 12, 20,15,6], 21));
console.timeEnd('start')