function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let count = 0;
    let cost = p;
    while (cost <= s) {
        if ((p - d) <= m) {
            cost += m;
            count++;
        } else {
            p = p - d;

            cost += p;
            count++;
        }
    }
    return count;

}

console.log(howManyGames(45,53,40,6366))