class ArrayList{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  push(value){
    this.data[this.length] = value;
    this.length++;
  }
  pop(){
    const poppedValue = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return poppedValue;

    // or you can just do
    // return this.delete(this.length-1);
  }
  get(index){
    return this.data[index];
  }
  delete(index){
    const deletedValue = this.data[index];
    this.collapseArray(index);
    return deletedValue;
  }
  collapseArray(index){
    for(let i = index; i < this.length; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length - 1];
    this.length--;

  }
}

var test1 = new ArrayList();
test1.push(12);
test1.push(5);
test1.push(19);
test1.push(22);
test1.push(50);
// console.log(test1);
// var res = test1.pop();
// console.log(test1);
let deleted = test1.delete(2);
console.log(deleted);
console.log(test1);