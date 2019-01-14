function validAnagram(str1,str2){
  if(str1.length != str2.length){
    return false;
  }
  let frequencyStr1={}, frequencyStr2={};
  str1.split('').forEach(i => {
    frequencyStr1[i] = (frequencyStr1[i] || 0) + 1;
  })

  str2.split('').forEach(i => {
    frequencyStr2[i] = (frequencyStr2[i] || 0) + 1;
  })

  for(let key in frequencyStr1){
    if(!(key in frequencyStr2)){
      return false;
    }
    if(frequencyStr1[key] != frequencyStr2[key]){
      return false;
    }
  }
  return true;


}

let res = validAnagram("omprakash", "hsakarpmo");
let res1 = validAnagram("omprakash", "asaswd");
console.log(res);
console.log(res1);