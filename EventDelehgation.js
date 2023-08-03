//event delegation?

//In JavaScript, event delegation is a technique for handling events in a web page. 
//Event delegation is used when a single event listener is added to a parent element, instead of adding event listeners to each child element. 
//This reduces the amount of memory used by the page and improves the performance of the page.

//When an event is triggered on a child element, 
//the event listener is triggered on the parent element. 
//The event listener then handles the event on behalf of all the child elements.
// This is done by checking the target of the event and determining which child element the event was triggered on.

//In order to use event delegation, the parent element should have a unique identifier, such as a class or ID attribute. 
//The event listener should be added to the parent element, and it should use event bubbling to handle events on child elements.

//Here is an example of event delegation in JavaScript:


​
// Get the parent element.
var parent = document.getElementById("parent");
​
// Add a click event listener to the parent element.
parent.addEventListener("click", function(event) {
  // Check if the event was triggered on a child element.
  if (event.target.nodeName === "LI") {
    // Get the text of the clicked list item.
    var text = event.target.textContent;
    // Do something with the text.
    console.log(text);
  }
});
// ​
// In this example, the event listener is added to the parent element with ID "parent". When a child element with tag name "LI" is clicked, the event listener checks the target of the event and gets the text content of the clicked list item. The text content is then logged to the console.