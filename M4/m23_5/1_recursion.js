

// 

function sum(i){

    if (i==10){
        return 1;
    }
    i++;
    return i + sum(i)
}

console.log(sum(1));