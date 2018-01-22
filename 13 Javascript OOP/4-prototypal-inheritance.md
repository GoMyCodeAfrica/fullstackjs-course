# Prototypal inheritance

In programming, we often want to take something and extend it.

For instance, we have a **user object**, and want to make **admin** and **guest** as slightly modified variants of it.

Prototypal inheritance is a language feature that helps in that.

## **Prototype** property

In JavaScript, objects have a special hidden property **Prototype**

**Prototype** is either **null** or references another object.
That object is called **“a prototype”**:

<p align="center">
  <img src="../assets/images/object-prototype.png">
</p>

* When we read a property from object, and it’s missing, JavaScript automatically look for it in the prototype object.

* In programming, such thing is called “prototypal inheritance”.

```javascript
let animal = {
  name: 'JavaScript'
};

alert(animal.__proto__ === Object.prototype)
```

* Object literals have **Object.prototype** as their prototype property.

```javascript
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
alert( rabbit.eats ); // true (**)
alert( rabbit.jumps ); // true
```

* In line **(*)** we set animal to be a **prototype** of **rabbit**.

* when we try to read property **rabbit.eats (**)**, it’s not in **rabbit**, so JavaScript follows the **Prototype** (`__proto__`) reference and finds it in **animal**.

<p align="center">
  <img src="../assets/images/proto-animal-rabbit.png">
</p>

## Summary

* In JavaScript, all objects have a hidden **Prototype** property that’s either another **object** or **null**.

* We can use `obj.__proto__` to access it.

* If we want to read a property of **obj** or call a method, and it doesn’t exist, then JavaScript tries to find it in the **prototype**.

## Exercises

Here’s the code that creates a pair of objects, then modifies them.
Which values are shown?

```javascript
let animal = {
  jumps: null
};
let rabbit = {
  __proto__: animal,
  jumps: true
};

alert( rabbit.jumps ); // ? (1)
delete rabbit.jumps;
alert( rabbit.jumps ); // ? (2)
delete animal.jumps;
alert( rabbit.jumps ); // ? (3)
```

<hr>

```javascript
let head = {
  glasses: 1
};

let table = {
  pen: 3
};

let bed = {
  sheet: 1,
  pillow: 2
};

let pockets = {
  money: 2000
};
```

Use `__proto__` to assign prototypes in a way that any property lookup will follow the path: **pockets → bed → table → head**.

<hr>

We have rabbit inheriting from animal.

If we call rabbit.eat(), which object receives the full property: animal or rabbit?

```javascript
let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();
```

<hr>

We have two hamsters: speedy and lazy inheriting from the general hamster object.

When we feed one of them, the other one is also full. Why? How to fix it?

```javascript
let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// This one found the food
speedy.eat("apple");
alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
alert( lazy.stomach ); // apple
```
