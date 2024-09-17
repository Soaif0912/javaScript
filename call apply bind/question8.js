
// Explicit binding with arrow function

const age = 10;

var person ={
    name: "Soaif Ikbal",
    age: 25,
    getAgeArrow : ()=>{
        console.log(this.age);
    },
    getAge: function(){
        console.log(this.age);
    }
}

let person2 ={
    age : 30
}

person.getAgeArrow.call(person2);    //output: undefind
person.getAge.call(person2);   // output: 30

// regardless what we use call, apply and bind we can't change the context of arrow function this

// arrow function will look for this in outer normal function, if no function exists it will display global object.