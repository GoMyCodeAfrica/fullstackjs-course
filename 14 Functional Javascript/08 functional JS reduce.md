# Activity: play with an Array
## 1.imperative
 - we have an array of numbres and we want to double all the numbers.
 - create a function doubleOfArray that loops over the array.

## 2. Declarative

![](img/numbers.jpg)
* Here is the idea:
  1. Create a function `multiply` that:
    * takes one input `x , y`
    * returns `x * y`
  2. Create a function `result` that:
    * takes as input an array `arr` and a function `multiply`
    * apply `multiply` to a `arr`

![](img/reduce.png)

![](img/reduce1.png)
## Array.prototype.reduce

* If you finished the previous activity, congratulations! You have reimplemented `Array.prototype.reduce`
* `Array.prototype.reduce` is a higher order function that
  1. takes as input a function `array`,`fuction`, `initial start`
  2. apply `multiply` to the calling array.
  3. returns `result`
* `reduce` passes your callback `multiply`

# Exercice

## find the largest number

  1. Write a function that takes two numbers ` x , y `
  2. return the largest number

## Eightiest number

 * Write a function that takes an array of strings, returns the most string that contains the number '8'.

Input :

```javascript
var arr = ["1346788", "88SIRINE6548", "moez554387654", "HELLOWORLD", "8REDUCE8" , "123456789"]
```

Output :

```javascript
// 88SIRINE6548
```

## Flatten array

* Use `reduce()` to flatten an array of arrays.

Input :

```javascript
var flattened = [[0, 1], [2, 3], [4, 5]]
```

Output :

```javascript
// flattened is [0, 1, 2, 3, 4, 5]
```

## Counting instances of values in an object

* Write a function that takes an array as an input, count instances of values in a returned object.

Input :

```javascript
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
```

Output :

```javascript
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```
