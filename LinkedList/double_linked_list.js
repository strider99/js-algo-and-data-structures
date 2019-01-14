class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Implementing Push()
  push(val) {
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;

    }else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;

    }
    this.length++;
    return this;
  }
  // Implementing Pop
  pop(){
    if(!this.head) return undefined;
    let poppedNode = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;

    }
    this.length--;
    return poppedNode;
  }

  shift(){
    if(this.length === 0) return undefined;
    let oldHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;

    }else{

      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;

  }
  unshift(val){
    var newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    if(index <= this.length/2){
      var count = 0;
      var current = this.head;
      while(count != index){
        current = current.next;
        count++;
      }
    }else {
      var count =  this.length - 1;
      var current = this.tail;
      while(count != index){
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index,value){
    var foundNode = this.get(index);
    if(foundNode != null){
      foundNode.val = value;
      return true;
    }
    return false;
  }
  insert(index,val){
    if(index < 0 || index > this.length) return false;
    if(index === 0) return !!this.unshift(val);
    if(index === this.length) return !!this.push(val);


    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;

  }
  remove(index){
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;

  }

}

const list = new DoublyLinkedList();
list.push(1);
list.push(19);
list.push(123);
list.push(75);
list.insert(0, 99)
console.log(list);
list.remove(1);
console.log(list);