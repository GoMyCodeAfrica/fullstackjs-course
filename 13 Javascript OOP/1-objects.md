# Objects

* There are seven language types in JavaScript.

* Six of them are called “primitive”, because their values contain only a single value (be it a string or a number etc).

* In contrast, objects are used to store key/value collections of various data.

## Literals and properties

We can immediately put some properties into `{...}` as **“key: value” pairs**:

```javascript
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

In the user object, there are two properties:

1. The first property has the name **"name"** and the value **"John"**.

2. The second one has the name **"age"** and the value **30**.

Property values are accessible using the dot notation:

```javascript
// get fields of the object:
alert( user.name ); // John
alert( user.age ); // 30
```

The value can be of any type. Let’s add a boolean one:

```javascript
user.isAdmin = true;
```

<p align="center">
  <img src="../assets/images/object-user-isadmin.png">
</p>

To remove a property, we can use **delete** operator:

```javascript
delete user.age;
```

## Square brackets

There’s a “square bracket notation” that works with any string as key

```javascript
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];
```

## Computed properties

We can use square brackets in an object literal. That’s called computed properties.

```javascript
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"
```

* **[fruit]** means that the property name should be taken from **fruit**.

## Existence check

* Accessing a non-existing property just returns **undefined**.

* It provides a very common way to test whether the property exists – to get it and compare vs **undefined**:

```javascript
let user = {};

alert( user.noSuchProperty === undefined ); // true means "no such property"
```

* There also exists a special operator **"in"** to check for the existence of a property.

```javascript
let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist
```

## The “for…in” loop

To walk over all keys of an object, there exists a special form of the loop: **for..in**.

For instance, let’s output all properties of user:

```javascript
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for(let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}
```

## Summary

Objects are associative arrays with several special features.

They store properties (key-value pairs), where:

* Property keys must be strings or symbols (usually strings).

* Values can be of any type.

To access a property, we can use:

* The dot notation: **obj.property**.

* Square brackets notation **obj["property"]**. Square brackets allow to take the key from a variable, like **obj[varWithKey]**.

Additional operators:

* To delete a property: **delete obj.prop**.

* To check if a property with the given key exists: **"key" in obj**.

* To iterate over an object: **for(let key in obj) loop**.

## Exercises

Write the code, one line for each action:

* Create an empty object user.
* Add the property name with the value John.
* Add the property surname with the value Smith.
* Change the value of the name to Pete.
* Remove the property name from the object.

<hr>

Write the function **isEmpty(obj)** which returns true if the object has no properties, false otherwise.

```javascript
let schedule = {};
alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false
```

<hr>

We have an object storing salaries of our team:

```javascript
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

<hr>

Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

For instance:

```javascript
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```

Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
