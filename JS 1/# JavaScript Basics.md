# JavaScript Basics

A beginner-friendly collection of JavaScript concepts with explanations and examples. This repository is intended for anyone starting their JavaScript journey.

---

## 📚 Topics Covered

- Keywords vs Words
- Variables & Constants
- Hoisting
- Undefined vs Not Defined
- Conditional Statements
- Loops
- Functions
- Arrays
- Objects

---

# 1. Keywords vs Words

### Keywords
Keywords are reserved words that already have a special meaning in JavaScript.

### Examples

```javascript
for
let
const
if
return
function
```

### Words
Words are simply identifiers created by developers. They don't have any special meaning until you assign one.

```javascript
good
computer
student
myVariable
```

---

# 2. Variables and Constants

Variables and constants are used to store data.

## Variable (`let`)

A variable's value can be changed.

```javascript
let age = 20;
age = 21;
```

## Constant (`const`)

A constant cannot be reassigned.

```javascript
const PI = 3.14;
```

---

# 3. Hoisting

Hoisting is JavaScript's behaviour of moving declarations to the top of their scope before execution.

Example:

```javascript
console.log(a);

var a = 12;
```

JavaScript internally treats it as:

```javascript
var a;

console.log(a); // undefined

a = 12;
```

### Important

- `var` is hoisted and initialized with `undefined`.
- `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until they are declared.

---

# 4. Undefined vs Not Defined

## Undefined

The variable exists but hasn't been assigned a value.

```javascript
let x;

console.log(x);
```

Output:

```
undefined
```

---

## Not Defined

The variable was never declared.

```javascript
console.log(y);
```

Output:

```
ReferenceError: y is not defined
```

---

# 5. Conditional Statements

Conditional statements execute code based on conditions.

## if

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}
```

---

## if...else

```javascript
let age = 16;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You are too young to vote.");
}
```

---

## else if

```javascript
let score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Fail");
}
```

---

# 6. Loops

Loops repeat code multiple times.

## For Loop

Used when you know the number of iterations.

```javascript
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
```

---

## While Loop

Runs as long as the condition remains true.

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

# 7. Functions

Functions let you write code once and use it multiple times.

## Basic Function

```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello();
```

---

## Reusability

```javascript
function greet() {
    console.log("Welcome!");
}

greet();
greet();
greet();
```

---

## Parameters and Arguments

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Alice");
greet("Bob");
greet("Charlie");
```

### Parameter

Variables inside the function definition.

```javascript
function greet(name)
```

### Argument

Actual values passed while calling the function.

```javascript
greet("Alice");
```

---

# 8. Arrays

Arrays store multiple values inside a single variable.

```javascript
let arr = [1,2,3,4,5,6,7,8];

console.log(arr[0]);
console.log(arr[5]);
console.log(arr[7]);
```

---

## Array Methods

### push()

Adds an element to the end.

```javascript
fruits.push("Orange");
```

---

### pop()

Removes the last element.

```javascript
fruits.pop();
```

---

### unshift()

Adds an element at the beginning.

```javascript
fruits.unshift("Grapes");
```

---

### shift()

Removes the first element.

```javascript
fruits.shift();
```

---

### splice()

Used to add, remove or replace elements.

### Add

```javascript
fruits.splice(1, 0, "Kiwi");
```

### Remove

```javascript
fruits.splice(1, 1);
```

### Replace

```javascript
fruits.splice(1, 1, "Pineapple");
```

---

# 9. Objects

Objects store data as key-value pairs.

## Empty Object

```javascript
let obj = {};
```

---

## Object with Properties

```javascript
let person = {
    name: "John",
    age: 25,
    city: "New York",

    greet: function () {
        console.log("Hello " + this.name);
    }
};
```

---

## Accessing Properties

```javascript
console.log(person.name);
console.log(person.age);

person.greet();
```

---

## Updating Properties

```javascript
person.name = "Jane";
```

---

## Methods

A method is simply a function stored inside an object.

```javascript
let person = {
    name: "John",

    greet() {
        console.log("Hello " + this.name);
    }
};
```

---

# 🎯 Summary

By completing these notes, you have learned:

- ✅ Keywords and identifiers
- ✅ Variables and constants
- ✅ Hoisting
- ✅ Undefined vs Not Defined
- ✅ Conditional statements
- ✅ Loops
- ✅ Functions
- ✅ Parameters & Arguments
- ✅ Arrays and common array methods
- ✅ Objects and methods

---


Happy Coding! 🚀