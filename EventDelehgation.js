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