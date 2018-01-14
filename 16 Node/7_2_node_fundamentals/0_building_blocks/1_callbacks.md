# Callbacks

This is the most important topic to understand if you want to understand how to use node.

Nearly everything in node uses callbacks.

They weren't invented by node, they are just part of the JavaScript language.

Callbacks are functions that are executed asynchronously, or at a later time. 

Instead of the code reading top to bottom procedurally, async programs may execute different functions at different times based on the order and speed that earlier functions like http requests or file system reads happen.

Here is a simple <strong>synchronous</strong> example, meaning you can read the code top to bottom just like a book:

```javascript
let number = 1
function addOne(num) {
	return num + 1
}

let result = addOne(number)
console.log(result) // logs out 2
```

Node, however, uses mostly <strong>asynchronous</strong> code. Let's use node to read our number from a file called `number.txt`

```javascript
const fs = require('fs')   // require is a special function provided by node
let number // we don't know what the number is yet since it is stored in a file

function addOne() {
  fs.readFile('number.txt', function readNumber(err, fileContents) {
    number = Number(fileContents)
    number += 1
  })
}

addOne()

console.log(number) // logs out undefined -- this line gets run before readFile is done
```

Why do we get undefined when we log out the number this time?

In this code we use the `fs.readFile` method, which happens to be an asynchronous method.

Usually things that have to talk to hard drives or networks will be <strong>asynchronous</strong>.

If they just have to access things in memory or do some work on the CPU they will be <strong>synchronous</strong>.

The reason for this is that I/O is very sloow.

When `addOne` is called it kicks off a `readFile` and then moves on to the next thing that is ready to execute.

If there is nothing to execute node will either wait for pending fs/network operations to finish or it will stop running and exit to the command line.

The reason we got `undefined` above is that nowhere in our code exists logic that tells the `console.log` statement to wait until the `readFile` statement finishes before it prints out the number.

Let's put our `console.log` statement into a function and pass it in as a callback:

```javascript
const fs = require('fs')
let number

function addOne(callback) {
  fs.readFile('number.txt', function readNumber(err, fileContents) {
    number = Number(fileContents)
    number += 1
    callback()
  })
}

function logNumber() {
  console.log(number)
}

addOne(logNumber)
```

Now the `logNumber` function can get passed in as an argument that will become the callback variable inside the `addOne` function. After `readFile` is done the `callback` variable will be invoked (`callback()`). Only functions can be invoked, so if you pass in anything other than a function it will cause an error.

To break down this example even more, here is a timeline of events that happen when we run this program:

1. The code is parsed, which means if there are any syntax errors they would make the program break. During this initial phase, `fs` and `number` are declared as variables while `addOne` and `logNumber` are declared as functions. Note that these are just declarations. Neither function has been called nor invoked yet.

2. When the last line of our program gets executed addOne is invoked with the `logNumber` function passed as its callback argument. Invoking `addOne` will first run the asynchronous `fs.readFile` function. This part of the program takes a while to finish.

3. With nothing to do, node idles for a bit as it waits for `readFile` to finish. If there was anything else to do during this time, node would be available for work.

3. As soon as readFile finishes it executes its callback, `readNumber`, which parses `fileContents` for an integer called `number`, increments `number` and then immediately invokes the function that `addOne`  passed in (its callback), `logNumber`.