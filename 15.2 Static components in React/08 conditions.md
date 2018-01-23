
# Conditions

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

export default People
```

### Exercise
Instead of rendering text "Fail/Pass" use styling to color the name of person depending on his score:
- if `< 50` => RED
- if `>= 50` => GREEN
