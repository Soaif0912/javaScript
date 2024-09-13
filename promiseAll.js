const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve({message: "Request setteled."}), 100);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve({message: "Request setteled."}), 300);
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve({message: "Request setteled."}), 500);
})

Promise.all([p1, p2, p3])
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
});


// Promise.all() in JavaScript is a method that helps you run multiple asynchronous tasks (like fetching data or reading files) at the same time and waits for all of them to finish before doing something with the results.

// Here’s how it works in simple steps:

// 1. Multiple promises: You pass an array of promises to Promise.all().
// 2. Wait for all: It waits for all the promises to either be completed or fail.
// 3. Success: If all promises are successful, it returns an array with all their results.
// 4. Failure: If one promise fails, the whole Promise.all() fails and returns the error of that one promise.