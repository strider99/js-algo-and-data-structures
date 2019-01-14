function validAnagram(str1, str2){
  if(str1.length != str2.length){
    return false;
  }
  var lookup = {};
  str1.split('').forEach(element => {
    lookup[element] ? lookup[element] += 1 : lookup[element] = 1;
  });
  str2.split('').forEach(element => {
    if(!lookup[element]){
      return false;
    }else{
      lookup[element] -= 1;
    }
  })
  return true
};

let res = validAnagram("omprakash", "hsakarpmo");
let res1 = validAnagram("omprakash", "asaswd");
console.log(res);
console.log(res1);