const range = (start, stop, step) => {
 return Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step))
}



console.log(range(1,20,2))
// console.log(range(1,100,1));

//  The same function can be used to generate alphabet sequence

let alphabets = range('A'.charCodeAt(0), 'Z'.charCodeAt(0),1).map(char => String.fromCharCode(char))

console.log(alphabets);