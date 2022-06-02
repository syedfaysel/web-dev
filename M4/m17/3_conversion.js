// Data type conversion 

var name = "Rajo"; //string
var friends = 10; // integer
var height = 3.53475632; //float
var weight = '25'; //string 

// String concatenation 
var newString = name + weight; 
//output = Rajo25

//Type conversion : parseInt(), parseFloat()

var intWeight = parseInt(weight);
var intHeight = parseInt(height);
var fixedFloat = parseFloat(height.toFixed(3));

console.log(intWeight, intHeight, fixedFloat);



