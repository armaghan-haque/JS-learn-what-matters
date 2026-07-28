# JavaScript Basics

## 📚 Topics Covered

1. Word vs Keyword
2. Variable and Constant
3. Hoisting
4. Undefined and Not Defined
5. Conditionals
   - if
   - else
   - else if
6. Loops
   - for Loop
   - while Loop
7. Functions
   - Why Functions are Used
   - Parameters
   - Arguments
8. Arrays
   - Accessing Array Elements
   - push()
   - pop()
   - unshift()
   - shift()
   - splice()
     - Add
     - Remove
     - Replace
9. Objects
   - Blank Object
   - Filled Object
   - Accessing Object Values
   - Methods
   - Updating Object Properties


   # JavaScript Basics

> Beginner-friendly notes covering the fundamentals of JavaScript.

---

# 1. Keywords and Words

## Definition

- **Keyword** - Anything which has some reserved meaning in the language.
- **Word** - Which doesn't has any meaning.

## Examples

### Keywords

- `for`
- `let`
- `const`

### Words

- `good`
- `man`
- `computer`

---

# 2. Variables and Constants

## Definition

Used for storing data.

- **Variable** - Value changes.
- **Constant** - Value remains constant.

---

# 3. Hoisting

## Definition

Variables and functions are hoisted, which means their declaration is moved on the code.

If we don't assign a value to a variable, its default value is `undefined`.

## How `var` Works

```javascript
var a;   // initialization (moves to the top)
a = 12;  // declaration
```

## Example

```javascript
console.log(a);
var a = 12;
```

---

# 4. Undefined vs Not Defined

## Undefined

### Definition

- It is declared.
- Exists.
- But no value has been assigned to it.

### Example

```javascript
let x;
console.log(x);
```

## Not Defined

### Definition

- It was never declared.
- Does not exist.
- And you try to access it.

### Example

```javascript
console.log(y);
```

---

# 5. Conditional Statements

Conditional statements execute different blocks of code based on conditions.

## if Statement

### Definition

Executes a block of code only if a condition is true.

### Example

```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}
```

---

## else Statement

### Definition

Runs one block if the condition is true, and another if it's false.

### Example

```javascript
let age = 16;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You are too young to vote.");
}
```

---

## else if Statement

### Definition

Used when you have multiple conditions.

### Example

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

Loops let you repeat code multiple times.

## Types of Loops

- `for` loop
- `while` loop

---

## for Loop

### Definition

Used when you know how many times you want to run the loop.

### Example

```javascript
for (var i = 0; i < 11; i++) {
    console.log(i);
}
```

---

## while Loop

### Definition

A `while` loop keeps running again and again as long as something is true.

It stops when that condition becomes false.

### Example

```javascript
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

---

# 7. Functions

## Definition

You write code once and give it a specific name.

Whenever you want to use that code, you call the name instead of rewriting the entire code again.

## Why Functions are Used

### 1. Execute Code Later

#### Example

```javascript
function sayHello() {
    console.log("Hello!");
}

sayHello();
```

---

### 2. Reuse Code (Reusability)

#### Example

```javascript
function greet() {
    console.log("Welcome!");
}

greet();
greet();
greet();
```

---

### 3. Use Different Data (Parameters & Arguments)

#### Example

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Alice");
greet("Bob");
greet("Charlie");
```

#### Parameter

Parameters are variables inside the function definition.

#### Argument

Arguments are the actual values passed when calling the function.

---

# 8. Arrays

## Definition

A normal variable can store only one value at a time.

If you want to store multiple values in a single variable, you use an array.

Arrays store multiple values in a single variable, and each value is stored at an index.

## Accessing Array Elements

```javascript
let arr = [1,2,3,4,5,6,7,8];

console.log(arr[0]);
console.log(arr[5]);
console.log(arr[7]);
```

### Example Array

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

## Common Array Methods

### push() – Add to the End

#### Example

```javascript
fruits.push("Orange");
console.log(fruits);
```

### pop() – Remove from the End

#### Example

```javascript
fruits.pop();
console.log(fruits);
```

### unshift() – Add to the Beginning

#### Example

```javascript
fruits.unshift("Grapes");
console.log(fruits);
```

### shift() – Remove from the Beginning

#### Example

```javascript
fruits.shift();
console.log(fruits);
```

### splice() – Add, Remove, or Replace Anywhere

#### Syntax

```javascript
array.splice(startIndex, deleteCount, newItem);
```

#### Add

```javascript
fruits.splice(1, 0, "Kiwi");
console.log(fruits);
```

#### Remove

```javascript
fruits.splice(1, 1);
console.log(fruits);
```

#### Replace

```javascript
fruits.splice(1, 1, "Pineapple");
console.log(fruits);
```

---

# 9. Objects

## Definition

An object is a special variable that can store multiple values as key-value pairs.

Each key (also called a property) is like a name.

## Creating Objects

### Blank Object

```javascript
let a = {};
```

### Filled Object

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

## Accessing Object Properties

```javascript
console.log(person.name);
console.log(person.age);

person.greet();
```

## Methods

### Definition

A method is a function that is a property of an object.

A method can access the object's properties using `this`.

## Updating Object Properties

```javascript
person.name = "Jane";
```