const findPermutation = (str1, str2) => {
  let perm = str2;
  for (let i =0; i <str1.length;i++) {
    perm = perm.replace(str1[i], '')
  }
  return perm.length === 0 && str1.length === str2.length;
}

Time1: O(S1)
Spc1: O(S1)

Time2: O(S2)
Space: O(S2)

Time: O((S))

Time: O(3S) => O(S)
Space: O(2S) => O(S)


// 11574074 Days

// 11574074 Days => 31709 years
// 11.5 Days



const res = findPermutation('aab', 'baa');
console.log(res);


// const res = findPermutation('omprakash', 'kas');
// console.log(res);
// // console.assert(!res, 'omprakash and kas are not perms');

// const res1 = findPermutation('omprakash', 'ahsarkmpo');
// console.log(res1);
// // console.assert(res1, 'omprakash and ahsarkmpo are perms')