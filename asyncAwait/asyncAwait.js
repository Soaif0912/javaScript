
// fetch() function is given by browser not javaScript 

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject({message: 'p1 has resolved', value: 'p1'});
    },5000);
});

const p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({message: 'p2 has resolved', value: 'p2'});
    },10000);
});

async function handlePromise(){

    console.log("Starting handleing promise.");

    const val1 = await p1;
    console.log(val1);
    
    const val2 = await p2;
    console.log(val2);

    console.log("handlePromise function execution has been completed.")
}

handlePromise();

console.log("Thank you for staying");



// Async in JavaScript is short for "asynchronous," which means doing things in the background without stopping other parts of your code from running. It allows your code to handle tasks, like fetching data from the internet, without waiting for them to finish before moving on to other things.

// Example in Real Life:
// Imagine you're cooking dinner (your main task), and you also put a cake in the oven (another task). While the cake is baking (working in the background), you keep cooking. You don’t stop everything else just to wait for the cake to finish baking.

// In programming, async allows you to start tasks that take time (like loading data) and continue with other work without waiting for the task to finish immediately.