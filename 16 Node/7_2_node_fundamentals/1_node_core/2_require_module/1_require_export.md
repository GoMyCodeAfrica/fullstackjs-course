## require and module.exports

Node provides a built-in module mechanism which works with the require() method and the module.exports global object. To demonstrate how require and module.exports work, let's say we have two files account-service.js and utility.js.

The utility.js has some generic methods and objects which we use in many projects and applications. In this example, we will import those generic methods into account-service.js.

Here's the code of utility.js in which we expose code to account-service.js (or any other program) by assigning it to a special global module.exports:

```JavaScript
module.exports = function(numbersToSum) {
  let sum = 0, 
    i = 0, 
    l = numbersToSum.length;
    while (i < l) {
        sum += numbersToSum[i]
        i += 1
    }
    return sum
}
```

The main program (account-service.js) imports the utility module and executes it to find out the total balance:

```JavaScript
const sum = require('./utility.js')

let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance=sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance] )
console.log(totalBalance)
```

The account-service.js can be run from the same folder where the file is located with node account-service.js. The code will import the utility.js and invoke sum(). Thus, the result will be output of the total balance.