JavaScript is a single-threaded language, which means it has only one main thread to execute code. It can perform only one task at a time, 

Synchronous Execution

In synchronous execution, every line of code runs one after another. The next statement cannot execute until the current one has finished.

console.log("First");
console.log("Second");
console.log("Third");

The drawback of synchronous execution is that it is blocking. If one operation takes a long time, such as reading a large file or making a database request, the entire application waits until that task finishes. During this time, the main thread cannot perform any other work, making the application appear slow or unresponsive.

Asynchronous Execution

To solve this problem, JavaScript supports asynchronous programming.

Instead of waiting for a long-running task to complete, JavaScript starts that task in the background and immediately continues executing the remaining code. Once the task is finished, JavaScript processes the result.

Common asynchronous operations include:

API calls
Database queries
Reading files
Payment processing
Timers like setTimeout()

This approach keeps the application responsive and improves the user experience.

// JavaScript is a single-threaded language, so it executes one task at a time. In synchronous execution, every statement waits for the previous one to finish, which can block the application if a task takes a long time. To avoid this, JavaScript uses asynchronous programming, where time-consuming tasks like API calls, database queries, or payment processing run in the background while the main thread continues executing other code. Promises help manage these asynchronous operations by representing a future result. A Promise can be pending, fulfilled, or rejected, and with async/await, we can write asynchronous code that's much cleaner and easier to understand."

Problem with Asynchronous Execution

Asynchronous programming introduces another challenge.

Since different operations may take different amounts of time, they may finish in an unexpected order.

For example, in an online shopping application we have four steps:

Check inventory
Create the order
Process payment
Send the invoice

Suppose checking inventory takes 5 seconds, while creating the order takes 2 seconds.

If both operations start asynchronously, the order might be created before inventory has even been checked.

This is incorrect because each step depends on the previous one.

So now we need a way to control the execution order.