const uniqueElements = arr => {
  let unique = 0;
  for(let i = 0; i < arr.length; i++){
    unique ^= arr[i];
    // console.log(unique)
  }
  return unique
}

// const uniqueElements = arr => {
//   let obj = {};

//   for(let i = 0; i < arr.length; i++){
//     if(obj[arr[i]]){
//       obj[arr[i]]++ ;
//     }else{
//       obj[arr[i]] = 1;
//     }
//   }

//   return obj;
// }

//  010
// 0100


let res = uniqueElements([1,3,4,2,1,4,2,3,1,4,5,6,2,6]);
// let i = Object.keys(res).find(key => res[key] == 1)
console.log(res)