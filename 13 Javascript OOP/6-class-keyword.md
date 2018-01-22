# Classes

The “class” construct allows to define prototype-based classes with a clean, nice-looking syntax.

## The “class” syntax

Here’s a prototype-based class User:

```javascript
function User(name) {
  this.name = name;
}

User.prototype.sayHi = function() {
  alert(this.name);
}

let user = new User("John");
user.sayHi();
```

that’s the same using class syntax:

```javascript
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

let user = new User("John");
user.sayHi();
```

Here’s the illustration of what class User creates:

<p align="center">
  <img src="../assets/images/class-user.png">
</p>

## Getters/setters

Classes may also include **getters/setters**.
Here’s an example with **user.name** implemented using them:

```javascript
class User {

  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name too short.
```

## Summary

The basic class syntax looks like this:

```javascript
class MyClass {
  constructor(...) {
    // ...
  }
  method1(...) {}
  method2(...) {}
  get something(...) {}
  set something(...) {}
  // ...
}
```

The value of **MyClass** is a function provided as constructor.
