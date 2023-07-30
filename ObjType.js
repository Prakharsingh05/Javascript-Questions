//what is the object type?

var obj={
    a: "hello world" , // property
    b: 123,
    c:true
};

obj.a;  // " hello world" , accessed with doted notation
obj.b; // 123
obj.c; // true

obj["a"]; // "hello world " , accesed with brackets notation
obj["b"]; // 123
obj["c"]; //true

//Brackets notaion is also useful when you eant to acces property / key but the name is store in another variable , such as:

var obj = {
    a: "hello world",
    b : 123,
};

var b = "a";

obj[b]; // "helloworld"
obj["b"]; // 123