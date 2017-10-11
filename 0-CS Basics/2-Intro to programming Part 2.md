## Intro to programming, part 2

### Conditionals

Sometimes you'd want the browser to do something only if a certain condition is met. e.g. if the user is younger than 6 years old, show him the message 'Si mignon!'. We can write it in javascript like this:

```javascript
var age = prompt('How old are you?')
if(age < 6)
  prompt("Si mignon!")
```
