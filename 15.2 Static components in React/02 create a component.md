## Before we start, JSX

* React's core concept is that we can create functions that **turn data into view** (HTML)
* If we wanted to do that in javascript, we would have to write something like this:

```javascript

// our data
let inception = {
  title: 'Inception',
  rating: 10,
  year: 2010
}

// the data-to-view function
const renderMovie = movie => `
  <div class="movie-container">
    <h1>${movie.title}</h1>
    ...
  </div>`

// render the data with jQuery for example
$('body').append(renderMovie(inception))

```

* This would work, but it's a hack. We're just writing a string instead of HTML
* To do this in react, we use a special syntax called JSX:

```javascript
const renderMovie = movie => (
  <div class="movie-container">
    <h1>{movie.title}</h1>
    ...
  </div>
)
```

* This is similar except
  * It's cleaner
  * We use `{}` instead `${}` to inject javascript variables
* JSX is a special syntax that allows us to write HTML-like code inside javascript
* This style of writing is what makes react components so powerful:
  *

## Create a functional component

* The easiest way to create a component is to use a function that returns JSX
* Using this syntax,

```javascript
import React from 'react'

const Header = () => (
  <div className='header-container'>
    <h1>Component JSX</h1>
  <div>
)

export default Header
```

* Component names in react are always written
