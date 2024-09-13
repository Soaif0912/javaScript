
let pizzaPromise = new Promise((resolve, reject) => {
    let isPizzaReady = true;
  
    if (isPizzaReady) {
      resolve("Pizza is ready!"); // This happens if everything goes well
    } else {
      reject("Sorry, no pizza today."); // This happens if something goes wrong
    }
  });
  
  pizzaPromise
    .then((message) => {
      console.log(message); // "Pizza is ready!"
    })
    .catch((error) => {
      console.log(error); // "Sorry, no pizza today."
    });

    
// A promise in JavaScript is like a guarantee that something will happen in the future. It is used to handle tasks that take time, such as fetching data from a server or reading a file.

// When you create a promise, it can be in one of three states:

// 1. Pending: The promise is still working, and you don't know the result yet.
// 2. Fulfilled (Resolved): The promise has finished successfully, and you got the result.
// 3. Rejected: Something went wrong, and the promise failed.

//  A promise helps you run tasks without blocking other code from running and makes it easier to handle results when they're ready.