# AJAX Requests in React

## Introduction
React itself doesn’t have any allegiance to any particular way of fetching data. In fact, as far as React is concerned, it doesn’t even know there’s a “server” in the picture at all.

React simply renders components, using data from only two places: props and state.

## Axios: Fetching library
We will use Axios in this tutorial but keep in mind there's a lot of another library: "fetch" and "superagent" are also 2 popular ones.

### Installing Axios with npm

```bash
npm install axios
```

### Get request

```javaScript
import React, { Component } from 'react';

import axios from 'axios';

constructor(props) {
  super(props);

  this.state = {
    posts: []
  };
}

componentDidMount() {
   axios.get(URL)
     .then(res => {
       this.setState({ posts: res.data });
     })
     .catch(function (error) {
       console.log(error);
     });
}
```



### Post request

```javascript
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Read More in [Axios npm docs](https://www.npmjs.com/package/axios)

## Exercise
Use The Guardian open API to create a news application (Search for keyword and list news).

Example:
```
https://content.guardianapis.com/search?q=sports&api-key=test
```

Read more in the [API documentation](http://open-platform.theguardian.com/documentation/).
