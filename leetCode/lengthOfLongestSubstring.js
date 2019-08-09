function lengthOfLongestSubstring(){
  let windowCharsmap = {};
  let windowStart = 0;
  let maxLength = 0;

  for(let i = 0; i < s.length; i++){
    const endChar = s[i];
    if(windowCharsmap[endChar] >= windowStart){
      windowStart = windowCharsmap[endChar] + 1;

    }
    windowCharsmap[endChar] = i;
    maxLength = Math.max(maxLength, i - windowStart + 1);
  }
  return maxLength;
}