# React components
inside a React, components are small parts that construct an application. The idea is to divide the application into small parts which make it easier to debug, add and manage the application.


## The Component Lifecycle
Each component has several “lifecycle methods”. Methods prefixed with `will` are called right before something happens, and methods prefixed with `did` are called right after something happens.

- `constructor()` : Component created
- `componentWillMount()` : Component created and ready to be rendred
- `componentDidMount()` : Component is now rendred
- `componentWillUnmount()` : Component will be destroyed or removed for the application
- `componentWillReceiveProps()` : Component will recieve data from parent through props
- `shouldComponentUpdate(nextProps, nextState)` : override to stop update for some props and state
- `componentWillUpdate()` : new props or state are being received
- `render()`
- `componentDidUpdate()` : after updating occurs. This method is not called for the initial render.


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
Using callbacks, for example for event handling, and we want to use `this` referring to the Component (for example to use this.setState()) we need in the callback to have access to `this`, and that's not the default behaviar in javascript. The solution will be to use .bind().

The bind() method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

Without bind:

```javascript
import React, { Component } from 'react'

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

export default Counter
````

This code will return an error: `TypeError: Cannot read property 'setState' of undefined`
to fix it we bind `this` to the function definition.

```html
<button onClick={this.addOne.bind(this)}>Add</button>
```


### Another solution: arrow functions:
We define a new arrow function which call the callback with this.callbackName().

```html
<button onClick={() => this.addOne()}>Add</button>
```

## Child changes state of parent
If we want the child to change the state of parent we can pass a callback in the props then we want the change to happen we call the callback from the child. Using bind we change the context to the parent component now we can access `this` in the callback to use methods like setState().

### Example
// Parent
```javascript
import React, { Component } from 'react'
import Counter from './Counter'

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
    )
  }
}

export default App
```

//Child

```javascript
import React, { Component } from 'react'

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

export default Counter
```

### Exercise
#### Messages App
Create 2 components: the parent render list of messages, the child contains the input and button to add a message.

## Demo application: Movies app
User stories:

As a user:
- I can list all movies: Each movie has a title, a picture, an author and Rating (for example 4/5, 3/5). The Rating should be displayed as "stars".

- I can edit a movie: Change the title, the rating or the author.

- I can filter movies by rating: I can filter the list of movies to only show movies which have rating > x.

- I can add a movie: From a form, I can add a movie specifying its title, rating, author, and image.


Notes:
- Create a new application using `create-react-app`.

- List of movies should be stored (hardcoded) in the state of `App` component.

- The application should have at least 4 components: App, MoviesList, MovieCard and MovieCreator (contains the form for adding a new movie). Feel free to add more components.

- Use bootstrap for Styling.

- Feel free to add more features for example searching a movie etc.
