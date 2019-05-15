const uniqueElements = arr => {
  let obj = {};

  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]]){
      obj[arr[i]]++ ;
    }else{
      obj[arr[i]] = 1;
    }
  }

  return obj;
}

let res = uniqueElements([1,3,4,2,1,4,2,3,1,4,6,78,9,5,6,2]);
let i = Object.keys(res).find(key => res[key] == 1)
console.log(i)