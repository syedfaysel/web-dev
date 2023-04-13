# Simple React

Milestone : 08

## Module 44

> Modern front-end and core concepts

### Modern Application Core parts

### Web Component

> 4 types of web Component

### Single Page Application

### Routing, Route parameter

### Website state

> Website state, state management

### Install React

> Install React and Folder structure:  
> To Install React, we need to use the following command on the termainal.

```
npx create-react-app new-project
cd new-project
npm start

```

Here npx is a package runner tool that comes with npm version 5.2+

### Summary:

keywords:  
`props`, `state`,

### Interview Questions:

-   What are the components in React?
    > Ans:
-   What do you understand by SPA?
    > Ans:
-   Examples of SPA, MPA?
    > Ans:
-   Difference between SPA & MPA?

## Module 45

### 45_1 React 6 core concepts

> React 6 core concepts

Basic overview, Recap, Install React and folder structure

### 45_2 JSX, Dynamic Content

> JSX, Dynamic Content, Dynamic Style in React

### 45_3 Component

> Create Component & return HTML from a component

```
function Component() {
    return (
        <div>
            <h1> Hello Everyone </h1>
            <p>I am Syed Faysel</p>
        </div>
    )
}
```

Here `Component` is a simple component that we can use it anywhere like html tag.

### 45_4 Pass Dynamic data

> pass Dynamic Data to Components using props (properties)

```
function App(){

    return(
        <Component name= "Rajo"></Component>
    )
}


function Component(props) {

    console.log(props);
    // it will show an object for the props
    return (
        <div>
            <h1>Name : {props.name}</h1>
            <p>I am Syed Faysel</p>
        </div>
    )
}

export default App
```

Know more about `component` and `props`:  
component is nothing just a function. and props is a parameter which stands for properties. Technically props is an object which stores all the properties pass as an argument to that component function,


### 45_5 Create Multiple Components
> (Advanced) Create Multiple components from an array of objects  

Keywords: `map`  

* To use javascript we can use curly braces and the code goes inside the curly braces 

```js
function App() {

    const students = ['Rajo', 'Syed', 'Faysel'];
    return (
        <div className="App">
            // this is javascript
            {
                students.map(student => student);
            }
            <h1>Hi There</h1>

        </div>
    );
}
```

### 45_6 Concept Recap
> Concept Recap

### 45_7 State, Component State hook
> State, Component State hook, set state method

### 45_8 Dynamic Data load
> Dynamic Data load, API Call, useEffect integrate sate  

API Call
```js
    fetch('url')
    .then(res => res.json)
    .then(data => console.log(data));
```

To load data: with use state, useEffect

```javaScript
const [users, setUsers] = useState([]);
useEffect(() => {
    fetch('url')
    .then(res => res.json)
    .then(data => setUsers(data));
} , [])
```
useEffect takes 2 parameter, 2nd parameter is an empty array. then 1st one is an anonymous arrow function.

5 Steps to dynamic external data load:
1. useState()
2. useEffect()
3. data load / Api call
4. connect with state
5. show data using map()


### Module Summary

6 Important key of React:

1. JSX
2. Component
3. Props
4. State
5. Event Handler
6. External Data Load (API)



## Module 46

### 46_2 Load countries using Effect


