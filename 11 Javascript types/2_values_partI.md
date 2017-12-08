# Values

`arrays`, `strings`, and `numbers` are the most basic building-blocks of any program, but JavaScript has some unique characteristics with these types that may either delight or confound you.

Let's look at several of the built-in value types in JS, and explore how we can more fully understand and correctly leverage their behaviors.

## Arrays

As compared to other type-enforced languages, JavaScript arrays are just containers for any type of value, from string to `number` to `object` to even another `array` (which is how you get multidimensional arrays).

```javascript
var a = [ 1, "2", [3] ];

a.length;		// 3
a[0] === 1;		// true
a[2][0] === 3;	// true
```

`arrays` are numerically indexed (as you'd expect), but the tricky thing is that they also are `objects` that can have `string` keys/properties added to them (but which don't count toward the length of the `array`):

```javascript
var a = [ ];

a[0] = 1;
a["foobar"] = 2;

a.length;		// 1
a["foobar"];	// 2
a.foobar;		// 2
```

However, a gotcha to be aware of is that if a string value intended as a key can be coerced to a standard base-10 number, then it is assumed that you wanted to use it as a number index rather than as a string key!

```javascript
var a = [ ];

a["13"] = 42;

a.length; // 14
```

>	Generally, it's not a great idea to add string keys/properties to arrays. Use objects for holding values in keys/properties, and save arrays for strictly numerically indexed values.

How to check if a variable hold an array value? probably we use typeof!

```javascript
// Wrong approach
typeof ['a, 'b', 'c'] // 'object'

// Correct approach
Array.isArray(['a', 'b', 'c']) // true

```

## Array-Likes

There will be occasions where you need to convert an array-like value (a numerically indexed collection of values) into a true array, usually so you can call array utilities (like indexOf(..), concat(..), forEach(..), etc.) against the collection of values.

For example, various DOM query operations return lists of DOM elements that are not true arrays but are array-like enough for our conversion purposes. Another common example is when functions expose the arguments (array-like) object (as of ES6, deprecated) to access the arguments as a list.

One very common way to make such a conversion is to borrow the slice(..) utility against the value:

```javascript
var divList = document.querySelectorAll('div');
Array.isArray(divList) // false

// One way to convert a DOM list to a JS array
var divArray = Array.prototype.slice.call(divList);
Array.isArray(divArray) // true

// As of ES6, there's also a built-in utility called Array.from(..)
var divArray = Array.from(divList)
Array.isArray(divArray) // true
```

## Strings

It's a very common belief that strings are essentially just arrays of characters. While the implementation under the covers may or may not use arrays, it's important to realize that JavaScript strings are really not the same as arrays of characters. The similarity is mostly just skin-deep.

For example, let's consider these two values:

```
var a = "foo";
var b = ["f","o","o"];

a.length;							// 3
b.length;							// 3

a.indexOf( "o" );					// 1
b.indexOf( "o" );					// 1

var c = a.concat( "bar" );			// "foobar"
var d = b.concat( ["b","a","r"] );	// ["f","o","o","b","a","r"]

a === c;							// false
b === d;							// false

a;									// "foo"
b;									// ["f","o","o"]
```

So, they're both basically just "arrays of characters", right? <strong>Not exactly</strong>:

JavaScript strings are <strong>immutable</strong>, while arrays are quite <strong>mutable</strong>.

>	A further consequence of immutable strings is that none of the string methods that alter its contents can modify in-place, but rather must create and return new strings. By contrast, many of the methods that change array contents actually do modify in-place.

```javascript
c = a.toUpperCase();
a === c;	// false
a;			// "foo"
c;			// "FOO"

b.push( "!" );
b;			// ["f","O","o","!"]
```

## Numbers

JavaScript has just one numeric type: number. This type includes both "integer" values and fractional decimal numbers. I say "integer" in quotes because it's long been a criticism of JS that there are not true integers, as there are in other languages. That may change at some point in the future, but for now, we just have numbers for everything.

So, in JS, an "integer" is just a value that has no fractional decimal value. That is, 42.0 is as much an "integer" as 42.

 number values can access different methods. For example, the toFixed(..) method allows you to specify how many fractional decimal places you'd like the value to be represented with:

```javascript
var a = 42.59;

a.toFixed( 0 ); // "43"
a.toFixed( 1 ); // "42.6"
a.toFixed( 2 ); // "42.59"
a.toFixed( 3 ); // "42.590"
a.toFixed( 4 ); // "42.5900"
```

Notice that the output is actually a string representation of the number.

numbers can also be specified in exponent form, which is common when representing larger numbers, such as:

```javascript
var onethousand = 1E3;						// means 1 * 10^3
var onemilliononehundredthousand = 1.1E6;	// means 1.1 * 10^6
```

<strong>Testing for Integers</strong>

To test if a value is an integer, you can use the ES6-specified Number.isInteger(..):

```javascript
Number.isInteger( 42 );		// true
Number.isInteger( 42.000 );	// true
Number.isInteger( 42.3 );	// false
```

