function main(stdin_input){
  // console.log(stdin_input);
  var input = stdin_input.split('\n');
  var T = parseInt(input[0]);
  const arr1 = input[1].split(' ');
  const arr2 = input[2].split(' ');
 const sum = [];
 let i = 0;
 while(i < T){
     sum.push(Number(arr1[i]) + Number(arr2[i]));
     i++;
 }
 console.log(sum.join(' '));


}


main('5 \n 1 2 3 4 5 \n 4 5 3 2 10')