# Intro to JavaScript  
[Syed Faysel Ahammad Rajo](https://syedfaysel.me)  

> :beginner: JavaScript:  
JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).  

<br>

**Setting up the machine & Environment:**  
- install node & npm
- code editor (I prefer vscode)

**Run js code using node**

`node filename.js`

---

## Module 17  

### Basic Syntax and concept 

> printing something on console using console.log()

```js
console.log("Hello JavaScript");
```  

> Variables: to store any sort of data 
Variable declaration in :five: steps
var keyword, variable name, assignment sign (=), value, semicolon (;)


```js
var myName = "Syed Faysel Ahammad Rajo"; //string data type
var myAge = 22 // number data type
var isAlive = true; // Boolean data type
```
> we can also use let instead of var [ES6]  

```js
let studentId = 12345678;
```

> printing variables & template literal or string literal

```js
console.log(myName);

//using template literal
console.log(`My name:${myName}, My age: ${myAge}, student id: ${studentId}`);
```

### Data Types 

> There are several data types and they are quite similar in almost all programming languages. 
In JavaScript, we have primitive
**(Numerical, String, Boolean)** and non-primitive data types. 

<br>

<!-- This photo describe the data types best -->
<img src="https://tinyurl.com/29mwn26x" alt="Data Types chart">

**Primitive Data type:**
1. Numbers: int, float
2. Strings: use single or double quotation
3. Boolean: true, false
4. null: 
5. undefined:

**Non-primitive Data type:**
1. Object
2. Array
3. Function


### Mathematical Operation  

```js
var a = 10;
var b = 20;

var addition = a+b; // plus operator
var subtraction = a-b;  // minus operator
var multiplication = a*b;  //multiply
var division = a/b; // division
var remainder = a%b; // (%) mod operator to find the remainder
```

> know more about short-hand form for various operation

```js
var age = 10;
age = age +20; //add 20 with previous value
age +=20; // add 20 with previous value
age++; // increase 1
```


### Type Conversion 

> we can convert a string (equivalent to a numebr) to int or float using `parseInt(), parseFloat` method. 


<br>

```javascript
var name = "Rajo"; //string
var friends = 10; // integer
var height = 3.53475632; //float
var weight = '25'; //string 

// String concatenation 
var newString = name + weight; 
//output = Rajo25

//Type conversion : parseInt(), parseFloat()

var intWeight = parseInt(weight);
var intHeight = parseInt(height);
var fixedFloat = parseFloat(height.toFixed(3));


console.log(intWeight, intHeight);

```
`output: 25 3 3.535`

<br>

### typeof

> To check the data type of a variable we can use the `typeof` method. 

```javascript
var name = "Faysel";
var age = 22;
var life = 3.5; 
var isAlive = true;
var nothing;


console.log(typeof name); //string
console.log(typeof age); //number:int
console.log(typeof life); // number:float
console.log(typeof isAlive); //boolean
console.log(typeof nothing); //undefined
```  


<br>

## :gem: Summary M17  

:point_right: **Variable & Variable declaration in 5 Steps**  
:point_right: **Data types in JavaScript**  
:point_right: **Type conversion, parseInt(), parseFloat**  
:point_right: **Mathematical operation: +, -, '*', /, %**  
:point_right: **Short hand mathematical operation (i++, i--, i+=4 etc)**  
:point_right: **String concatenation**

<br>

Module 17 ends here  

---

<br>

## Module 18  

**:beginner: Array & Condition** 

### Array  

**:point_right: Array:**   
Array is a collection of data. We can store as many data we want in a single variable using array.  

`syntax: var arrayName = [elements separated by comma];`
```js
var arr1 = [1,2,3,4,5,6];
```

**:point_right: Array size or Length of array**

We can get the size/length of the array, or the number of elements inside the array using `length` method. 

```js
var sizeOfArr1 = arr1.length;
```

**:point_right: Index**  
Using index, we can access the elements of an array. Generally in all programming languages, `index starts from zero (0)`. 

**Sample code:**  

```js
var arr1 =[1,2,3,4,5,6];

//length of the array
var sizeOfArr1 = arr1.length;

//index
var secondElement = arr1[1];
//index starts from zero

console.log(arr1);
console.log(sizeOfArr1);
console.log(secondElement);
```  
`output`
```js
[ 1, 2, 3, 4, 5, 6 ]
6
2
```


### Working with index  

Using index, we can access any element of an array, change the elements. 

The opposite of this is, finding the index number of an element by `indexOf` method. 

`syntax: arrayName.indexOf`

Sample Code: 

```js
var arr2 = ['Syed','Faysel','Ahammad', 'Rajo'];

arr2[1] = 'Kaysel';
//changes the value of arr2[1] from Faysel to kaysel

//finding the index number of an element by indexOf method

var findThis = arr2.indexOf('Rajo');
console.log(findThis);


console.log(arr2.indexOf('invalid element'));
// output is -1 since there is no element matched. 
```
Output:

```js
[ 'Syed', 'Faysel', 'Ahammad', 'Rajo' ]
[ 'Syed', 'Kaysel', 'Ahammad', 'Rajo' ]
3
-1
```

### push(), pop()

> Adding an element to the last of an array using push() method  

We can add any element to the last of the array. `syntax: arrayName.push(new element)`. 

> Removing an element from the last of an array using pop() method  

We can remove any element from the last of the array. `syntax: arrayName.pop()`. Remember, push() method takes no parameter. 

Sample Code: 

```js
var years = [2016, 2017, 2018, 2019,2020, 2021,2022];
console.log(years);

years.push(2023);
console.log(years);
//after adding a new element to the last of the array

// Removing element from the last using pop()

var books = ['Ceo', 'Deep Work', 'Atomic Habits', 'Silent Patient'];

console.log(books);

var removedElem = books.pop();
//after removing
console.log(books);

console.log(removedElem);

```
Output: 

```js
[
  2016, 2017,
  2018, 2019,
  2020, 2021,
  2022       
]
[
  2016, 2017, 2018,
  2019, 2020, 2021,
  2022, 2023
]
[ 'Ceo', 'Deep Work', 'Atomic Habits', 'Silent Patient' ]
[ 'Ceo', 'Deep Work', 'Atomic Habits' ]
Silent Patient
```


### Comparison Operator  

<img src="https://tinyurl.com/2dxxkbjv" alt="comparison operator">

Sample Code: 

```js
console.log(5>6); //false
console.log(5==6); //false
console.log(5<6); //true
console.log(5!=6); //true
```

<br>
 
### Control Statement: Condition 

 > In programming language, there are several control statements. Based on condition we can execute some portion of code. If the condition is true, that particular code will be executed, if the condtion is false that partcular portion of code will not be executed. There is another control statement which is loop. Using loop we can execute a code certain amount of time. We will learn more about loop later. Let's focus on condition.  

 In JavaScript, the structure of conditional statemtns are like below: 

 ```js
 if (condition){
   //code to be executed if the condition is true
 }
 else if (another condition){
    //code to be executed if the 1st condition is false and 2nd condition is true
 }
 else{
   //if none of the conditions are true, this part of code will be executed.
 }
 ```


Sample Code: 
 ```js
var age = 22;

if (age ==22){
    console.log("Yes, Age is 22");
}
else if (age ==23){
    console.log("Age is 23");
}
else{
    console.log("No, age is neither 22 nor 23");
}
 ```

:point_right: Summary:  

<img src="https://www.bookofnetwork.com/images/javascript-images/JS_else()_24Feb17_1750.png" alt="conditional statement">  

<br>



