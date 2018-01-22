# Class patterns

The term “class” comes from the theory of **object-oriented** programming.

In JavaScript there are several well-known programming patterns to make classes even without using the **class** keyword.

We’ll talk about them first.

## Functional class pattern

The constructor function below can be considered a **“class”**.

```javascript
function User(name) {
  this.name = name
  this.sayHi = () => {
    alert(this.name);
  };
}

let user = new User("John");
user.sayHi(); // John
```

A constructor function (such as **User** function):

1. It is a **“program-code-template”** for creating objects (callable with new).

2. It provides initial values for the object properties (**name** from parameters).

3. It provides methods (**sayHi**).

This is called _functional class pattern_.

## Prototype-based classes

**Prototype-based** classes are the most important and generally the best.

```javascript
function User(name, birthday) {
  this._name = name;
}


User.prototype.sayHi = function() {
  alert(`Hi my name is: ${this._name}`);
};

let user = new User("John");

user.sayHi(); // John, age:17
```

The code structure:

1. The constructor User only initializes the current object state.

2. Methods are added to User.prototype.

Here are the advantages over the functional pattern:

1. In the functional pattern, each object has its own copy of every method.

2. In the prototypal pattern, all methods are in **User.prototype** that is shared between all user objects.

**So the prototypal pattern is more memory-efficient.**

## Summary

According to the prototypal pattern:

1. Methods are stored in **Class.prototype**.

2. **Prototypes** inherit from each other.

## Exercises

Draw the object diagram for the code below.

**Rabbit:**
```javascript
function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.jump = function() {
  alert(`${this.name} jumps!`);
};

let rabbit = new Rabbit("My rabbit");
```

**Animal:**
```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  alert(`${this.name} eats.`);
};

let animal = new Animal("My animal");
```

<hr>

Find an error in the prototypal inheritance below.
What’s wrong? What are consequences going to be?

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  alert(this.name + ' walks');
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = Animal.prototype;

Rabbit.prototype.walk = function() {
  alert(this.name + " bounces!");
};
```

<hr>

The Clock class is written in functional style. Rewrite it using prototypes.

```javascript
function Clock(template) {

  let timer;

  function render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) min = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  this.stop = function() {
    clearInterval(timer);
  };

  this.start = function() {
    render();
    timer = setInterval(render, 1000);
  };

}
```
