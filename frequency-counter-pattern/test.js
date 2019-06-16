


  function checkSquareExists(arr1, arr2){
    if(arr1.length != arr2.length){
      return false;
    }
    for(let i = 0; i < arr1.length; i++){
      let indexFound = arr2.indexOf(arr1[i] ** 2);
      if(indexFound == -1){
        return false;
      }else{
        arr2.splice(indexFound,1);
      }
    }

    return true;
  }

  var t1 = performance.now()
  var res = checkSquareExists([1,2,4,5], [16,4,1,10]);
  var t2 = performance.now();
  console.log(res);
  console.log(t2 - t1)