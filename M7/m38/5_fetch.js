console.log("hi1");

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

console.log("hi2");
console.log("hi3");
console.log("hi4");