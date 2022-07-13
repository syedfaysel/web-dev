# How Javascript & Browser Works 

## 38.1  Module Intro & How internet Works  

## 38.2  DOM Treee, Render tree 

## 38.3  JavaScript v8 engine


## 38.4  setTimeout simple Asynchronous JS using

**setTimeout();**  
If we call a function using setTimeout(), it will be asynchronus. That means that function will be executed after the execution of all other codes. 

```js

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
```



