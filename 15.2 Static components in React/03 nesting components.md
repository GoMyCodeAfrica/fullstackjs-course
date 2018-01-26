# Nesting components

```javascript
import React, { Component } from 'react'

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
## Export components

```javascript
import React, { Component } from 'react'
class Parent extends Component {
    render() {
        return (
          ...
        )
    }
}
export default Parent;
```
or we can do this :

```javascript
import React, { Component } from 'react'

import Child from '../Child'

export default class Parent extends Component {
    render() {
        return (
          .....
        )
    }
}

```
