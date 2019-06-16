function Foo(arr1, arr2){
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      for(let k = 0; k < 1000; k++){
        console.log(arr[i] + ' ' + arr[j]);
      }
    }
  }
}

Foo([1,2,3,4,5,6,], [1,4,5,67,8,32,7,9,4,]);

// * The time complexity will be O(ab);
