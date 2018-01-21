# Introduction to Functional Programming

* **Functional Programming**, otherwise known as FP, is a programming paradigm based on pure functions
* A **pure function** is a function where the return value is **only determined by its input values**
* A pure function has **no side effects**. Side effects can be:
  * Changing one of its input values
  * Reading data from the disk or a server
  * Writing to the disk
  * Writing to the console !
  * Producing an error
* A pure function always returns the **same result** given the **same input**
* The only way for a pure to communicate with outside world is:
  * read data from its **input** parameters
  * write data in its **return** value
* A pure function **can** call other pure functions

## Activity: Is it pure ?

Which of the following is a pure function ? Why ?

* `Math.abs`
* `console.log`
* `String.prototype.toLowerCase`
* `Array.prototype.slice`
* `Array.prototype.push`
* `Array.prototype.concat`
* `Math.random`
* `$` (JQuery's selector)
* `x => Math.abs(x) + 20`
* `x => ({name: x..trim().toLowerCase(), age: 20})`
* `x => ({name: x.name , age: 20})`
