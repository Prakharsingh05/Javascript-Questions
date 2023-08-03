// //explain lexical environment?

// In JavaScript, the lexical environment is the set of variables, functions, and objects that are available to a piece of code during the execution of that code.

// // The lexical environment is created when the code is compiled and is tied to the function or block of code that contains the code. 

// The lexical environment is created when the code is executed, and it remains constant throughout the execution of the code.

// The lexical environment is created by the scope chain, which is a list of objects that are searched for variables and functions when the code is executed. 

// When a variable or function is referenced in the code, the JavaScript engine searches for it in the current lexical environment, 

// then the enclosing lexical environment, and so on, until the variable or function is found or the lexical environment chain is exhausted.

// The lexical environment is created at the time of function definition and remains constant throughout the execution of the function. 

// However, the lexical environment can be modified by the use of the "var", "let", and "const" keywords, which create variables that are local to the current scope. 

// These variables are not visible outside of the current scope, and their scope is limited to the block of code that they are defined in.