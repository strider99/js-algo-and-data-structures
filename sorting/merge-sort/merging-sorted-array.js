const merge = (arr1, arr2) => {
  // create a var to store results
  let results = [];
  let i = 0, j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;

    }else{
      results.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    results.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    results.push(arr2[j])
    j++;
  }

  return results;
}

console.log(merge([4, 8, 14, 18,19], [5,7,36,43,67]));