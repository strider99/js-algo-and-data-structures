function buyWithmoney(amount) {

    var totalChocolates = amount * 3;
    var start = totalChocolates;
    while(start > 2){
        if(start % 3 == 0){
            totalChocolates += parseInt(start / 3);
            start = parseInt(start / 3);
        }
        else {
            var rem = start % 3;
            totalChocolates = totalChocolates +  parseInt(rem) + parseInt(start / 3);
            start = parseInt(start / 3);
        }
    }
    return totalChocolates;
}

console.log(buyWithmoney(65536));
