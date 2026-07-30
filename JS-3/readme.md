
higher order fucntion

A higher-order function is a function that either accepts one or more functions as arguments or returns a function as its result.

ex


function abcd (){

}
abcd(function(){})

function abcd(){
    return function(){}
}
abcd()

ex- for each function
let arr = [1,2,3,4]
arr.forEach(function(){})

constructor function
It is a  function used to create and initialize multiple objects with the same structure.

It is invoked with the new keyword, which creates a new object and Use this to assign properties to the new object.
ex
function circularButton (color){
    this.radius  = 2;
    this.color = color;
    this.icon = false;
    this.pressable = true;
}

let redbtn = new circularButton("red");
let greenbtn = new circularButton("green");

first-class function
A first-class function  means that functions are treated like any other value. You can:

Assign a function to a variable.
let abcd = function(){

}

Pass a function as an argument to another function.
function abcd (){

}
abcd(function(){})

Return a function from another function.
function abcd(){
    return function(){}
}
abcd()

Store a function in an object or array.
const person = {
    name: "Alice",
    greet: function() {
        console.log("Hello");
    }
};
Store a function in an object or array.
person.greet();

new keyword
The new keyword is used to create a new object from a constructor function or class. It creates an empty object, sets this to that object, initializes it with the given values, and returns the new object.