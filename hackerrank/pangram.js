function pangrams(s) {

  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let alphabetArray = alphabet.split('');


  s.toLowerCase().split('').forEach(char => {
    if(alphabetArray.indexOf(char) != -1){
      alphabetArray.splice(alphabetArray.indexOf(char), 1);
    }
  })


  return alphabetArray.length ? 'not pangram' : 'pangram';


}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'));