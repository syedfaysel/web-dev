
var arr2 = ['Syed','Faysel','Ahammad', 'Rajo'];

console.log(arr2);

arr2[1] = 'Kaysel';
//changes the value of arr2[1] from Faysel to kaysel
console.log(arr2); //updated array


//finding the index number of an element by indexOf method
//arrayName.indexOf

var findThis = arr2.indexOf('Rajo');
console.log(findThis);


console.log(arr2.indexOf('invalid element'));
// output is -1 since there is no element matched. 