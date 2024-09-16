
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject({message: "Request setteled p1.", val :'10'}), 1000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject({message: "Request setteled p2.", val: 'p2'}), 3000);
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject({message: "Request setteled p3."}), 5000);
})

Promise.any([p1, p2, p3])
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log(error);
});


// Promise.any() in JavaScript is a method that runs multiple promises (tasks) at the same time, but it only returns the result of the first one that succeeds (resolves). It ignores any promises that fail (reject). If all the promises fail, then it will return an error.

// Here’s how it works:

// 1. Multiple promises: You pass an array of promises to Promise.any().
// 2. Wait for success: It waits until one of the promises succeeds (is fulfilled).
// 3. Success or failure: It returns the value of the first successful promise. If all the promises fail, it throws an error.