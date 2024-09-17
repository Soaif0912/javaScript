
function f(name){
    console.log(this,name);
}

const user={
    g: f.bind(null),
}

user.g('soaif');

// it will display window object because inside function f() this is fixed

function display(){
    console.log(this.name);
}

const obj = {
    name: "Soaif"
}

const print = display.bind(obj).bind({name:"Asif"});
print();

// will display soaif there is no bind chaining exits in js.