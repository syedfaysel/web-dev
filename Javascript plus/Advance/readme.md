# Chapter 2: Advance

**Table of Contents**

1. [`this` keyword](#this-keyword)
2. [`call()`, `bind()`, and `apply()` method](#call-bind-apply)
3. [Object in javascript](#objects-in-javascript)
4. [function constructor and `new` keyword](#function-constructor)
5. [Inheritance](#inheritance)
6. [strict mode](#strict-mode)





## This Keyword

* `this` keyword referes to the object that is executing the current function
* `this` keyword is not assigned a value until an object calls the function where this is defined
* `this` keyword is not a variable, it is a keyword
* `this` keyword is not static, it depends on how a function is called
* `this` keyword can not be used in arrow functions

* `this` keyword can not be used in event handlers

* `this` keyword can not be used in object constructors

* `this` keyword can not be used in object methods

* `this` keyword can not be used in object prototypes

* `this` keyword can not be used in object getters and setters
* `this` keyword can not be used in object static methods

> It depends on how a function is called. If the function is a method of an object, `this` is the object that called the method. If the function is a function, `this` is the global object.
If the function is a function in strict mode, `this` is undefined. If the function is an event, `this` is the element that received the event. 
If the function is a function, this is the window object. If the function is a method, `this` is the owner object.

```js
console.log(this); // window object`
console.log(this === "window"); // true
```

> when 'this' keyword is used in the global scope or global execution context , it refers to the window object
 In both strict mode and non-strict mode, the value of this is the global object, whether in the browser or in Node.js
```js
function helloThis() {
    console.log(this);
}

helloThis(); // window object

```
 when `this` keyword is used in a function, it depends on how the function is called. in the above case it refers to the window object

```js
function helloThis2() {
    "use strict";
    console.log(this);
}

helloThis2(); // undefined
```
Now let's see how 'this' keyword works in an object

```js
const person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log(this);
        console.log(
            `Hello, my name is ${this.name} and I am ${this.age} years old`
        );
    },
};

person.greet(); // Hello, my name is John and I am 30 years old

```

We see that, when we call the greet method, the 'this' keyword refers to the person object, Instead of the window object. 
This is because the greet method is a method of the person object.So, the 'this' keyword refers to the person object

Now let's see how `this` keyword works in an object within another object

```js
const person2 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY",
        greet: function () {
            console.log(this);
            console.log(
                `Hello, my name is ${this.name}`
            );
        },
    },
};

person2.address.greet(); // Hello, my name is undefined and I am undefined years old

```

In the later case, the `this` keyword refers to the address object, instead of the person object. This is because the greet method is a method of the address object. 
So, the `this` keyword refers to the address object. But, the address object does not have the name and age properties. So, the name and age properties are undefined. 
Value of `this` is determined by the leading parent object. In this case, the leading parent object is the address object. So, the `this` keyword refers to the address object


<hr>


## Call-bind-apply

<hr>

## Objects in Javascript

<hr>

## Function Constructor

<hr>

## Inheritance

<hr>

## Strict Mode