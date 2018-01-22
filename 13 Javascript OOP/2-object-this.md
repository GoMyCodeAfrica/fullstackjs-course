# Object methods, "this"

* Object in JavaScript have properties and methods.

* In this lesson we study how to use the keyword **"this"** with object methods.

## Method examples

For the start, let’s teach the user to say hello

```javascript
let user = {
  name: "John",
  age: 30
};

user.sayHi = function() {
  alert("Hello!");
};

user.sayHi(); // Hello!
```

* A function that is the property of an object is called its _method_.

* The function **sayHi** is a method of **user**

## Method shorthand

There exists a shorter syntax for methods in an object literal:

```javascript
// these objects do the same

let user = {
  sayHi: function() {
    alert("Hello");
  }
};

// method shorthand looks better, right?
let user = {
  sayHi() { // same as "sayHi: function()"
    alert("Hello");
  }
};
```

* As demonstrated, we can omit **"function"** and just write **sayHi()**.

## “this” in methods

* Usually an object method needs to access the information stored in the object to do its job.

* The code inside **user.sayHi()** may need the name of the **user**.

**To access the object, a method can use the this keyword.**

```javascript
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert(this.name);
  }

};

user.sayHi(); // John
```

* During the execution of **user.sayHi()**, the value of **this** will be **user**.

## Summary

* Functions that are stored in object properties are called _“methods”_.

* Methods allow objects to “act” like _object.doSomething()_.

* Methods can reference the object as _this_.

## Exercises

**Create a calculator**

Create an object **calculator** with three methods:

* **read()** prompts for two values and saves them as object properties.
* **sum()** returns the sum of saved values.
* **mul()** multiplies saved values and returns the result.

```javascript
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
```

**Chaining**

There’s a **ladder** object that allows to go up and down:

```javascript
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
```

Now, if we need to make several calls in sequence, can do it like this:

```javascript
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
```

Modify the code of up and down to make the calls chainable, like this:

```javascript
ladder.up().up().down().showStep(); // 1
```

Such approach is widely used across JavaScript libraries.
