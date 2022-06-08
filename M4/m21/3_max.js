// Finding max using condition 


let a = 20;
let b = 30;
let c = 10;

if (a>b && a>c){

    console.log("a is max");
}
else if(b>a && b>c){

    console.log("b is max");
}
else{
    console.log("c is max");
}

// Using a function 

function largestValue(first, second){

    if (first>second){
        return first;
    }
    else{
        return second;
    }
}

var largest = largestValue(3, 7);
console.log(largest);


// However Js has math library and max();

let maxValue = Math.max(a,b,c);

console.log(maxValue);