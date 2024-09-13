
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject({message: "Request setteled p1.", val :'10'}), 1000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject({message: "Request setteled p2.", val: 'p2'}), 3000);
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject({message: "Request setteled p3."}), 5000);
})

Promise.race([p1, p2, p3])
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
});





// Promise.race() in JavaScript is a method that runs multiple promises (tasks) at the same time but only returns the result of the first one that finishes — whether it succeeds or fails.

// Here’s how it works:

// 1. Multiple promises: You pass an array of promises to Promise.race().
// 2. First to finish: It waits for only the first promise to complete, and it will immediately return the result of that promise.
// 3. Success or failure: The first promise to finish can either succeed (resolve) or fail (reject), and Promise.race() returns that result.