function test(){
  console.log(this.a);
}

var obj = {
  a: 2,
  hello: test
}

obj.hello();


