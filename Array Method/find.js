const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let evenNumber = arr.find((num)=>{
    return num % 2 == 0;
})
console.log(evenNumber);