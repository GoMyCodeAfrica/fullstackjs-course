# Values and Types

Having a proper understanding of each type and its intrinsic behavior is absolutely essential to understand how to properly and accurately convert values to different types.

Nearly every JS program ever written will need to handle value coercion (converting from one type to another) in some shape or form. so it's important you do so responsibly and with confudence.

<p style="text-align: left;">KILE SIMPSON, YDNJS -- TYPES & GRAMMAR</p>

## Values

* JavaScript has many values: booleans, numbers, strings, arrays, and so on. All values in JavaScript have <strong>properties</strong>.

* Each property has a <strong>key</strong> (or name) and a <strong>value</strong>. You use the dot (.) operator to read a property:

```
value.propKey
```

Example of string properties:

```
'go my code'.length // 10
'go my code'.toUpperCase() // GO MY CODE
'go my code'.indexOf('my') // 4
``` 

Example of string properties:

```
var a = 42.59;
a.toFixed(0) // "43"
a.toFixed(1) // "42.6"
a.toFixed(2) // "42.59"
a.toFixed(3) // "42.590"
``` 

BE CAREFULL

```
42.toFixed(3) // SyntaxError

// these are valid:
(42).toFixed(3) // "42.000"
0.42.toFixed(3) // "0.420"
42..toFixed(3)  // "42.000"
```

Example of array properties

```
var a = [1, 2, 3]
a.length           // 3
a.push(10, 20, 30) // 6, means that there is 4 elements in the array
a.slice(3)         // [10, 20, 30]
a.reverse()        // [30, 20, 10, 3, 2, 1]
```

Example of object properties

```
var lan = {}
lan.name = "JavaScript"
lan.type = "Dynamic"
lan.rank = 1
```

## Built-in Types

JavaScript defines seven built-in types:

* null
* undefined
* boolean
* number
* string
* object
* symbol -- added in ES6

>	All of these types except object are called `primitives`.

The type of operator inspects the type of the given value, and always returns one fo the seven string values

```
typeof undefined  === "undefined" // true
typeof true       === "boolean"   // true
typeof 42         === "number"    // true
typeof "gomycode" === "string"    // true
typeof {life: 42} === "object"    // true

// add in ES6
typeof Symbol()   === "symbol"    // true
```

these six types have values of the corresponding type and return a string value of the same name, as shown.

As you have noticed `null` is excluded from the above listing.
It's a special in the sense that it's buggy.

```
typeof null === "object" // true
```

This original bug in JS has persisted for nearly two decades and will likely never be fixed because there is so much existing web content that relies on its buggy behavior that `fixing` the bug would create more `bugs` and breaks a lot of web software.

If you want to test for a null value using its type, you need a compound condition:
```
var a = null;
(!a && typeof a === "object"); // true
```

`null` is the only primitive value that is "falsy" but that also returns "object" from the typeof check.

What about the type of functions and arrays?
```
typeof function(a) { ... }; // "function"
typeof [1, 2, 3]            // "object"
```

<strong>Specifically, a function is referred to as a "callable object" -- an object that has an internal `[[Call]]` property that allows it to be invoked.</strong>

<strong>An array is an object with the additional characteristics of being numerically indexed (as opposed to just being string-keyed like plain objects) and maintaining an automatically updated `.length` property.</strong>

## Summary

JavaScript has seven built-in types: 

* null
* undefined
* boolean
* number
* string
* object
* symbol.

They can be identified by the `typeof` operator.

