function abcd(){
  console.log(this.a);
}

var item2 = {
  a: 5,
  item1: item1
}


var item1 = {
  a: 10,
  abcd: abcd
}






item2.item1.abcd()