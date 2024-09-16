"use strict"

console.log(this);
// this in global scope always point to the global object. global object depends on javascript runtime environmante. If it on web it will be window 

// In Node.js global scope, this refers to an empty object {}.
// Inside functions (non-strict mode), this refers to the global object (global).
// In strict mode, this is undefined inside functions.

function x(){
    console.log(this);
}
x();

// inside function this doesn't have value. If the  strict mode is not on this refer to global object because of (this substituion), for strict mode it will return undefind.