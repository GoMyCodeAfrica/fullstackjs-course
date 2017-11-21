# React components

inside a React, components are small pieces that construct an application. The idea is to divide the application into small parts which make it easier to debug, add and manage the application.

## Define a component
To define a new component we create a class that extends the class "Component", every component should have a method called "render": a function that tells the component what to... render

```javascript
class NewComponent extends Component {
    render() {
        return <h1>Component JSX</h1>
    }
}

export default NewComponent
```

## Include a component into another
As the application is devided into component we need to include components into each other until we get one big components which represents the applicatoon.

```javascript
import Child from '../Child'

class Parent extends Component {
    render() {
        return (
            <h1>Parent JSX:</h1>
            <Child />
            <Child />
            <h1>Parent JSX contenue here</h1>
        )
    }
}
```

## The Component Lifecycle
Each component has several “lifecycle methods”: Creation, update and destraction.
Methods prefixed with "will" are called right before something happens, and methods prefixed with did are called right after something happens.

- constructor() => Component created
- componentWillMount() => Component created and ready to be rendred
- componentDidMount() => Component is now rendred
- componentWillUnmount() => Component will be destroyed or removed for the application
- componentWillReceiveProps() => Component will recieve data from parent through props
- shouldComponentUpdate(nextProps, nextState) => override to stop update for some props and state
- componentWillUpdate() => new props or state are being received
- render()
- componentDidUpdate() => after updating occurs. This method is not called for the initial render.


## Style react components
### 1- Importing a css file

```javascript
import './style.css';
```

### 2- Inline styling
Not exately like CSS: attribut with "-" => camelCased version.
example: background-size => backgroundSize

```javascript
const divStyle = {
  marginTop: '40px',
  BackgroundColor: 'red'
};

[..]
<div style={divStyle}>
</div>
[..]
```

## Props
We can think of props as Component's Input: The parent component can pass values to the child component through props. Then later the child component can use the value passed.

### Example: Greeting Component

// Greeting.js

```javascript
import React, { Component } from 'react';

class Greeting extends Component{
  render(){
    return(
      <h1>Hello {this.props.name}</h1>
    )
  }
}

export default Greeting;
```

// App.js

```javascript
import React, { Component } from 'react';
import Greeting from './Greeting';

class App extends Component {
  render() {
    return (
      <Greeting name="Another Folan" />
    );
  }
}

export default App;
```


## State
We can store a state of a component in "this.state" and for every change of this state, the component will be re-rendred.

The state is initialized in the constructor then we can change it with the method "setState".

### Example: Counter

```javascript
import React, { Component } from 'react';

class Counter extends Component{
  constructor(props){
      super(props)
      this.state = { // init state
        counter: 0
      }

      setInterval(() => {
        this.setState({ //change state
          counter: this.state.counter + 1
        })
      }, 1000)
  }

  render(){
    return(
      <div>
        <h1>Counter: {this.state.counter}</h1>
      </div>
    )
  }
}

export default Counter;
```


## Looping and conditions
For looping throgh list we use .map returning JSX to render to one element of the list.

```javascript
import React, { Component } from 'react';

class People extends Component{
  constructor(props){
    super(props)
    this.state = {
      people: [
        {
          name: "Folan",
          score: 62
        },
        {
          name: "Folana",
          score: 57
        },
        {
          name: "Jon Doe",
          score: 40
        },
      ]
    }

  }
  render(){
    return(
      <div>
        {
          this.state.people.map((p) => {
            return (
              <h2>{ p.name }</h2>
            )
          })
        }
      </div>
    )
  }
}

export default People;
```
### Adding Conditions
```javascript
import React, { Component } from 'react';

class People extends Component{
  constructor(props){
    super(props)
    this.state = {
      people: [
        {
          name: "Folan",
          score: 62
        },
        {
          name: "Folana",
          score: 57
        },
        {
          name: "Jon Doe",
          score: 40
        },
      ]
    }

  }
  render(){
    return(
      <div>
        {
          this.state.people.map((p) => {
            return (
              <div>
                <h2>{ p.name }</h2>
                {
                  (p.score >= 50) &&
                  <h3>Pass</h3>
                }
                {
                  (p.score < 50) &&
                  <h3>Fail</h3>
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default People;
```
## Events
In HTML

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

With React

```
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

### The "this" issue
If we want to use "this" referring to the Component (for example to use this.setState()) we need in the callback to have access to "this", and that's not the default behaviar in javascript. The solution will be to use .bind().

The bind() method creates a new function that, when called, has its "this" keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

Without bind:

```javascript
import React, { Component } from 'react';

class Counter extends Component{
  constructor(props){
      super(props)
      this.state = {
        counter: 0
      }
  }

  addOne(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render(){
    return(
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.addOne}>Add</button>
      </div>
    )
  }
}

export default Counter;
````

This code will return an error: "TypeError: Cannot read property 'setState' of undefined"
to fix it we bind "this" to the function definition.

```html
<button onClick={this.addOne.bind(this)}>Add</button>
```


### Another solution: arrow functions:
We define a new arrow function which call the callback with this.callbackName().

```html
<button onClick={() => this.addOne()}>Add</button>
```

## Child changes state of parent
If we want the child to change the state of parent we can pass a callback in the props then we want the change to happen we call the callback from the child. Using bind we change the context to the parent component now we can access "this" in the callback to use methods like setState().

### Example
// Parent
```javascript
import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        counter: 0
      }
  }

  addOne(){
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Counter: { this.state.counter }</h1>
        <Counter onClickAdd={ this.addOne.bind(this) }/>
      </div>
    );
  }
}

export default App;
```

//Child

```javascript
import React, { Component } from 'react';

class Counter extends Component{
  addOne(){
    this.props.onClickAdd()
  }

  render(){
    return(
      <div>
        <button onClick={() => this.addOne()}>Add</button>
      </div>
    )
  }
}

export default Counter;
```
