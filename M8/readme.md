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
To Install React, we need to use the following command on the termainal.
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
- What are the components in React? 
> Ans:   
- What do you understand by SPA? 
> Ans: 
- Examples of SPA, MPA?
> Ans: 
- Difference between SPA & MPA?







## Module 45

### 45_1
> React 6 core concepts

Basic overview, Recap, Install React and folder structure

### 45_2
> JSX, Dynamic Content, Dynamic Style in React  


### 45_3
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


### 45_4  
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




