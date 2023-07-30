//Expalin equality in Javascript?

// There are three types of equality operators in JavaScript:

// * The `==` operator compares the values of two operands and returns true if they are equal.
// * The `!=` operator compares the values of two operands and returns true if they are not equal.
// * The `===` operator compares the values and types of two operands and returns true if they are equal

// | Operator | Operand 1 | Operand 2 | Result |
// |---|---|---|---|
// | `==` | `1` | `1` | `true` |
// | `==` | `1` | `"1"` | `false` |
// | `==` | `1` | `true` | `false` |
// | `!=` | `1` | `1` | `false` |
// | `!=` | `1` | `"1"` | `true` |
// | `!=` | `1` | `true` | `true` |
// | `===` | `1` | `1` | `true` |
// | `===` | `1` | `"1"` | `false` |
// | `===` | `1` | `true` | `false` |

//JavaScript Has both strict and Type-converting comparision:

//Strict comparision (e.g., ===) checks for value equality without alowing coercion;
//abstract comparision(e.g ==) checks for value equality with coercion allowed

var a ="42";
var b = 42;

a == b;// true
a===b; //false , because type is different

