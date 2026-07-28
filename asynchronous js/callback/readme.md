
# Problems with Synchronous Code and the Need for Asynchronous Handling

After understanding synchronous and asynchronous execution, it's important to understand **why asynchronous programming is necessary** and how JavaScript evolved from callbacks to Promises and `async/await`.

---

# Why Synchronous Code is a Problem

The biggest drawback of synchronous execution is that it **blocks the main thread**.

Imagine an application that needs to:

* Fetch data from a database
* Call an external API
* Read a large file
* Process a payment

These operations may take several seconds to complete.

If JavaScript executed them synchronously:

* The application would stop executing other code.
* The user interface would become unresponsive.
* The application would appear frozen until the operation completed.

In other words, the CPU spends time waiting for an external system instead of doing useful work.

---

# How JavaScript Solves This Problem

JavaScript solves this issue through **asynchronous programming**.

Instead of waiting for a long-running operation to finish, JavaScript:

1. Starts the asynchronous task.
2. Continues executing the remaining code.
3. Processes the result once the task completes.

This allows applications to remain responsive while waiting for data from servers, databases, or other external resources.

---

# Example: `setTimeout()`

One of the simplest examples of asynchronous programming is `setTimeout()`.

```javascript id="3n0i4s"
console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);

console.log("End");
```

### Output

```text id="4o4xsr"
Start
End
Inside Timeout
```

### Explanation

Although `setTimeout()` appears before `"End"`, JavaScript does **not** wait for two seconds.

Execution happens like this:

1. Print `"Start"`.
2. Register the timer.
3. Continue executing the next line.
4. Print `"End"`.
5. After two seconds, execute the callback function.

This demonstrates JavaScript's **non-blocking asynchronous behaviour**.

---

# Problem with Asynchronous Execution

While asynchronous programming keeps applications responsive, it introduces another challenge.

Different operations may complete at different times.

As a result, tasks may finish in an unexpected order.

---

# Real-World Example: Online Shopping

Consider the following workflow in an e-commerce application:

1. Check inventory
2. Create the order
3. Process payment
4. Send the invoice

Suppose:

* Checking inventory takes **5 seconds**
* Creating the order takes **2 seconds**

If both tasks start asynchronously without coordination, the order might be created **before** inventory has been verified.

This creates an incorrect workflow because every step depends on the previous one.

We therefore need a way to ensure that asynchronous operations execute **in the correct sequence**.

---

# Callback Functions

JavaScript introduced **callback functions** to solve this sequencing problem.

A **callback** is a function passed as an argument to another function.

Once an asynchronous operation finishes, it invokes the callback to signal completion.

This allows the next task to begin only after the current task has finished.

---

# Real-World Callback Example

In an order processing system:

1. Check the inventory.
2. After inventory is confirmed, create the order.
3. Once the order is created, process the payment.
4. After payment succeeds, send the invoice.

Each operation calls the next one through a callback, ensuring that dependent tasks execute in the correct order.

---

# Example

```javascript id="x3blce"
function checkInventory(callback) {
    console.log("Inventory checked");
    callback();
}

function createOrder() {
    console.log("Order created");
}

checkInventory(createOrder);
```

### Output

```text id="o1r9ws"
Inventory checked
Order created
```

The callback ensures that `createOrder()` executes only after the inventory has been checked.

---

# Drawback of Callbacks: Callback Hell

Although callbacks solve the execution-order problem, they introduce another issue known as **Callback Hell**.

When many asynchronous operations depend on each other, callbacks become deeply nested.

### Example

```javascript id="zj6i3d"
checkInventory(() => {
    createOrder(() => {
        processPayment(() => {
            sendInvoice(() => {
                console.log("Order Completed");
            });
        });
    });
});
```

As more operations are added, the code moves further to the right.

This deeply nested structure is often called the **Pyramid of Doom**.

---

# Problems with Callback Hell

Callback Hell makes code:

* Difficult to read
* Difficult to debug
* Difficult to maintain
* Difficult to extend
* Difficult to handle errors consistently

Large applications become increasingly difficult to manage when many callbacks are nested together.

---

# Evolution of Asynchronous Programming

JavaScript evolved to provide cleaner solutions for asynchronous programming.

```text id="rk6mkh"
Synchronous Code
        │
        ▼
Asynchronous Programming
        │
        ▼
Callbacks
        │
        ▼
Callback Hell
        │
        ▼
Promises
        │
        ▼
Async/Await
```

Each step improved the readability, maintainability, and error handling of asynchronous code.

---

# Why Promises and Async/Await Were Introduced

To overcome the limitations of callbacks, JavaScript introduced:

### Promises

* Avoid callback hell
* Support chaining with `.then()`
* Centralise error handling using `.catch()`

### Async/Await

* Built on top of Promises
* Makes asynchronous code look synchronous
* Uses `try...catch` for cleaner error handling
* Easier to read, debug, and maintain

---

# Summary (45–60 Seconds)

> Synchronous execution blocks the JavaScript main thread, so if an operation like a database query or API call takes time, the entire application has to wait. JavaScript solves this using asynchronous programming, where long-running tasks execute in the background while the main thread continues with other work. A common example is `setTimeout()`, where the rest of the code executes immediately instead of waiting for the timer. However, asynchronous operations can finish in an unexpected order, so JavaScript introduced callback functions to ensure dependent tasks execute sequentially. The drawback is that deeply nested callbacks create callback hell, making code difficult to read, maintain, and debug. To solve these issues, JavaScript introduced Promises and later `async/await`, which provide a much cleaner and more maintainable way to handle asynchronous operations.

---

# Key Takeaways

* Synchronous execution blocks the main thread.
* Long-running operations can make applications unresponsive.
* Asynchronous programming keeps applications responsive.
* `setTimeout()` demonstrates non-blocking execution.
* Asynchronous tasks may complete in an unexpected order.
* Callback functions help maintain the correct execution sequence.
* Deeply nested callbacks lead to Callback Hell (Pyramid of Doom).
* Promises and `async/await` provide cleaner, more maintainable solutions for asynchronous programming.
