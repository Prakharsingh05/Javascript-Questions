// //What is scope in js?
// //In JavaScript, scope is the region of a program where a variable is accessible. There are three types of scope in JavaScript:

// * **Local scope** is the scope of a variable that is declared inside a function.
// * **Function scope** is the scope of a variable that is declared inside a function declaration.
// * **Global scope** is the scope of a variable that is declared at the top level of a script.


// The following code shows an example of local scope:

function myFunctionOne() {
    var myVariable = "This is a local variable";
  }
  
  myFunctionOne();
  
  console.log(myVariable); // Error: myVariable is not defined

//   In this example, the variable `myVariable` is declared inside the function `myFunctionONe()`. 
//   This means that it is only accessible within the scope of `myFunctionOne()`.
// When we try to access `myVariable` outside of `myFunctionOne()`, we get an error.


// The following code shows an example of function scope:


​
function myFunction() {
  var myVariable = "This is a function variable";
​
  function myInnerFunction() {
    console.log(myVariable);
  }
​
  myInnerFunction();
}
​
myFunction();
​
// In this example, the variable `myVariable` is declared inside the function `myFunction()`. 
//However, it is also accessible inside the function `myInnerFunction()`. 
//This is because `myInnerFunction()` is declared inside `myFunction()`.



// The following code shows an example of global scope:


​
var myVariable = "This is a global variable";
​
console.log(myVariable);
​


// In this example, the variable `myVariable` is declared at the top level of the script. 
// This means that it is accessible from anywhere in the script.
