# Special Values

There are several special values spread across the various types that the alert JS developer needs to be aware of, and use properly.

## The Non-value Values

* For the undefined type, there is one and only one value: undefined

* For the null type, there is one and only one value: null.

>	So for both of them, the label is both its type and its value.

Both undefined and null are often taken to be interchangeable as either "empty" values or "non" values. Other developers prefer to distinguish between them with nuance. For example:

* null is an empty value
* undefined is a missing value

or


* undefined hasn't had a value yet
* null had a value and doesn't anymore

Some cases where undefined may show up

```javascript
var a;
a === undefined        // true
typeof a === undefined // true

var ob = {
	name: 'mr.x',
	serialnumber: 9584759
}

ob.someProperty === undefined // true

if ('someProperty' in ob) {
	// will not be reached
}

if ('name' in ob) {
	// will reach this
}

typeof ob.someProperty === undefined
```

checking for null value may be required in some test cases

```javascript
var val = null;

// this is somewhat weird (O.o)
// dont do this
typeof val === null     // false
typeof val === 'object' // true

// the correct way to check for null value
val === null 			// true
(!val && typeof val === 'object') // true
```

## Special Numbers

The number type includes several special values. We'll take a look at each in detail.

<strong>The Not Number, Number</strong>

Any mathematic operation you perform without both operands being numbers will result in the operation <strong>failing</strong> to produce a valid number, in which case you will get the NaN value.

NaN literally stands for "not a number", though this label/description is very poor and misleading, as we'll see shortly. It would be much more accurate to think of NaN as being "invalid number," "failed number," or even "bad number," than to think of it as "not a number."

For example:

```javascript
var a = 2 / "foo";		// NaN

typeof a === "number";	// true
```

>	In other words: "the type of not-a-number is 'number'!" Hooray for confusing names and semantics.

you might think you could directly compare to NaN itself, as you can with any other value, like null or undefined. Nope.

```javascript
var a = 2 / "foo";

a === NaN;	// false
```

So how do we test for it, if we can't compare to NaN (since that comparison would always fail)?

```javascript
var a = 2 / "foo";

Number.isNaN( a ); // true
```

