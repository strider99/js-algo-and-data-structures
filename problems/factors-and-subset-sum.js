const factors = number => [...Array(number + 1).keys()]
.filter(i => number % i === 0)

console.log()