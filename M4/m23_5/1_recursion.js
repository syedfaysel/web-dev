

// 

function sum(i){

    console.log(i)
    if (i==10){
        return 1;
    }
    i++;
    return i + sum(++i)
}

sum(4);