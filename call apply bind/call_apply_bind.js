
function displayName(name){  // Where name is parameter.
    console.log(name);
}

displayName("Soaif");   // Where Soaif is argument.



// call(): Immediately invokes the function, passing arguments individually.
// apply(): Immediately invokes the function, passing arguments as an array.
// bind(): Does not invoke the function immediately; instead, it returns a new function with this and arguments permanently set.

const obj = {
    name: "Soaif"
}

function myFunc(name, age){
    console.log(`Name is ${name}, and age is ${age}`);
}

function myFunc2(age, profession){
    console.log(this.name, ' age is ', age, ' and profession is ', profession);
}


// call()

// Purpose: Invokes a function and allows you to pass in the this context and arguments individually.
// Syntax: function.call(thisArg, arg1, arg2, ...)
// Usage:
// It immediately calls the function.
// You specify the this value (thisArg) and pass the arguments to the function one by one.

myFunc.call(null, "Soaif", 24);
myFunc2.call(obj, 25,"Software Engineer");

// call will instantly call the function


// apply()

// Purpose: Invokes a function and allows you to pass in the this context, but arguments are provided as an array.
// Syntax: function.apply(thisArg, [argsArray])
// Usage:
// Similar to call(), but arguments are passed in as an array instead of individually.
// Useful when you already have an array of arguments.

myFunc.apply(null,["Josep", 25]);
myFunc2.apply(obj, [26, "josep"]);
// apply will instantly call the function


// bind()

// Purpose: Returns a new function where the this value is permanently set to a specified value. It doesn’t immediately invoke the function.
// Syntax: function.bind(thisArg, arg1, arg2, ...)
// Usage:
// It creates a new function with a permanently bound this value and (optionally) preset arguments.
// Useful for setting a function's this context in advance, for example, when passing a function as a callback.

let newFunc = myFunc.bind(null, "Samuel", 27);
newFunc();

let newFunc2 = myFunc2.bind(obj);
newFunc2(28, "Samuel");
newFunc2(30, "Ammie");

