# React quiz : straight out of the docs

* React automatically updates the view when the state of a component is changed
* The application code has to update the view manually whenever the state is changed
* The developer has to manually update the view
* A component can not change the value of its props
* A component can not change the value of its state
* When the state of a component is changed, react propagates the changes to all child components
* The `setState` method is synchronous, it changes the state immediately
* The `setState` method is asynchronous, it changes the state few milliseconds after its call
* The `setState` method can take a callback function as a second argument and call it when the state is changed
* Props are read-only
* Props are changeable
* Using props, we pass data from a child component to a parent component
* To bind an input value to a state variable `someVal` we use `<input type='text' .....={state.someVal} on.......={this.changeSomeVal} />`
* It is recommended to keep the state of our app in:
  * a separate `State` component
  * the root component
  * a separate file `AppState.js`
  * across all components

* Which of the following is a valid JSX syntax
  * `<img src={someVar} class=”img-big” />`
  * `<img src=’image.png’ alt=’alternative text’ >`
  * `<MyComponent>{{names: [‘first’, ‘second’]}}</MyComponent>`
  * `<mycomp></mycomp>`
  * `<mycomp/>`
* The `render` method of a component must return:
  * A single JSX element
  * An array of JSX elements
  * Multiple JSX elements
* The child components are accessible using:
  * `this.child`
  * `this.children`
  * `this.childrenElements`
  * `this.childNodes`
  * children are not accessible
  * helps managing the statec of the application
* `prop-types` is a library that:
  * helps identifying the data types of the props of a component
  * helps installing npm dependencies in a project
* `react-router` is a library that:
  * helps creating multiple pages on a SPA
  * helps creating links inside the app to different components
  * helps creating routes from app to app
* To install `react-router`, we use:
  * `npm install --save react-router`
