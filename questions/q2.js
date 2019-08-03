function abcd(){
  console.log(this.a);
}

var item1 = {
  a: 10,
  abcd: abcd
}


var item2 = {
  a: 5,
  item1: item1
}




item2.item1.abcd()