Yes — I understand the format you want. I’ll keep your original content exactly as you gave it, but structure it like the example: numbered sections, #/## headings, explanatory paragraphs, fenced JavaScript blocks, and separators where appropriate.

JavaScript Concepts – Interview Summary
JavaScript Concepts – Interview Summary
1. Higher Order Function

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

2. Constructor Function

It is a function used to create and initialize multiple objects with the same structure.

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

3. First-Class Function

A first-class function means that functions are treated like any other value. You can:

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

4. New Keyword

The new keyword is used to create a new object from a constructor function .

It creates a blank object, sets this to that object, initializes it with the given values, and returns the new object.

ex

function abcd(){
    this.age = 24;
}

new abcd()

{
    age : 24;  // creates a blank objects and initializes it with the given values
}

5. IIFE

An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after it is created.

syntax

(function () {
    console.log("IIFE executed!");
})();

Why Use an IIFE?

To execute code only once.

To create a private scope so variables inside the function don't affect the rest of the program.

(function () {
    let message = "Hello";
    console.log(message);
})();

// console.log(message); // Error: message is not defined


here, message exists only inside the IIFE.

let ans = (function(){
    let privateval = 12;
    
    return {
        getter : function(){
            console.log(privateval);
        },

        setter : function(val) {
            privateval = val; 
        }

    }
})()

6. Prototype

A prototype is an object that lets multiple objects share the same methods and properties.

[[prototype]] contains many helper properties and methods which we can use to complete our task, we use .length property on array, did we created length on that array, no! but it still contains length, the question is how ?

the answer is, many properties and methods are already available to use built by javascript creators inside prototype of every object.

7. Prortype Inheritance

Prototype inheritance is the mechanism by which one object can access the properties and methods of another object through its prototype.

let human = {
    canFly : false,
    canTalk : true,
    canwalk : true,
    haveEmotions : true
}

let codingstudents={
    canMakeaAmazingWebsites : true,
    canSolveDsa : true
}

codingstudents.__proto__ = human;

8. Scope

Variables or declarations written outside any block {}, function are in the global scope

let a = 10; // Global scope

{
  let b = 20; // Block scope
}

9. This Keyword

this keyword is a special keyword in js which changes it's value in different context

In Global Scope
console.log(this);   // gives window

In Function Scope
function abcd(){
    console.log(this);    // gives window
}

abcd()

In Method Scope
let obj = {
    name : "arman",
    somemethod : function(){    // gives method.
        console.log(this);
    }
}

obj.somemethod()


// In any method this refers always to the parent object

10. Call Apply Bind

To change the function's this value to the object of our choice we can use call ,apply bind

call: