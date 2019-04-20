function viralAdvertising(n) {
  let initialPeople = 5;
  let cumulativeLikes = 0;

  for(let i = 1; i <= n; i++){
    let likesPerDay = Math.floor(initialPeople/2);
    cumulativeLikes += likesPerDay;
    initialPeople = likesPerDay * 3;

  }

  return cumulativeLikes;

}

let res = viralAdvertising(5);

console.log(res)