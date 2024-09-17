
// Append an array element to a array 

const a = ['a', 'b'];
const b = [1, 2];

a.push.apply(a,b)

console.log(a);