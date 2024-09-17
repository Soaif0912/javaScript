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


// also this value depends on how the function is called, if it's called with an object it behave differently.

//window.x();  // where we get window object

const student ={
    name: "Soaif",
    x : function(){          
        console.log(this)
    }
}

student.x();   

// a function inside object is called method.
// Here this will be the object which object method has called.

// - call, apply and bind (sharing method);

const student2 ={
    name: "jojo"
}

student.x.call(student2);   // here this will be replaced with studen2

// arrow function

// Arrow functions don't have their own this. Instead, this refers to the value of this in the enclosing (lexical) context where the arrow function was defined.

const person={
    name: "soaif",
    display: ()=>{
        console.log(this);   // here this will be global object beacuse lexical scope is global
    }
}
person.display();

const person2={
    name: "Samuel",
    displayname: function(){
        const y = () =>{
            console.log(this);     
        };
        y();
    }
}
person2.displayname();

// here this will be the person2 object because y() arrow function lexical scope is displayname function


// Inside a constructor function 

// When used inside a constructor function, this refers to the new object that is being created.

function human(name) {
    this.name = name;
  }
  const human1 = new human('Alice');
  console.log(human1.name);  // Logs "Alice"

  // In Event handlers

  // Inside an event handler, this refer to the element that received the event

  document.querySelector(".button").addEventListener("click",function(){
    console.log(this);   // Logs the button element
  })
  