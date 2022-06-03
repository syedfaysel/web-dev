//Nested condition: condition within condition 


var budget = 1500;
var distance = 60;

if (budget<2000){
    if (distance<50){
        console.log("Budget & distance is fair,Go to shopping");
    }
    else{
        console.log("Too much distance, don't go to shopping");
    }
}
else{
    console.log("Budget insufficient,can't go to shopping");
}
