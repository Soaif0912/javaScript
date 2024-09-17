
var status = 10;

setTimeout(()=>{
    let status = 20;

    let obj ={
        status: 30,
        display(){    
            return this.status;
        }
    }

    console.log(obj.display());           // output: 10
    console.log(obj.display.call(this));  // output: In Node.js undefind and in browser it ill be 10

},0)

// The global status variable (var status = 10;) is part of the global object.
// However, because this in a Node.js module is not the global object but an empty object, when this.status is accessed, it looks for status on the empty object and doesn't find it, returning undefined.