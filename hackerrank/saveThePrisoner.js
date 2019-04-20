function saveThePrisoner(n, m, s) {
  let temp = n - s + 1;
  if(temp - m > 0){
    return m + s - 1;
  }else {

    if((temp - m) % n === 0) return Math.abs(n);
    else return Math.abs((temp - m) % n);
  }

}


const res = saveThePrisoner(5,2,1);
console.log(res);

//  * Thinking - from the starting position i am distributing sweets. if total sweets > n, circle back