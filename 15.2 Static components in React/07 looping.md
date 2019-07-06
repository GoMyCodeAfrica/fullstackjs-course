# Looping

For looping throgh list we use `.map` returning JSX to render to one element of the list.

```javascript
import React, { Component } from 'react'

class People extends Component{
  constructor(props){
    super(props)
    this.state = {
      people: [
        {
          name: "Sirine",
          score: 62
        },
        {
          name: "Moez",
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

export default People
```

## Exercise

* Write a function that takes an object and returns a card.

![](img/looping.png)
