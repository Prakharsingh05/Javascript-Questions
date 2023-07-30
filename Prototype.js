//What is prototype ?
//

var myObject = {
    // This is a property of the object.
    property: "value",
  
    // This is a method of the object.
    method: function() {
      // This is the body of the method.
    }
  };
  
  // This is the prototype object.
  var prototype = Object.create(myObject);
  
  // This is a new object that inherits from the prototype object.
  var newObject = Object.create(prototype);
  
  // The new object has the same properties and methods as the prototype object.
  console.log(newObject.property);
  newObject.method();