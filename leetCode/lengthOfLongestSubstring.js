function lengthOfLongestSubstring(s){
  let windowCharsmap = {};
  let windowStart = 0;
  let maxLength = 0;
  let maxWord = "";

  for(let i = 0; i < s.length; i++){
    const endChar = s[i];

    if(windowCharsmap[endChar] >= windowStart){
      windowStart = windowCharsmap[endChar] + 1;

    }
    // console.log(' object ', windowCharsmap);
    windowCharsmap[endChar] = i;
    if((i - windowStart + 1) > maxLength){

      maxWord = s.substr(windowStart, windowStart + maxLength + 1);
    }
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }

  return {maxLength, maxWord};
}

console.log(lengthOfLongestSubstring('ABCABCBBDUQHDL'));
