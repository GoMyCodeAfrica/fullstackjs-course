## Operators

Many operators are known to us from school. They are addition `+`, a multiplication `*`, a subtraction `-` and so on.

In this chapter we concentrate on aspects that are not covered by school arithmetic.

## Terms: “unary”, “binary”, “operand”

Before we move on, let’s grasp the common terminology.

* An `operand` – is what operators are applied to. For instance in multiplication `5 * 2` there are two operands: the left operand is `5`, and the right operand is `2`. Sometimes people say “arguments” instead of “operands”.

* An `operator` is unary if it has a single operand. For example, the unary negation `"-"` reverses the sign of the number:

```javascript
let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied
```

* An operator is binary if it has two operands. The same minus exists in the binary form as well:

```javascript
let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values
```

Formally, we’re talking about two different operators here: the unary negation (single operand, reverses the sign) and the binary subtraction (two operands, subtracts).

## Strings concatenation, binary +

Now let’s see special features of JavaScript operators that are beyond school arithmetics.

Usually the plus operator `'+'` sums numbers.

But if the binary `+` is applied to strings, it merges (concatenates) them:

```javascript
let s = "my" + "string";
alert(s); // mystring
```

Note that if any of operands is a string, then the other one is converted to a string too.

For example:

```javascript
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```

See, it doesn’t matter whether the first operand is a string or the second one. The rule is simple: if either operand is a string, then convert the other one into a string as well.

## Remainder %

The remainder operator `%` despite its look does not have a relation to percents.

The result of `a % b` is the remainder of the integer division of `a` by `b`.

For instance:

```javascript
alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2
alert( 8 % 3 ); // 2 is a remainder of 8 divided by 3
alert( 6 % 3 ); // 0 is a remainder of 6 divided by 3
```

## Exponentiation **

The exponentiation operator `**` is a recent addition to the language.

For a natural number b, the result of `a ** b` is `a` multiplied by itself `b` times.

For instance:

```javascript
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)
```

The operator works for non-integer numbers of `a` and `b` as well, for instance:

```javascript
alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root, that's maths)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)
```

## Increment/decrement

Increasing or decreasing a number by one is among the most common numerical operations.

So, there are special operators for that:

* **Increment** `++` increases a variable by 1:

```javascript
let counter = 2;
counter++;      // works same as counter = counter + 1, but shorter
alert( counter ); // 3
```

* **Decrement** `--` decreases a variable by 1:

```javascript
let counter = 2;
counter--;      // works same as counter = counter - 1, but shorter
alert( counter ); // 1
```

## Modify-in-place

We often need to apply an operator to a variable and store the new result in it.

For example:

```javascript
let n = 2;
n = n + 5;
n = n * 2;
```

This notation can be shortened using operators `+=` and `*=`:

```javascript
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14
```

Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: `/=`, `-=` etc.

Such operators have the same precedence as a normal assignment, so they run after most other calculations:

```javascript
let n = 2;

n *= 3 + 5;

alert( n ); // 16  (right part evaluated first, same as n *= 8)
```
