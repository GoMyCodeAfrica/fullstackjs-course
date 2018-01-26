# Benefits of FP

* **Easy to reason about**: To understand a pure function, all you have to do is think about its input and output. No scope, no randomness, no hassle.
* **Easy to debug**:
* **Composability**: decompose bigger problems into smaller ones.
* **Reuseability**: If you face the same problem twice.
* **Memoization**: memoization is a fancy name for caching. The good thing about caching the outputs of pure functions is they will never be outdated.
<<<<<<< HEAD

## Examples:

**Imperative :**

Go to kitchen
Open fridge
Remove chicken from fridge
Clean the chicken
cut the chicken
...
Bring food to table.

**Declarative :**

I want a dinner with chicken.

### Imperative Programming VS Declarative Programming :

* In imperative programming you have to specify the followings :

  1. How to loop through the array
  2. The order of looping
  3. Logic

```javascript
  function imperativeSquare(arr) {
    for (var i = 0; i < arr.length; i++) {
    	arr[i] *= arr[i];
    }
    return arr;
  }

  var a = [1, 2, 3, 4, 5];
  console.log(imperativeSquare(a)); // [1, 4, 9, 16, 25]

```

* In declarative programming you have to specify the followings :

  1. Logic

```javascript
  function declarativeSquare(arr) {

  	return arr.map(function(val) {
    		return val*val;
    });
  }

  var a = [1, 2, 3, 4, 5];
  console.log(declarativeSquare(a)); // [1, 4, 9, 16, 25]
```

## Exercice

* Calculate the sum of the squares of some consecutive natural numbers :

  * Using imperative first and then declarative programming.

** Hints **

Imperative:

* Loop through the array to find the square array.
* loop through the square array and calculate the sum.

Declarative :

* Use `map()`
* Use `reduce()` 
=======
>>>>>>> e78ef68ee6136247b26380b581e3f573a7ab119c
