# API & JS concept recap
**Module 37.5**

API:  
API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.

<img src="https://i0.wp.com/choosetoencrypt.com/wp-content/uploads/2019/06/Artboard-4.png?resize=640%2C430&ssl=1" alt=""> 

<br> 

<img src="https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/609b09fb261ba04c095064cb_https-lh6-googleusercontent-com-_nyclktg8po_wx5-.png" alt="api diagram"> <br>

We can use API through JavaScript in the following way:  

<img src="https://miro.medium.com/max/1400/1*Zp7OjG_itJNA3VoXL5f5sQ.png" alt="fetch()">  

### Fetch API  

```js
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
```

Here, data is the json file that we will recieve through the api call. 

<!-- Random Commit 1 -->

### 37_5_3  

**Closure**: Closure is something that allows us to create something private that can't be accessed from outside.  

```js
const bank = (owner) => {
    balance = 0;
    return (amount) => {
        balance+=amount;
        return balance;
    }
}

const RajoBank = bank("Mr. Rajo");

console.log(RajoBank(200)); //200 deposit; balance = 200
console.log(RajoBank(100)); //100 more deposit ; balance = 300

//trying to access balance outside the function
console.log(RajoBank.balance); //output: undefined 
```

An inner function can access the properties of the outer function. But We can't access the properties of the function outside the function.  

Simply saying, it created a closed environment. That's why it is called closure. 



### 37_5_4 
Keyworkds:  Hoisting, scope, block scope, scope chain

**Scope**

> Anything inside a curly braces.

Things to remember:  

const , let creates block scope. var doesn't create block scope. var hoist hoye ekdom upore chole jay...(learn more)