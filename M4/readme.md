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

## Data Types 

> There are several data types and they quite similar in almost all programming language. 
In JavaScript, we have 
**Numerical, String, Boolean** data types. 

<br>

<!-- This photo describe the data types best -->
<img src="https://tinyurl.com/29mwn26x" alt="Data Types chart">


1. Numbers: int, float
2. Strings: use single or double quotation
3. Boolean: true, false
4. null: 
5. undefined:


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