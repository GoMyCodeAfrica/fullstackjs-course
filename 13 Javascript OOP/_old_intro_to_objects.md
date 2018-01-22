# Objects

An object is a collection of properties, and a property is an association between a name (or key) and a value.

A property's value can be a function, in which case the property is known as a method

In addition to objects that are predefined in the browser, you can define your own objects.

## Objects overview

Objects in JavaScript, can be compared to objects in real life.

The concept of objects in JavaScript can be understood with real life, tangible objects.

In JavaScript, an object is a standalone entity, with <strong>properties</strong> and <strong>type</strong>. 

Compare it with a cup, for example. A cup is an object, with properties.

A cup has a <strong>color</strong>, a <strong>design</strong>, <strong>weight</strong>, a <strong>material</strong> it is made of, etc. The same way, JavaScript objects can have properties, which define their characteristics.

## Objects and properties

A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects.

You access the properties of an object with a simple dot-notation:

```javascript
objectName.propertyName;
```

Like all JavaScript variables, both the object name (which could be a normal variable) and property name are case sensitive.

For example, let's create an object named `myCar` and give it properties named `make`, `model`, and `year` as follows:

```javascript
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
```

Unassigned properties of an object are `undefined` (and not `null`).

```javascript
myCar.color; // undefined
```

Properties of JavaScript objects can also be accessed or set using a bracket notation.

```javascript
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;
```

You can also access properties by using a string value that is stored in a variable:

```javascript
var propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';
```

You can use the bracket notation with `for...in` to iterate over all the enumerable properties of an object.

```javascript
function showProps(obj, objName) {
  var result = '';
  for (var i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += objName + '.' + i + ' = ' + obj[i] + '\n';
    }
  }
  return result;
}
```

So, the function call showProps(myCar, "myCar") would return the following:

```javascript
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

## Enumerate the properties of an object

Starting with ECMAScript 5, there are three native ways to list/traverse object properties:

* `for...in` loops
This method traverses all enumerable properties of an object and its prototype chain

* `Object.keys(o)`
This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.

* `Object.getOwnPropertyNames(o)`
This method returns an array containing all own properties' names (enumerable or not) of an object o.

## Creating new objects

JavaScript has a number of predefined objects. In addition, you can create your own objects.

You can create an object using:

1. Object initializer.

2. Create a constructor function and then instantiate an object invoking that function in conjunction with the `new` operator.

### Using object initializers

Using object initializers is sometimes referred to as creating objects with literal notation.

The syntax for an object using an object initializer is:

```javascript
var obj = { property_1:   value_1,   // property_# may be an identifier...
            2:            value_2,   // or a number...
            // ...,
            'property n': value_n }; // or a string
```

### Using a constructor function

Alternatively, you can create an object with these two steps:


1. Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.

2. Create an instance of the object with new.

For example, suppose you want to create an object type for cars. You want this type of object to be called car, and you want it to have properties for make, model, and year. To do this, you would write the following function:

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Now you can create an object called `mycar` as follows:

```javascript
var mycar = new Car('Eagle', 'Talon TSi', 1993);
```

You can create any number of car objects by calls to new. For example,

```javascript
var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);
```

