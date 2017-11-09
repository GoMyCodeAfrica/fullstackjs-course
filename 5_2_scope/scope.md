## What is scope ?

* In JavaScript, scope refers to the current context of your code.
* Scopes can be globally or locally defined.
* Understanding JavaScript scope will allow you to understand where variables/functions are accessible

## What is global scope ?

* Before you write a line of JavaScript, you’re in what we call the Global Scope. If we declare a variable, it’s defined globally:

  ```javascript
  // global scope
  var name = 'gmc';
  ```

* For example, when using JQuery, the `$` variable is defined in the global scope. That's why we can access it anywhere

  ```
  $('.main-title').text('fff')
  ```

## What is Local Scope?

* A local scope refers to any scope defined other than the global scope.
* There is one global scope, and each function defined has its own local scope.

* If I define a function and create variables inside it, those variables becomes locally scoped. Take this example:

  ```javascript
  // Global scope
  var myFunction = function () {
    var x = 8
    // Local scope
  };
  ```

* Any locally scoped items are not visible in the global scope. A simple example of this is the following:

  ```javascript
  var myFunction = function () {
    var name = 'gmc';
    console.log(name); // Todd
  };
  // Uncaught ReferenceError: name is not defined
  console.log(name);
  ```

## Function scope

* By default, all scopes in JavaScript are created with function scope only, they aren’t created by for or while loops or expression statements like if or switch.
* New functions = new scope - that’s the rule. A simple example to demonstrate this scope creation:

  ```javascript
  // Scope A
  var myFunction = function () {
    // Scope B
    var myOtherFunction = function () {
      // Scope C
    };
  };
  ```

## Variable hoisting

* Consider the following example:

  ```javascript
  a = 2;
  var a;
  console.log( a );
  ```

* What do you expect to be printed in the `console.log(..)` statement?
* Many developers would expect `undefined`, since the `var a` statement comes after the `a = 2`. However, the output will be 2.

* Consider another piece of code:

  ```javascript
  console.log( a );
  var a = 2;
  ```
* What is the output of `console.log(a)` ?
* If you guessed `2`, you're wrong! It's `undefined`

* So what is actually happening ?
  * In any given scope, global or local, all variable declarations are hoisted. Which means they are moved to the top of the scope(the function body) and are set to the value `undefined`
  * For example:
  ```javascript
  a = 2;
  var a;
  console.log( a );
  ```
  * Would be rewritten by the browser as:
  ```javascript
  var a;
  a = 2;
  console.log( a );
  ```
  * And this:
  ```javascript
  console.log( a );
  var a = 2;
  ```
  * Will be rewritten as
  ```javascript
  var a;
  console.log( a );
  a = 2;
  ```
  * **NB** The same logic is applied to function declarations

## Exercice

What is the output of the following code?:
```javascript
function b () {
    return 1;
}
function a() {
    console.log(b()); // 1 or 2
    function b() {
        return 2;
    }
};
a();
```

## Block scope
* Before the ES2015 version of Javascript, the only way to create a new scope is to create a new function
* However, in many cases, we only need to create a variable for a specific code block. Like counters in loops for example.
* Starting from ES2015, we can create scopes for blocks of code and not just functions
* To do so, we use the keyword `let` instead of `var`

  ```javascript

  // using var
  for(var i = 0; i < 5; i++) {
    console.log(i)
  }
  console.log(i) // 5

  // using let
  for(let j = 0; j < 5; j++) {
    console.log(j)
  }
  console.log(j) // Uncaught ReferenceError: j is not defined

  ```

* In the previous example, the variable `j` was defined only inside the `for` block, that's why we couldn't access it outside
* Alternatively, we can use the keyword `const` for constants
* A constant is a data container, just like a variable. But we cannot change its value once it has been declared:

  ```javascript
  const PI = 3.14
  console.log(PI) // 3.14
  // let's try to change the value of a constant
  PI = 3.22 // Error: Uncaught TypeError: Assignment to constant variable
  ```

## Exercice

* What is the ouput of the following code block?
* What happens if we convert all `var` declarations to `let`?

```javascript
var a = 1;

function one() {
  console.log(a);
}

function two(a) {
  console.log(a);
}

function three() {
  var a = 3;
  console.log(a);
}

one()
two(5)
two()
three()
```
