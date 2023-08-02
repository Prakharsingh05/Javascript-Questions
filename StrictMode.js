//what is strictMode define with examples?


//Answer:-
//Strict mode is a JavaScript language mode that provides additional checks and restrictions on code. 
//It is designed to catch errors earlier and make your code more secure.

// Now, let's look at some examples of strict mode.

// **Example 1:** In strict mode, the following code will throw an error:


​
var x = undefined;
console.log(x);
​


// This is because in strict mode, variables must be declared before they are used.



// **Example 2:** In strict mode, the following code will also throw an error:


​
function foo() {
  return this;
}
​


// This is because in strict mode, the `this` keyword cannot be used without first assigning it to a value.

// **Example 3:** Finally, in strict mode, the following code will also throw an error:


​
for (var i = 0; i < 10; i++) {
  console.log(i);
}
​
// This is because in strict mode, the `for` loop must have a `break` or `continue` statement.



// To declare strict mode, you can use the `"use strict";` statement at the top of your code. For example:


​
"use strict";
​
var x = 10;
console.log(x);
​


// In this example, the `"use strict";` statement is at the top of the code. This tells the JavaScript engine that the code should be executed in strict mode.

