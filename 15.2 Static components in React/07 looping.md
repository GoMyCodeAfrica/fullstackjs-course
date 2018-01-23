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

export default People
```

## Exercise
Add more attributes to person object (email, major etc.)
