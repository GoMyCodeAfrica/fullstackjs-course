# Arrow functions

There’s one more very simple and concise syntax for creating functions.

It’s called “arrow functions”, because it looks like this:

```javascript
let func = (arg1, arg2, ...argN) => expression
```

it’s roughly the same as:

```javascript
let func = function(arg1, arg2, ...argN) {
  return expression;
}
```

Let’s see an example:

```javascript
let sum = (a, b) => a + b;

/* The arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

If we have only one argument, then parentheses can be omitted, making that even shorter:

```javascript
// same as
// let double = function(n) { return n * 2 }
let double = n => n * 2;

alert( double(3) ); // 6
```

If there are no arguments

```javascript
let sayHi = () => alert("Hello!");
sayHi();
```

If the body contains many statements or expressions

```javascript
let average = (values) => {  // the bracket opens a multiline function
  let result = 0;
  for (let val of values) {
    result += val
  }
  return result / values.length; // use return to get results
};

alert( average(1, 2) ); // 1.5
```

## Summary

Arrow functions are convinient for one-liners.
They come in two flavors:

* Without brackets: **(...args) => expression**:
  – the right side is an expression: the function evaluates it and returns the result.


* With brackets: **(...args) => { body }** – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.

## Exercises

1. Write an arrow function **isEven** that returns true if a given number is even.

2. Write an arrow function **isEven** in one line that returns true if a given number is even

3. Write an arrow function that returns true if a given number is odd using the previous **isEven** function
