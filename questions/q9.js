function doSomething(){
  console.log(this.a);
}

function doSomethingElse(fn){
  fn();
}

var obj = {
  a: 10,
  doSomething: doSomething
}

a = "this is global";
obj.doSomething();

doSomethingElse(obj.doSomething);