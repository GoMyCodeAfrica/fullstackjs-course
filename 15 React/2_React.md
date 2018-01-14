# What's react ?

* React is a library for creating User Interfaces

# Why react ?
In this course, we will see why react has become a very big thing in just a few years.

## Its community

* React is one of the biggest open-source projects on Github.
* It is supported by a community of more than a 1000 developers.
* facebook created react and is still maintining it.
* react is used in major projects like facebook, instagram, airbnb, BBC and [much much more](https://www.google.tn/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwjBrqmBi8vXAhXJsxQKHQIXDZYQFggjMAA&url=https%3A%2F%2Fgithub.com%2Ffacebook%2Freact%2Fwiki%2Fsites-using-react&usg=AOvVaw3u_DU9HVKhKS_n8byEjbIs)

## Its ecosystem

React can be thought as just a view library. However, we can use many other libraries and tools to create even more powerful apps such as:
  * **Redux**: A state management library. It is based on a simple philosophy: all application data should live in one place
  * **React router**: A routing library that simulates multi-page navigation without reloading the page
  * **Webpack**: An advanced tool that enables the creation of production-ready code from the source code in an automatic way.
  * **Immutable.js**: The problem with JS objects is that they are mutable by nature. This library provides a set of immutable data structures.
  * **crate-react-app**: To get started with react with zero configuration, this is the tool to use.


## Its architecture

### Composition
* Compose the app into different components
* Components allow us to bisect our apps into smaller manageable pieces that are
  * Easy to understand
  * Do one thing very well
  * Have data as input and view as output
* examples:
  * a `Map` component that takes as input a latitude and longitude and displays the corresponding location
  * a `FriendList` component that takes as input a JSON list of friend objects and displays it
  * a `Header` component that takes as input a JSON list of link objects and displays it
* Activity:
  1. Compose the following facebook screenshot into a **tree of components**
  2. Associate each component with a possible **input and output**
  ![facebook screenshot](img/facebook-screenshot.jpg)

### Declarative
  * React offers a declarative API that allows us to describe the relation between the data and the view.
  * React takes care of updating the view to match the data.
  * Alternatively, we can update the data from the UI and react will take care of it.
  * Activity:
    1. Write a function `renderFriend` that takes as input the following object and returns an HTML string representing a friend
    2. Using the same function, create another one `renderFriends` that takes a **list** of friends as input
    ```javascript
      var friend = {
        name: 'John Doe',
        profile_image: 'http://i.pravatar.cc/300?img=33',
        profile_link: 'www.google.com'
      }
    ```

### Unidirectional data flow
  * React is based on a simple architecture: The view is a function of the data provided as input: `UI = fn(data)`
  * As developers, all we have to do is update the state of our apps (the data) and react will update the UI accordingly
  * The data passes through components and every component only gets the minimum amount of data needed.
  * Activity:
    Getting back to the same facebook example, draw a model of how data stored in the root component and how it flows through children components
### Explicit mutations
  * React does not allow modifying the app state directly
  * We need to get through the `setState` function to change the local

## It's easy to get started with
  * create-react-app
