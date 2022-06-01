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
var isAlive = true;
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
