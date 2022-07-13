
function greeting(){
    console.log(`I am Rajo`);
}


console.log("First Item");
console.log("Second Item");
greeting(); //function called after second item
console.log("Third Item");
console.log("Fourth Item");

// using setTimeout() method to make asynchronus
setTimeout(greeting, 1000); // executed last
setTimeout(greeting); //executed 3rd last

setTimeout(()=>{
    console.log("using arrow function inside setTimeout()")
}); //executed 2nd last depending on the time in milli second

console.log("Fifth Item");
console.log("Sixth Item");
console.log("Seventh Item");
console.log("Eighth Item");



