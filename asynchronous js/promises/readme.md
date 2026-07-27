Here is the next section formatted as a `README.md` chapter that continues from the asynchronous programming notes.

# JavaScript Promises

## What is a Promise?

A **Promise** is an object in JavaScript that represents the eventual result of an asynchronous operation.

The result may be:

* Available immediately
* Available in the future
* Failed with an error

In simple terms, a Promise is a guarantee that an asynchronous operation will either:

1. Complete successfully and return a result.
2. Fail and return an error.

Promises help manage asynchronous operations and provide a cleaner alternative to callback functions.

---

# Promise States

A Promise can exist in three possible states:

## 1. Pending

This is the initial state of a Promise.

The asynchronous operation has started, but the final result is not available yet.

### Example

Sending a request to a server and waiting for the response.

```text
Request sent → Waiting for response → Pending
```

---

## 2. Fulfilled (Resolved)

The operation completes successfully, and the result is available.

### Example

An API successfully returns user information.

```text
Request sent → Response received → Fulfilled
```

---

## 3. Rejected

The operation fails because of an error.

### Examples

* Server is unavailable
* Database request fails
* Payment processing encounters an issue

```text
Request sent → Error occurred → Rejected
```

---

# Creating a Promise

In JavaScript, we create a Promise using the `Promise` constructor.

The constructor accepts a function with two parameters:

* `resolve`
* `reject`

### Example

```javascript
const orderPromise = new Promise((resolve, reject) => {

    let orderCreated = true;

    if(orderCreated) {
        resolve("Order created successfully");
    } else {
        reject("Order creation failed");
    }

});
```

## How It Works

If the operation is successful:

```javascript
resolve("Order created successfully");
```

The Promise moves to the **fulfilled** state.

If something goes wrong:

```javascript
reject("Order creation failed");
```

The Promise moves to the **rejected** state.

The Promise object is returned, which allows us to handle the result later.

---

# Handling Promises Using `.then()` and `.catch()`

Once a Promise is created, we handle its result using:

* `.then()`
* `.catch()`

---

# `.then()`

The `.then()` method executes when the Promise is successfully resolved.

### Example

```javascript
orderPromise.then((result) => {
    console.log(result);
});
```

Output:

```text
Order created successfully
```

The `.then()` method receives the successful response from the Promise.

---

# `.catch()`

The `.catch()` method handles errors when a Promise is rejected.

### Example

```javascript
orderPromise.catch((error) => {
    console.log(error);
});
```

If the Promise fails, the error is handled inside `.catch()`.

---

# Promise Chaining

One of the biggest advantages of Promises is the ability to chain multiple asynchronous operations.

Consider an e-commerce application workflow:

1. Check inventory
2. Create order
3. Process payment
4. Send invoice

With callbacks, this would create deeply nested code.

With Promises, we can write cleaner code:

```javascript
checkInventory()
    .then(() => createOrder())
    .then(() => chargePayment())
    .then(() => sendInvoice())
    .catch((error) => handleError(error));
```

Each `.then()` waits for the previous Promise to complete before moving to the next operation.

If any step fails, the error automatically moves to the `.catch()` block.

---

# Promise Flow

```text
        Promise Created
              |
              |
        ┌─────┴─────┐
        |           |
   resolve()    reject()
        |           |
   Fulfilled    Rejected
        |           |
      .then()   .catch()
```

---

# Advantages of Promises Over Callbacks

## 1. Cleaner Code Structure

Promises avoid deeply nested callback structures and provide a more readable flow.

## 2. Better Error Handling

Using `.catch()`, errors can be handled in one central place instead of adding error handling logic in every callback.

## 3. Easier Chaining

Multiple asynchronous operations can be connected sequentially using `.then()`.

## 4. Avoids Callback Hell

Promises solve the readability and maintainability issues caused by nested callbacks.

---

# Promises vs Callbacks

| Feature              | Callbacks                 | Promises                     |
| -------------------- | ------------------------- | ---------------------------- |
| Code readability     | Can become complex        | Cleaner structure            |
| Error handling       | Manual handling required  | Centralized using `.catch()` |
| Multiple async tasks | Creates nested code       | Supports chaining            |
| Maintainability      | Difficult for large flows | Easier to maintain           |

---

# Relationship Between Promises and Async/Await

`async/await` is built on top of Promises.

It provides a cleaner syntax that makes asynchronous code look more like synchronous code.

Example:

```javascript
async function processOrder() {
    await checkInventory();
    await createOrder();
    await chargePayment();
    await sendInvoice();
}
```

The underlying mechanism is still Promise-based.

---

# Interview Summary (45–60 Seconds)

> Promises were introduced in JavaScript to solve the problems of callback-based asynchronous programming. A Promise represents the future result of an asynchronous operation. It has three states: pending, fulfilled, and rejected. We create a Promise using the Promise constructor with resolve and reject functions. When the operation succeeds, we call resolve, and when it fails, we call reject. We handle successful results using `.then()` and errors using `.catch()`. The biggest advantage of Promises is that they allow chaining of multiple asynchronous operations in a cleaner way and help avoid callback hell. Modern JavaScript further improves Promise handling with async and await syntax.

---

# Key Takeaways

* A Promise represents the future result of an asynchronous operation.
* Promises have three states: pending, fulfilled, and rejected.
* `resolve()` marks a Promise as successful.
* `reject()` marks a Promise as failed.
* `.then()` handles successful results.
* `.catch()` handles errors.
* Promise chaining makes asynchronous workflows easier to manage.
* `async/await` provides a cleaner way to work with Promises.

This can be placed directly after your callbacks section in the same JavaScript asynchronous programming README.
