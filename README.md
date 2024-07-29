# JS promises

In this lesson we have learned about promises in JavaScript. Promises are a way to handle asynchronous operations in JavaScript. They provide a lot of flexibility in how we handle asynchronous operations.

## What is a promise?

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

## How do we create a promise?

We can create a promise using the `Promise` constructor. The `Promise` constructor takes a function as an argument. This function takes two arguments, `resolve` and `reject`. Inside this function, we can perform our asynchronous operation. When the operation is complete, we call the `resolve` function if the operation was successful, or the `reject` function if the operation failed.

Example:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation successful");
  }, 1000);
});
```

We add a timeout of 1 second to simulate an asynchronous operation. After 1 second, we call the `resolve` function with the message 'Operation successful'.

## How do we handle the result of a promise?

We can handle the result of a promise using the `then` method. The `then` method takes two functions as arguments. The first function is called if the promise is resolved, and the second function is called if the promise is rejected.

Example:

```javascript
myPromise.then((result) => {
  console.log(result);
});
```

This will log 'Operation successful' to the console after 1 second.

## How do we handle errors in a promise?

We can handle errors in a promise using the `catch` method. The `catch` method takes a function as an argument. This function is called if the promise is rejected.

Example:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Operation failed");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

Since we are not adding any resolve function, the promise will be rejected after 1 second. The `catch` method will log 'Operation failed' to the console.

## Async/await

Async/await is another way to handle asynchronous operations in JavaScript (newer thant `.then()`). It is built on top of promises and provides a more synchronous way of writing asynchronous code.

Example:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation successful");
  }, 1000);
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

myFunction();
```

The `await` keyword is used to wait for the promise to resolve. The `try` block is used to handle the resolved value, and the `catch` block is used to handle any errors.

Notice the function `myFunction` is declared as `async`. This is required when using the `await` keyword.

For more information please check the portal.
