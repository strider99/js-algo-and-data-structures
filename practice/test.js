Math.floor = function(){
  console.log('method has been overridden')
  return 45;
}

console.log(Math.floor())