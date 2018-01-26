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

* Use this mockup to build something similar.

![](img/docplanner.jpg)
