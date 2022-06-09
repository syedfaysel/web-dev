

//Handle unexpected input 
function getFibo(n){


    if (typeof n != "number"){
        return "Please enter a valid number";
    }

    var fibo = [0,1];
    for (let i = 2; i<=n; i++){
        fibo[i]= fibo[i-1]+fibo[i-2]
    }
    return fibo;
}

console.log(getFibo('lol'));