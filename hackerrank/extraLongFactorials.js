function extraLongFactorials(n) {

  const bigNumber = require('bignumber.js');
  let result = new bigNumber(1);
  for (let i = 1; i <= n; i++){
      result = result.times(i);
  }
  console.log(result.toFixed());
}

extraLongFactorials(25)