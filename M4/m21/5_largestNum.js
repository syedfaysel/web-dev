// largest number in an array 


function largestNum(array){

    largest = array[0];
    for (var i = 1; i<array.length; i++){

        if (array[i]>largest){
            largest = array[0]
        }
        else{
            largest = array[i]
        }
    }
    return (largest);
}

arr1 = [10,20, 30, 40, 50];
console.log(largestNum(arr1));