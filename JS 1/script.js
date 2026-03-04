// word vs keyword 
    // keyword - anything which has some reserved meaning in the language 
    // word - which doesn't has any meaning
    // keyword- for  let  const
    // word - good man computer   

// variable and constant  
    // used for storing data 
    // variable - value changes 
    // constant - value remains constant

// hoisting 
   // variable and functions are hoisted which means their declaration is moved on the code  
   // If we don't assign a value to a variable, its default value is undefined.

    // var a = 12 converts into 2 parts
    // var a;   (initialization) moves to top of the vs code {line 1}
    // a = 12 ;  (declaration)

   // ex:
   //  console.log(a);
   //  var a = 12;

// undefined and not defined 
   
// undefined
    // It is declared
    // existence
    // But no value has been assigned to it    
    // let x;
    // console.log(x); 
 
// not defined 
    // It was never declared
    // no existence 
    // And you try to access it    
    // console.log(y); // ReferenceError: y is not defined

// conditionals - if ,else ,else if
    
    // if - Executes a block of code only if a condition is true.
    // let age = 20;
    // if (age >= 18) {
    //      console.log("You are an adult.");
    //     }

    // else - Runs one block if the condition is true, and another if it’s false.
    //  let age = 16;
    //  if (age >= 18) {
    //   console.log("You can vote.");
    // } else {
    //   console.log("You are too young to vote.");
    // }

    // else if - Used when you have multiple conditions.
    //     let score = 75;
    // if (score >= 90) {
    // console.log("Grade A");
    // } else if (score >= 80) {
    // console.log("Grade B");
    // } else if (score >= 70) {
    // console.log("Grade C");
    // } else {
    // console.log("Fail");
    // }
    
// loops
    // loops let you repeat code multiple times.    
    // for loop
    // while loop

 // for loop - Used when you know how many times you want to run the loop.
    // for (start ; end ; change)
    // 0-10
    // for (var i = 0 ; i <11 ; i++)
    // {
    //     console.log(i) ;
    // }
   
 // while loop - A while loop keeps running again and again as long as something is true . It stops when that condition becomes false.

    // let i = 1;
    // while (i <= 5) {
    //   console.log(i);
    //   i++;
    // }

 // Functions: You write code once and give it a specific name. Whenever you want to use that code, you call the name instead of rewriting the entire code again.
 
    // Functions are mainly used for 3 purposes:
    
    // 1. When you want to run code later, not immediately.
    
        //     function sayHello() {
        //     console.log("Hello!");
        //     }
        //    sayHello();
    
    // 2. When you want to reuse the same code multiple times.  (reusability)

        //  function greet() {
        // console.log("Welcome!");
        //  }
        //  greet();
        //  greet();
        //  greet();
                
    
    // 3. When you want to use the same code with different data. (params/ arguments)

        //  function greet(name) {          // ← "name" is a parameter
        //  console.log("Hello " + name);
        // }
        // greet("Alice");              // ← "Alice" is an argument
        // greet("Bob");
        // greet("Charlie");

     // parameter - Parameters are variables inside the function definition.

     // Arguments - Arguments are the actual values you pass into the function when calling it.   

// Arrays: A normal variable can store only one value at a time. If you want to store multiple values in a single variable, you use an array. An array allows you to store more than one value in a single variable.    

    // Arrays store multiple values in a single variable,
    // and each value is stored at an index.

    // let arr = [ 1,2,3,4,5,6,7,8 ];
    // console.log(arr[0]);
    // console.log(arr[5]);
    // console.log(arr[7]);

//  let fruits = ["Apple", "Banana", "Mango"];
 
//  push() → Add to the End
//  fruits.push("Orange");
//  console.log(fruits);

// pop() → Remove from the End
// fruits.pop();
// console.log(fruits);

// unshift() → Add to the Beginning
// fruits.unshift("Grapes");
// console.log(fruits);

// shift() → Remove from the Beginning
// fruits.shift();
// console.log(fruits);

// splice() → Add, Remove, or Replace Anywhere
    // array.splice(startIndex, deleteCount, newItem)

    // add
        // fruits.splice(1, 0, "Kiwi");
        // console.log(fruits);
        // Adds "Kiwi" at index 1

    // Remove     
        // fruits.splice(1, 1);
        // console.log(fruits);
        // Removes 1 item at index 1

    // Replace 
        // fruits.splice(1, 1, "Pineapple");
        // console.log(fruits);
        // Replaces item at index 1

// object -  An object is a special variable that can store multiple values as key-value pairs. 
// Each key (also called property) is like a name.       

    // 1) Blank obj
        // let a = {};

    // 2) filled obj     
        // let person = {
        // name: "John",
        // age: 25,
        // city: "New York",
        // greet: function() {          // method
        // console.log("Hello " + this.name);
        // }
        //  };
        
    
    // accessing object value  
        // console.log(person.name)
        // console.log(person.age)
        //  person.greet();

    // Method- A method is a function that is a property of an object. A method can access the object’s properties using this.

    // Updating object properties
        // person.name = "Jane";

