function test(){
  console.log(this.a);
}

var obj = {
  a: 10,
  test: test
}

var a = "this is global";


setTimeout(obj.test, 100);
