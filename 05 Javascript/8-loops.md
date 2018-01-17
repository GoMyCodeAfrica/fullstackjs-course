# Loops: while and for

We often have a need to perform similar actions many times in a row.

For example, when we need to output goods from a list one after another. Or just run the same code for each number from 1 to 10.

Loops are a way to repeat the same part of code multiple times.

## The “while” loop

The while loop has the following syntax:

```javascript
while (condition) {
  // code
  // so-called "loop body"
}
```

While the condition is true, the code from the loop body is executed.

For instance, the loop below outputs i while i < 3:

```javascript
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
```

A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

If there were no i++ in the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and for server-side JavaScript we can kill the process.

Any expression or a variable can be a loop condition, not just a comparison. They are evaluated and converted to boolean by while.

For instance, the shorter way to write while (i != 0) could be while (i):

```javascript
let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}
```

**Brackets are not required for a single-line body**

If the loop body has a single statement, we can omit the brackets {…}:

```javascript
let i = 3;
while (i) alert(i--);
```

## The “do…while” loop

The condition check can be moved below the loop body using the do..while syntax:

```javascript
do {
  // loop body
} while (condition);
```

The loop will first execute the body, then check the condition and, while it’s truthy, execute it again and again.

For example:

```javascript
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
```

This form of syntax is rarely used except when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

## The “for” loop

The for loop is the most often used one.

It looks like this:

```javascript
for (begin; condition; step) {
  // ... loop body ...
}
```

Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:

```javascript
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
```

Let’s examine the for statement part by part:

**parts**

* begin 	i = 0 	Executes once upon entering the loop.

* condition 	i < 3 	Checked before every loop iteration, if fails the loop stops.

* step 	i++ 	Executes after the body on each iteration, but before the condition check.

* body 	alert(i) 	Runs again and again while the condition is truthy

The general loop algorithm works like this:

```code
Run begin
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ (if condition → run body and run step)
→ ...
```

If you are new to loops, then maybe it would help if you go back to the example and reproduce how it runs step-by-step on a piece of paper.

Here’s what exactly happens in our case:

```javascript
// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// if condition → run body and run step
if (i < 3) { alert(i); i++ }
// ...finish, because now i == 3
```

## Breaking the loop

Normally the loop exits when the condition becomes falsy.

But we can force the exit at any moment. There’s a special break directive for that.

For example, the loop below asks the user for a series of numbers, but “breaks” when no number is entered:

```javascript
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
```

The break directive is activated in the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing the control to the first line after the loop. Namely, alert.

The combination “infinite loop + break as needed” is great for situations when the condition must be checked not in the beginning/end of the loop, but in the middle, or even in several places of the body.

## Continue to the next iteration

The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead it stops the current iteration and forces the loop to start a new one (if the condition allows).

We can use it if we’re done on the current iteration and would like to move on to the next.

The loop below uses continue to output only odd values:

```javascript
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
```

For even values of i the continue directive stops body execution, passing the control to the next iteration of for (with the next number). So the alert is only called for odd values.

## Summary

We covered 3 types of loops:

* while – The condition is checked before each iteration.

* do..while – The condition is checked after each iteration.

* for (;;) – The condition is checked before each iteration, additional settings available.

To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

If we don’t want to do anything on the current iteration and would like to forward to the next one, the continue directive does it.

## Active learning

**Last loop value**

What is the last value alerted by this code? Why?

```javascript
let i = 3;

while (i) {
  alert( i-- );
}
```

**Which values shows the while?**

For every loop, write down which values it shows, in your opinion. And then compare with the answer.

Both loops alert same values or not?

1. The prefix form ++i:

```javascript
let i = 0;
while (++i < 5) alert( i );
```

2. The postfix form i++

```javascript
let i = 0;
while (i++ < 5) alert( i );
```

**Which values get shown by the "for" loop?**

For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

1. The postfix form:

```javascript
for (let i = 0; i < 5; i++) alert( i );
```

2. The prefix form:

```javascript
for (let i = 0; i < 5; ++i) alert( i );
```

**Output even numbers in the loop**

Use the for loop to output even numbers from 2 to 10.

**Replace "for" with "while"**

Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

```javascript
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
```

**Repeat until the input is correct**

Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask him to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.

**Output prime numbers**

An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

_Write the code which outputs prime numbers in the interval from 2 to n_.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.
