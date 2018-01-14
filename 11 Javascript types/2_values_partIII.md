## Value vs. Reference

A reference in JS points at a (shared) value, so if you have 10 different references, they are all always distinct references to a single <strong>shared</strong> value.

Moreover, in JavaScript, there are no syntactic hints that control value vs. reference assignment/passing. Instead, the <strong>type</strong> of the value solely controls whether that value will be assigned by value-copy or by reference-copy.

Let's illustrate:

```javascript
var a = 2;
var b = a; // `b` is always a copy of the value in `a`
b++;
a; // 2
b; // 3

var c = [1,2,3];
var d = c; // `d` is a reference to the shared `[1,2,3]` value
d.push( 4 );
c; // [1,2,3,4]
d; // [1,2,3,4]
```

Simple values (aka scalar primitives) are always assigned/passed by value-copy:

* null 
* undefined
* string
* number
* boolean
* ES6's symbol

Compound values -- objects, arrays and functions -- always create a copy of the reference on assignment or passing.

The most common way such confusion happens is with function parameters:

```javascript
function foo(x) {
	x.push( 4 );
	x; // [1,2,3,4]

	// later
	x = [4,5,6];
	x.push( 7 );
	x; // [4,5,6,7]
}

var a = [1,2,3];

foo( a );

a; // [1,2,3,4]  not  [4,5,6,7]
```

>	Remember: you cannot directly control/override value-copy vs. reference -- those semantics are controlled entirely by the type of the underlying value.

To effectively pass a compound value (like an array) by value-copy, you need to manually make a copy of it, so that the reference passed doesn't still point to the original. For example:

```javascript
foo( a.slice() );
```

>	slice(..) with no parameters by default makes an entirely new (shallow) copy of the array. So, we pass in a reference only to the copied array, and thus foo(..) cannot affect the contents of a.

To do the reverse -- pass a scalar primitive value in a way where its value updates can be seen, kinda like a reference -- you have to wrap the value in another compound value (object, array, etc) that can be passed by reference-copy:

```javascript
function foo(wrapper) {
	wrapper.a = 42;
}

var obj = {
	a: 2
};

foo( obj );

obj.a; // 42
```

>	The only control you have over reference vs. value-copy behavior is the type of the value itself, so you must indirectly influence the assignment/passing behavior by which value types you choose to use.

## Review

In JavaScript, arrays are simply numerically indexed collections of any value-type. strings are somewhat "array-like", but they have distinct behaviors and care must be taken if you want to treat them as arrays. Numbers in JavaScript include both "integers" and floating-point values.

Several special values are defined within the primitive types.

The null type has just one value: null, and likewise the undefined type has just the undefined value. undefined is basically the default value in any variable or property if no other value is present.

numbers include several special values, like NaN (supposedly "Not a Number", but really more appropriately "invalid number")

Simple scalar primitives (strings, numbers, etc.) are assigned/passed by value-copy, but compound values (objects, etc.) are assigned/passed by reference-copy. References are not like references/pointers in other languages -- they're never pointed at other variables/references, only at the underlying values.