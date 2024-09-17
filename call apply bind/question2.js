
const animal=[
    {species: "Lion", name: "Ling"},
    {species: "Whale", name: "Queen"}
];

function printAnimal(i){
    this.print = function(){
        console.log("#" + i + this.species + this.name);
    }

    this.print();
}

for(let i =0; i< animal.length; i++){
    printAnimal.call(animal[i], i);
}

