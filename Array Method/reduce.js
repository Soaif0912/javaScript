const arr = [1,2,3,4,5,6,7,8,9,10];

const oddNumberTotal = arr.reduce((accumulater, currentValue)=>{
    return currentValue % 2 > 0 ? accumulater + currentValue : accumulater;
});

console.log(oddNumberTotal);