//Explain arrays in javascript?

// An array is a data structure that stores data in a sequential order. 
// In JavaScript, arrays are defined using the square brackets `[]`. 
// For example, the following code defines an array called `myArray` that stores the numbers 1, 2, and 3:

var myArray = [1,2,3];
//We can access individual elements of an array by their index (position) within the bracket notation

console.log(myArray[0]);
// Output: "1" - The first element has an index of zero


//You can also add elements to an array using the `push()` method. The `push()` method takes a single argument, which is the value to be added to the array. For example, the following code adds the number 4 to the `myArray` array:
myArray.push(4);

console.log(myArray);//[1,2,3,4]


//You can also remove elements from an array using the `pop()` method. 
//The `pop()` method removes the last element from the array.

myArray.pop(); 
//Removes the number '4' at position 3 since

console.log(myArray);

//You can also get the length of an array using the `length` property. 
console.log(myArray.length);

