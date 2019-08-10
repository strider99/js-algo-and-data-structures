// * this question may be a bit difficult at first sight but it becomes clear when you go through it line by line

function foo(something) {
	console.log( this.a, something );
	return this.a + something;
}

var obj = {
	a: 2
};

var bar = function() {
	return foo.apply( obj, arguments );
};

var b = bar( 3 );
console.log( b );
 