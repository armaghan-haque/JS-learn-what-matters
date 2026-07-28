# Async/Await: Modern Syntax for Handling Promises

## Introduction

After Promises, JavaScript introduced **async/await** as a cleaner and more readable way to handle asynchronous operations.

`async/await` is **not a replacement for Promises**. Instead, it is built on top of Promises and provides a simpler syntax that makes asynchronous code look like synchronous code while still maintaining JavaScript's non-blocking behaviour.

---

# What is Async/Await?

`async` and `await` are JavaScript keywords used to work with Promises.

* `async` is used before a function declaration.
* An **async function always returns a Promise**.
* `await` is used **inside an async function** to wait for a Promise to settle.

## Example

```javascript
async function getData() {
    return "Data received";
}
```

Although the function returns a normal string, JavaScript automatically wraps it inside a Promise.

It behaves like this:

```javascript
function getData() {
    return Promise.resolve("Data received");
}
```

---

# The `async` Keyword

The `async` keyword marks a function as asynchronous.

### Example

```javascript
async function greet() {
    return "Hello";
}

greet().then(console.log);
```

### Output

```text
Hello
```

Even though `"Hello"` is returned directly, the function actually returns a Promise.

---

# The `await` Keyword

The `await` keyword pauses the execution of the current async function until the Promise is either fulfilled or rejected.

It can only be used inside an async function.

### Example

```javascript
async function processOrder() {

    await checkInventory();
    await createOrder();
    await chargePayment();
    await sendInvoice();

    console.log("All done");
}
```

Execution flow:

```text
Check Inventory
        ↓
Create Order
        ↓
Charge Payment
        ↓
Send Invoice
        ↓
      All Done
```

The code executes in a top-to-bottom order, making it much easier to read.

Internally, JavaScript still performs these operations asynchronously.

---

# Does `await` Block the Main Thread?

A common interview question is:

> **If `await` pauses execution, does it block JavaScript?**

**Answer:** **No.**

`await` pauses **only the current async function**.

It **does not block**:

* The JavaScript main thread
* User interactions
* Other asynchronous operations
* Event handling

While the function waits for a Promise, JavaScript continues executing other tasks using the **Event Loop** and **Microtask Queue**.

---

# Example: Non-Blocking Behaviour

```javascript
async function fetchUser() {

    const user = await getUserFromAPI();

    console.log(user);

}

console.log("Start");

fetchUser();

console.log("End");
```

### Output

```text
Start
End
User Data
```

### Explanation

1. `"Start"` is printed.
2. `fetchUser()` begins execution.
3. `await` pauses only `fetchUser()`.
4. JavaScript immediately continues.
5. `"End"` is printed.
6. Once the API responds, `"User Data"` is printed.

This demonstrates JavaScript's non-blocking nature.

---

# Error Handling with Async/Await

Promises typically handle errors using `.catch()`.

With `async/await`, the preferred approach is `try...catch`.

### Example

```javascript
async function processOrder() {

    try {

        await checkInventory();
        await createOrder();
        await chargePayment();
        await sendInvoice();

        console.log("Order completed successfully");

    } catch (error) {

        console.log("Order failed:", error);

    }

}
```

### How It Works

If any awaited Promise is rejected:

* Execution immediately stops.
* Control jumps to the `catch` block.
* The error is handled in one place.

This results in cleaner and more maintainable code.

---

# Handling Errors for Individual Steps

Sometimes different asynchronous operations require different error handling.

### Example

```javascript
async function processPayment() {

    try {

        await chargePayment();
        console.log("Payment successful");

    } catch (error) {

        console.log("Payment failed");

    }

}
```

Using separate `try...catch` blocks allows each operation to respond differently to failures.

---

# Complete Order Processing Example

```javascript
async function processOrder() {

    try {

        await checkInventory();
        await createOrder();
        await chargePayment();
        await sendInvoice();

        console.log("Order completed");

    } catch (error) {

        console.log("Something went wrong:", error);

    }

}
```

This approach is much easier to understand than nested callbacks or long Promise chains.

---

# Async/Await vs Promises vs Callbacks

| Approach        | Description                                      | Advantages                                                | Disadvantages                                      |
| --------------- | ------------------------------------------------ | --------------------------------------------------------- | -------------------------------------------------- |
| **Callbacks**   | Functions passed into asynchronous operations    | Simple for small tasks                                    | Callback hell, difficult error handling            |
| **Promises**    | Objects representing future asynchronous results | Better chaining and centralised error handling            | Long `.then()` chains can become difficult to read |
| **Async/Await** | Cleaner syntax built on top of Promises          | Looks synchronous, highly readable, simple error handling | Requires understanding of Promises                 |

---

# Execution Flow Comparison

## Using Callbacks

```text
Task 1
 └── Task 2
      └── Task 3
           └── Task 4
```

Deep nesting makes the code harder to read.

---

## Using Promises

```text
Task 1
   ↓
.then()
   ↓
Task 2
   ↓
.then()
   ↓
Task 3
   ↓
.catch()
```

Promises flatten the structure and centralise error handling.

---

## Using Async/Await

```text
await Task 1
      ↓
await Task 2
      ↓
await Task 3
      ↓
await Task 4
```

The code reads like synchronous code while remaining asynchronous.

---

# Why Async/Await is Preferred

Modern JavaScript applications prefer `async/await` because it offers:

* Cleaner and more readable code
* Less nesting than callbacks
* Easier debugging
* Simpler error handling with `try...catch`
* Better maintainability for complex asynchronous workflows

---

#  Summary (45–60 Seconds)

> Async/await is a modern JavaScript syntax built on top of Promises to simplify asynchronous programming. An `async` function always returns a Promise, and the `await` keyword pauses only that function until a Promise settles. Although `await` waits for the result, it does not block the JavaScript main thread. Other tasks continue running through the Event Loop while the async function is suspended. Compared to Promise chains and callbacks, async/await provides cleaner, more readable code that follows a linear flow. Errors are handled using `try...catch`, making asynchronous code easier to understand, debug, and maintain.

---

# Key Takeaways

* `async` functions always return a Promise.
* `await` can only be used inside an async function.
* `await` pauses only the current async function, not the JavaScript main thread.
* JavaScript remains non-blocking while waiting for asynchronous operations.
* `try...catch` provides clean and centralised error handling.
* Async/await is built on top of Promises.
* Async/await improves readability and maintainability compared to callbacks and Promise chains.
