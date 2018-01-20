## Its architecture

### 1. Composition

* Compose the app into many small components
* Components allow us to bisect our apps into smaller manageable pieces that are
  * *Easy* to understand
  * Do *one* thing very well
  * Have *data* as input and *view* as output
* examples:
  * a `Map` component that takes as input a latitude and longitude and displays the corresponding location
  * a `FriendList` component that takes as input a JSON list of friend objects and displays it
  * a `Header` component that takes as input a JSON list of link objects and displays it

### Activity

1. Compose the following facebook screenshot into a **tree of components**
2. Associate each component with a possible **input and output**

  ![facebook screenshot](img/facebook-screenshot.jpg)

### 2. Declarative

* React offers a **declarative API** that allows us to describe the relation between the **data** and the **view**.
* React takes care of updating the view to match the data.
* Alternatively, we can update the data from the UI and react will take care of it **automatically**.

### Activity

1. Write a function `renderFriend` that takes as input the following object and returns an HTML string representing a friend

  ```javascript
    var friend = {
      name: 'John Doe',
      profile_image: 'http://i.pravatar.cc/300?img=33',
      profile_link: 'www.google.com'
    }
  ```

2. Using the same function, create another one `renderFriends` that takes a **list** of friends as input

### 3. Unidirectional data flow

* React is based on a simple architecture: The view is a function of the data provided as input: `UI = fn(data)`
* As developers, all we have to do is update the state of our apps (the data) and react will update the UI accordingly
* The data passes through components and every component only gets the minimum amount of data needed.

### Activity

Getting back to the same facebook example, draw a model of how data stored in the root component and how it flows through children components

### 4. Explicit mutations

* React does not allow modifying the app state directly
* We need to get through the `setState` function to change the local state
