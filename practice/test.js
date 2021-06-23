function* Test(params) {
  yield "hjjj";
  yield "mnmm";
  yield "kkk";
}

const value = Test();
console.log(typeof(value))
console.log(value.next());
console.log(value.next());
console.log(value.next());
console.log(value.next());
