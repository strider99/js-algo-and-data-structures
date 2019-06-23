function circularArrayRotation(a, k, queries) {

  // let elementsToBeInsertedToStart = a.slice(a.length - k);
  // let arrayWithAppendedValues = elementsToBeInsertedToStart.concat(a);
  // arrayWithAppendedValues.splice(arrayWithAppendedValues.length - k, k);

  // let positionsOfElements = queries.map(ele => arrayWithAppendedValues[ele]);
  // return positionsOfElements;
  let lengthOfArray = a.length;
  if(k > lengthOfArray){
    k = k % lengthOfArray;
  }
  let elementsToBeRemoved = a.splice(lengthOfArray - k, k);
  a.unshift(...elementsToBeRemoved);
  let res = queries.map(ele => a[ele]);
  return res


}

console.log(circularArrayRotation([3,4,5],2,[1,2]))
