//function declaration
//function functionName(Parameter if needed){ code to execute}
function greetings(name){
    console.log(`Hello ${name}`);
}

function addition(num1, num2){
    sum = num1 + num2;
    return sum;
}

// function call 
greetings("Faysel");
greetings("Rajo");


addition(12,15); // will print nothing,
//cz this function returns a value

console.log(addition(12, 15));

