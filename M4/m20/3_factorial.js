// factorial: 5! = 5*4*3*2*1


function factorial(num){

    let fact = 1;
    for (let i=1; i<=num;i++){
        fact = fact*i;

    }
    return fact;
}



console.log(factorial(5)); //120
console.log(factorial(6)); //720

