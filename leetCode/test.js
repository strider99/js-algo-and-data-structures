function myWork(s){
  let objectmap = {};
  let windowStart = 0;
  let max = 0;
  for(let i = 0; i < s.length; i++){
    let endChar = s[i];
    if(objectmap[endChar] >= windowStart){
      windowStart = objectmap[endChar] + 1;
    }
    objectmap[endChar] = i;
    max = Math.max(max, i - windowStart + 1);
  }
  return max;
}

console.log(myWork('ABCABCBB'));