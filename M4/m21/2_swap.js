// Swap variable, using temp, without temp, destructing

let first = 10;
let second = 20;

console.log(first, second);


let temp = first;

first = second;
second = temp;

console.log(first, second);


// Destructuring 

var x  = 5;
var y = 7 ;
//before swapping 
console.log(x,y);

[x,y] = [y,x];

//after swapping 
console.log(x,y);
