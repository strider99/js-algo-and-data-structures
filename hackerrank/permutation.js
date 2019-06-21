const checkPermutation = (str1, str2) => {
  const str1map = {}
  str1.split('').forEach(ele => {
    if(str1map[ele]){
      str1map[ele] += 1;
    }else{
      str1map[ele] = 1;
    }
  });

  str2.split('').forEach(ele => {
    if(str1map[ele]){
      str1map[ele] -= 1;
    }else{
      console.log(str1map)
    }
  })

  console.log(str1map)

}

checkPermutation('abc', 'aaabc');