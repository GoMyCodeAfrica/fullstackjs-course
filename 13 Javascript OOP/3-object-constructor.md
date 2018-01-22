# Constructor, operator **"new"**

* The regular **{...}** syntax allows to create one object.

* But often we need to create many similar objects, like multiple **users** or **tweets** or **posts** and so on.

* That can be done using constructor functions and the **"new"** operator.

## Constructor function

Constructor functions technically are regular functions.

* There are two conventions:
  - They are named with capital letter first.
  - They should be executed only with "new" operator.

```javascript
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");
alert(user.name); // Jack
alert(user.isAdmin); // false
```
When a function is executed as **new User(...)**, it does the following steps:

1. A new empty object is created and assigned to **this**.

2. The function body executes. Usually it modifies **this**, adds new properties to it.

3. The value of **this** is returned.

In other words, **new User(...)** does something like:

```javascript
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}
```

* If we want to create other users, we can call **new User("Ann")**, **new User("Alice")** and so on.

* Much shorter than using literals every time, and also easy to read.

## Methods in constructor

The constructor function may have parameters that define how to construct the object, and what to put in it.

We can add to this not only properties, but methods as well.

```javascript
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```

**new User(name)** above creates an object with the given **name** and the method **sayHi**.

## Summary

* Constructor functions are regular functions, but there’s a common agreement to name them with **capital letter** first.

* Constructor functions should only be called using **new**.

* We can use constructor functions to make multiple similar objects.

* JavaScript provides constructor functions for many built-in language objects: like Date for dates, Set for sets

## Exercises

Create a constructor function **Calculator** that creates objects with 3 methods:

* **read()** asks for two values using prompt and remembers them in object properties.

* **sum()** returns the sum of these properties.

* **mul()** returns the multiplication product of these properties.

For instance:

```javascript
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

<hr>

Create a constructor function **Accumulator(startingValue)**.

Object that it creates should:

* Store the “current value” in the property **value**. The starting value is set to the argument of the constructor **startingValue**.

* The **read()** method should use prompt to read a new number and add it to value.

In other words, the **value** property is the sum of all user-entered values with the initial value **startingValue**.

Here’s the demo of the code

```javascript
let accumulator = new Accumulator(1); // initial value 1
accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
alert(accumulator.value); // shows the sum of these values
```

<hr>

Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

1. First, implement the method **calculate(str**) that takes a string like "1 + 2" in the format **“NUMBER operator NUMBER”** (space-delimited) and returns the result. Should understand **plus +** and **minus -**.

Usage example:

```javascript
let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
```

2. Then add the method **addOperator(name, func)** that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

For instance, let’s add the multiplication *****, division **/** and power ******:

```javascript
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
```

* No brackets or complex expressions in this task.
* The numbers and the operator are delimited with exactly one space.
* There may be error handling if you’d like to add it.
