# React components
inside a React, components are small parts that construct an application. The idea is to divide the application into small parts which make it easier to debug, add and manage the application.

## Define a component
To define a new component we create a class that extends the class "Component", every component should have a method called "render": a function that tells the component what to... render

```javascript
import React, { Component } from 'react';

class NewComponent extends Component {
    render() {
        return <h1>Component JSX</h1>
    }
}

export default NewComponent
```

## Include a component into another

```javascript
import React, { Component } from 'react';

import Child from '../Child'
import AnotherChild from '../AnotherChild'

class Parent extends Component {
    render() {
        return (
            <h1>Parent JSX:</h1>
            <Child />
            <AnotherChild />
            <h1>Parent JSX contenue here</h1>
        )
    }
}
```

## The Component Lifecycle
Each component has several “lifecycle methods”. Methods prefixed with will are called right before something happens, and methods prefixed with did are called right after something happens.

- constructor() => Component created
- componentWillMount() => Component created and ready to be rendred
- componentDidMount() => Component is now rendred
- componentWillUnmount() => Component will be destroyed or removed for the application
- componentWillReceiveProps() => Component will recieve data from parent through props
- shouldComponentUpdate(nextProps, nextState) => override to stop update for some props and state
- componentWillUpdate() => new props or state are being received
- render()
- componentDidUpdate() => after updating occurs. This method is not called for the initial render.


## Styling react components
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

### Exercise
Create a components which contains 2 divs, one with text color red and the other with color green, change the text size and background.

Use one of the 2 methods for each div.

## Props
We can think of props as Component's Input: The parent component can pass values to the child component through props.

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

### Exercise
Create a Calculator Component which takes 2 inputs (through props) x and y and render (x+y).

```html
  <Calculator x=5 y=6 />
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

### Exercise
Create a Countdown component which takes number of seconds as input (through props) and render a countdown to 0.


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

### Exercise
Add more attributes to person object (email, major etc.)

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

### Exercise
In place of rendering text "Fail/Pass" use styling to color the name of person depending on his score:
- if < 50 => RED
- if >= 50 => GREEN


## Events
In HTML

```html
<button onclick="activateLasers()">
  Activate Lasers
</button>
```

With React

```html
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

### Exercise
Create a component that contains a button and for every click it switch between two words "Active"/"Inactive".


### The "this" issue
Using callbacks, for example for event handling, and we want to use "this" referring to the Component (for example to use this.setState()) we need in the callback to have access to "this", and that's not the default behaviar in javascript. The solution will be to use .bind().

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

### Exercise
#### Messages App
Create 2 components: the parent render list of messages, the child contains the input and button to add a message.

## Demo application: Movies app
User stories:

As a user:
- I can list all movies: Each movie has a title, a picture, an author and Rating (for example 4/5, 3/5).
The Rating should be displayed as "stars"
- I can edit a movie: Change the title, the rating or the author
- I can filter movies by rating: I can filter the list of movies to only show movies which have rating > x.
- I can add a movie: From a form, I can add a movie specifying its title, rating, author, and image.
