function jumpingOnClouds(c) {
  let count = 0;
  let n = 0;
  while(n < c.length - 1){

    c[n+2] != 1 ? n+=2 : n++;
    count++;
  }
  return count;

}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]));