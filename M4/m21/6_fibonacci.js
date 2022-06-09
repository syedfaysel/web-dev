
// 0,1,1,2,3,5,8,13,21 ... Fibonacci series
// nth term  = (n-1)th + (n-2)th


let fibo = [0,1] // first 2 elements are fixed 

for (let i = 2; i<=10; i++){

    fibo[i] = fibo[i-1]+fibo[i-2];
}

console.log(fibo);

// Function 

function getFibo(n){

    var fibo = [0,1];
    for (let i = 2; i<=n; i++){
        fibo[i]= fibo[i-1]+fibo[i-2]
    }
    console.log(fibo);
    // return fibo;
}

getFibo(10)