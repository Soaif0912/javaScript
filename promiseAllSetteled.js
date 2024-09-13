
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve({message: "Request setteled."}), 1000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject({message: "Request setteled."}), 3000);
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve({message: "Request setteled."}), 5000);
})

Promise.allSettled([p1, p2, p3])
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
});


// Promise.allSettled() in JavaScript is a method that runs multiple promises (tasks) at the same time, but unlike Promise.all(), it waits for all of them to finish — no matter if they succeed or fail. It doesn't stop if one of the promises fails.

// Here’s how it works:

// 1. Multiple promises: You pass an array of promises to Promise.allSettled().
// 2. Wait for all: It waits for each promise to finish (either successfully or with an error).
// 3. Results for each: It returns an array with the result of each promise, telling you whether it succeeded or failed.
// 4. Each result object will have:

// * status: "fulfilled" (if the promise succeeded) or "rejected" (if it failed).
// * value: The result (if it succeeded).
// * reason: The error (if it failed).