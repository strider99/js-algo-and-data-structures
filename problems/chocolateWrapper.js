/*
A shop was selling 3 chocolates for ₹1 and
if you return three wrappers you get 1 chocolate free.
If so, how many chocolates can you get for ₹65536.
*/

/**
 * Price of 3 Chocos = 1 INR
 * Price of 1 Choco = 3 Wrappers
 **/

function buyWithMoney(amount) {
  return function chocolates(amount, wrappers = 0, chocos = 0){
    const moreChocos = 3 * amount + Math.floor(wrappers / 3);
    const totalChocos = chocos + moreChocos;
    wrappers = wrappers % 3 + moreChocos;

    console.log(`Chocos: ${totalChocos}`);
    console.log(`Wrappers: ${wrappers}\n`);

    if (wrappers < 3) {
      return totalChocos;
    }

    return chocolates(0, wrappers, totalChocos)
  }(amount);
}

console.log(buyWithMoney(65536)); // 294911