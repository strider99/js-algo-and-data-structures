

const findPermutation = (str1, str2) => {
  let perm = str2;
  for (let i =0; i <str1.length;i++) {
    perm = perm.replace(str1[i], '')
  }

  return perm.length === 0 && str1.length === str2.length;
}


const res = findPermutation('omprakash', 'kas');
console.log(res);
// console.assert(!res, 'omprakash and kas are not perms');

const res1 = findPermutation('omprakash', 'ahsarkmpo');
console.log(res1);
// console.assert(res1, 'omprakash and ahsarkmpo are perms')