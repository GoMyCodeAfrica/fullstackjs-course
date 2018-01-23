# Styling react components

## 1- Importing a css file

```javascript
import './style.css'
```

## 2- Inline styling
Not exately like CSS: attribut with "-" => camelCased version.
example: background-size => backgroundSize

```javascript
const divStyle = {
  marginTop: '40px',
  BackgroundColor: 'red'
}

[..]
<div style={divStyle}>
</div>
[..]
```

## Exercise
Create a component that contains 2 divs, one with text color red and the other with color green, change the text size and background.

Use one of the 2 methods for each div.
