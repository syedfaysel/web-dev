// Sum of the element of an array

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

for (i=0; i<arr1.length; i++){
    sum +=arr1[i];
}

console.log(sum);



// Creatng a function to find sum

function sumArray(array){

    sum = 0
    for(var i =0;i<array.length; i++){
        sum +=array[i];
    }
    return sum;
}


console.log(sumArray(arr1));

