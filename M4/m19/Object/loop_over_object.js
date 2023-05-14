var info = {
  name : "rajo",
  id : 123,
  age: 23
}

// getting all the keys
var infoKeys = Object.keys(info);
console.log(infoKeys);

// values 
var infoValues = Object.values(info);
console.log(infoValues);


// for in loop
for (prop in info) {
  console.log(prop);
  console.log(info[prop]);
}