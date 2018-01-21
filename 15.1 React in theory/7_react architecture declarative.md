# React's architecture: Declarative

* React offers a **declarative API** that allows us to describe the relation between the **data** and the **view**.
* React takes care of updating the view to match the data.
* Alternatively, we can update the data from the UI and react will take care of it **automatically**.

## Activity

1. Write a function `renderFriend` that takes as input the following object and returns an HTML string representing a friend

  ```javascript
    var friend = {
      name: 'John Doe',
      profile_image: 'http://i.pravatar.cc/300?img=33',
      profile_link: 'www.google.com'
    }
  ```

2. Using the same function, create another one `renderFriends` that takes a **list** of friends as input
