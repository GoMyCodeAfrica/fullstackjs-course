# Quiz: Weekly assessment

## Javascript data types

* **typeof operator**: What is the result of the following expressions ?
  * typeof 5
  * typeof NaN
  * typeof function() {}
  * typeof 'fsddfsdf'
  * typeof null

* **data types**: Which of the following is a data type in javascript ?
  * function
  * number
  * int
  * string
  * array
  * object
  * boolean
  * bool
  * symbol
  * for

* **falsy vs truthy**: What is the result of the following expressions ?
  * Boolean(0)
  * Boolean([])
  * !(!NaN)
  * !(!'alright')
  * 'a' < 'a'
  * 'b' > 'z'
  * 'z' > 'a'

---

## Scope, var, let and const

* **scope**: What would be written to the console ?

  ```javascript
  var i = 5;
  function habla() {
    for(let i = 0; i < 1; i++) {
      console.log(i);
    }
    for(var j = 0; j < 1; j++) {
      console.log(j);
    }
    console.log(i);
    console.log(j);
  }
  habla();
  ```

* **Variable hoisting**: What would be written to the console ?

  ```javascript
  go();
  function go() {
    console.log(a)
    console.log(b)
    console.log(x)
    console.log(y)
    var x = 5;
    let y;
    function innerGo() {
      console.log(a)
    }
    return innerGo
  }

  let a = 5;
  go()();
  nogo();
  const nogo = function() {
    console.log(a)
  }
  ```

---

## Declarative programming
* **Mapping arrays** Consider the following code snippet, what could be the missing code ?

    ```javascript
    var arr = [5, 8, 9, 6];

    /* missing code */

    console.log(arr2); // [10, 16, 18, 12]
    ```
  * `var arr2 = arr.map(function(x) { return x + 5})`
  * `var arr2 = arr.map(function(x) { return x + x})`
  * `var arr2 = arr.map(function(x) { return x * 2})`
  * `var arr2 = arr.map(function(x) { return x})`

* **Filtering arrays**

  * Consider the following code snippet, what is the missing code ?:

    ```javascript
    const words = ["spray", "limit", "elite", "exuberant", "destruction", "present", "happy"];

    /* missing code */

    console.log(longWords) // ["exuberant", "destruction", "present"]
    ```

    * `let longWords = words.filter(word => word.length)`
    * `let longWords = words.filter(word => word > 6)`
    * `let longWords = words.filter(word => word.length >= 6)`
    * `let longWords = words.filter(word => word.length > 6)`

  * Which of the following filtering functions filter out falsy values (only leave truthy values) ?
    * `function(x) {return x}`
    * `function(x) {return Boolean(x)}`
    * `function(x) {return !x}`
    * `function(x) {return !!x}`

* **some and every**
  * Which of the following statements is true ?
    * `Array.prototype.some` returns a boolean value
    * `Array.prototype.some` returns an array
    * `Array.prototype.some` accepts a function as an argument
    * `Array.prototype.every` returns true only if every value in the calling array is truthy
    * `Array.prototype.some` returns true only if at least on value in the calling array is truthy
    * `Array.prototype.every` returns true only if the result of calling the test function on every value in the calling array is truthy
    * `Array.prototype.some` returns true only if the result of calling the test function on at least one value in the calling array is truthy
