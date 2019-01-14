// Stacks
//  functions - push, pop, peek (for displaying top element), length

var Stack = function () {
	this.count = 0;
	this.storage = {};

// Adds a value to the end of the stack
	this.push = (value) => {
		this.storage[this.count] = value;
		this.count++;
	}


// Removes and returns the value at the end of the stack
	this.pop = function() {
		if(this.count === 0) {
			return undefined;
		}

		this.count--; //this line is above the following bcz 
		// otherwise count would be length of the array and it would be undefined
		// the count-- makes this.count the last element of the array.
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	// Return the size of the stack

	this.size = function() {
		return this.count;
	}

	this.peek = function() {
		return this.storage[this.count - 1];
	}

}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.pop());
myStack.peek();
myStack.push(4);
myStack.pop();
myStack.push(5);
myStack.push(6);
myStack.peek();