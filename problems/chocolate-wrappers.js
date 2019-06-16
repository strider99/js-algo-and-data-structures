

const getChocolates = (amount) =>{
    return function chocolates(amount, wrappers = 0, chocos = 0){
      const chocolatesEveryTurn = 3 * amount + Math.floor(wrappers / 3);
      const total = chocos + chocolatesEveryTurn;
      wrappers = wrappers % 3 + chocolatesEveryTurn;


      if (wrappers <= 2) {
        return total;
      }

      return chocolates(0, wrappers, total)
    }(amount);
  }

  console.log(getChocolates(5)); // 294911
  // console.log(buyWithMoney(5)); // 22
