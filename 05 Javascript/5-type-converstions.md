# Type Conversions

Most of the time, operators and functions automatically convert a value to the right type. That’s called “type conversion”.

For example, `alert` automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

There are also cases when we need to explicitly convert a value to put things right.

## ToString

String conversion happens when we need the string form of a value.

For example, `alert(value)` does it to show the value.

We can also use a call `String(value)` function for that:

```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```

String conversion is mostly obvious. A `false` becomes `"false"`, `null` becomes `"null"` etc.

## ToNumber

Numeric conversion happens in mathematical functions and expressions automatically.

For example, when division `/` is applied to non-numbers:

```javascript
alert( "6" / "2" ); // 3, strings are converted to numbers
```

We can use a `Number(value)` function to explicitly convert a `value`:

```javascript
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```

Explicit conversion is usually required when we read a value from a string-based source like a text form, but we expect a number to be entered.

If the string is not a valid number, the result of such conversion is `NaN`, for instance:

```javascript
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN, conversion failed
```

Numeric conversion rules:

Value           |  becomes
----------------|----------
undefined       |  NaN
null            | 0
true and false  | 1 and 0
string          | Whitespaces from the start and the end are removed. Then, if the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

Examples:

```javascript
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```
Please note that `null` and `undefined` behave differently here: `null` becomes a `zero`, while undefined becomes `NaN`.

<strong>Addition `‘+’` concatenates strings</strong>

Almost all mathematical operations convert values to numbers. With a notable exception of the addition `+`. If one of the added values is a string, then another one is also converted to a string.

Then it concatenates (joins) them:

```javascript
alert( 1 + '2' ); // '12' (string to the right)
alert( '1' + 2 ); // '12' (string to the left)
```

That only happens when one of the arguments is a string. Otherwise, values are converted to numbers.

## ToBoolean

Boolean conversion is the simplest one.

It happens in logical operations (later we’ll meet condition tests and other kinds of them), but also can be performed manually with the call of `Boolean(value)`.

The conversion rule:

* Values that are intuitively _“empty”_, like `0`, an `empty string`, `null`, `undefined` and `NaN` become `false`.

* Other values become true.

For instance:

```javascript
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

## Summary

There are three most widely used type conversions: to string, to number and to boolean.

**ToString** – Occurs when we output something, can be performed with `String(value)`. The conversion to string is usually obvious for primitive values.

**ToNumber** – Occurs in math operations, can be performed with `Number(value)`.

The conversion follows the rules:

Value           |  becomes
----------------|----------
undefined       |  NaN
null            | 0
true and false  | 1 and 0
string          | Whitespaces from the start and the end are removed. Then, if the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

**ToBoolean** – Occurs in logical operations, or can be performed with `Boolean(value)`.

Follows the rules:

Value                        |  becomes...
-----------------------------|--
0, null, undefined, NaN, ""  |  false
any other value              |  true

Most of these rules are easy to understand and memorize. The notable exceptions where people usually make mistakes are:

* `undefined` is `NaN` as a number, not `0`.

* `"0"` and space-only strings like `" "` are true as a boolean.

## Active learning

**Type conversions**

What are results of these expressions?

```javascript
"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9\n" + 5
"  -9\n" - 5
null + 1
undefined + 1
```
