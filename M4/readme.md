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



**Multiple Condition** 

We can use multiple condtion by using logical operators. 

```js
// logical operator: and (&&) or (||)

var age = 22;
var hasJob = true;
var hasHome = false;

if (age>21 && (hasJob ==true || hasHome==true)){
    console.log("You can marry");
}
else{
    console.log("You can't marry");
}
```
Output: `You can marry`

<br>

### Nested Condition  

> Nested condition is nothing just condition/s within a condition.

A sample code will make it clear: 

```js
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
```  
Output: `Too much distance, don't go to shopping`

<br>

## :gem: Summary M18  

:point_right: **Variable recap**  
:point_right: **Array: collection of data**  
:point_right: **index, indexOf, array traversal**  
:point_right: **Add, remove elements using push(),pop() methods**  
:point_right: **Comparison Operators**  
:point_right: **Conditional Statements: if, if else, else**  
:point_right: **Multiple Condition, Nested Condition**

<br>

Module 18 ends here  

---

## Module 18.5  
### :beginner: Loop  

> Loop is a way to do the same task again and again till a certain condition is true.  

In Javascript, there are 3 types of loop:   
1. for loop 
2. while loop
3. do while loop  

:bulb: **For loop**  

<img src="https://miro.medium.com/max/1400/1*Wal8vgWVHiYnM0IrnK0p3w.jpeg" alr="for loop">

Sample code: 
```js
for (var i = 1; i<=10; i++){

    console.log("Iteration number:"+i);
}
```

:bulb: **while loop** 

Syntax: 

```js
initialize_updater
while(condition){
    //block of code;

    update;
}
```

Sample code: 
```js
var i=1;
while(i<=10){
    console.log("Iteration number:"+i);

    i++;
}
```

Output to both of the code: 

```
Iteration number:1
Iteration number:2
Iteration number:3
Iteration number:5
Iteration number:6
Iteration number:7
Iteration number:8
Iteration number:9
Iteration number:10
```
---

<br>


## Module 19
**Function & Object**

### Function  
> A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. 

Sample Code: 

```js
//function declaration
function greetings(name){
    console.log(`Hello ${name}`);
}

function addition(num1, num2){
    sum = num1 + num2;
    return sum;
}

// function call 
greetings("Faysel");
greetings("Rajo");


addition(12,15); // will print nothing,
//cz this function returns a value

console.log(addition(12, 15));
```

output: 

```js
Hello Faysel
Hello Rajo  
27
```

### Object  

> In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc. The same way, JavaScript `objects can have properties`, which define their characteristics.  

Syntax: 

```js
var objectName = { key: value, key:value.....}
```

Objects are declared by curly braces, and there are key: value (properties:attribute) pairs stored in an object. 

For example: 

```js
var student = {
    name: "rajo",
    id: 12345678,
    dept: "cse"
}
```

Here in the above code, `student` is an object. Properties of this object are, name, id, dept and the attributes of these properties are respectively "rajo", 12345678, "cse".

**Printing an object**  
```js
console.log(student);
```
Output: 

```js
{ name: 'rajo', id: 21101078, dept: 'cse'}
```


**Accessing an object (any properties of object)**  

We can access any properties of object either by using dot notation or bracket notation. Most of the programmer & I personally prefer the dot notation. See the code example below: 

```js
//dot notaion: objectName.propertyName
console.log(student.name);

// Bracket notation to access object 
console.log(student["name"]);
```

### Jump Statements  

**Switch**

<img src ="https://cdn.goconqr.com/uploads/media/image/16836696/desktop_dc66b518-4649-42a8-b556-56e569abde72.png" alt= "switch.jpg">

<br>


**Break & Continue**  

Sample Code: 

```js
// Continue: 

for (var i=1; i<10; i++){

    if(i==5){
        continue;
        // when i==5, the iteration will be skipped to the next step
    }
    console.log("i is now = ",i);
}


//Break: 

for (var j=1; j<10; j++){
    if(j==5){
        break;
        //when j==5, the iteration will be stopped & get out of the innermost loop. 
    }
    console.log("j is now = ",j);
}
```
<br>

Output: 

```js
i is now =  1
i is now =  2
i is now =  3
i is now =  4
i is now =  6
i is now =  7
i is now =  8
i is now =  9
j is now =  1
j is now =  2
j is now =  3
j is now =  4
```


## :gem: Summary M19  

:point_right: Function , parameter, return  
:point_right: Object, object property.  
:point_right: Dot notation, bracket notation  
:point_right: Accessing object properties using dot notation  
:point_right: While loop & for loop  
:point_right: Switch,case , break & continue


Module 19 Ends here

---

## Module 20  

:point_right: Odd or Even  
:point_right: Leap year  
:point_right: inch to feet converter  
:point_right: Find Factorial in various algorithm  



## Module 21  

**JS simple Problem solving**  


### Math JS  


Note :   


### Swap  

## Module 23_5

:bulb: Some javaScript coding problems 




<br>


---

Milestone 4 Completed : @June 11th, 2022



