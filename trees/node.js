class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
   constructor(){
     this.root = null;
   }
   insert(value){
    var newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
      return this.insert;
    }else{
      var current = this.root;
      while(true){
        if(current.value === value) return undefined;
        if(value < current.value){
          current = current.left;
        }else{
          current = current.right;
        }
      }
    }
   }
}

var tree = new BinarySearchTree();
tree.insert(10);
console.log(tree)