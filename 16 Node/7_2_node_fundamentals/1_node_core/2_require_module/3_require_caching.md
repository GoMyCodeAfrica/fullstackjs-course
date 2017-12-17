## require() Caching

require() caches the results based on the filename and path. Any code outside of the module.exports assignment will be run just once during the process execution. For example, the following code is a module named utility.js and it has some code outside of module.exports:

console.log('This will be printed just once')

```JavaScript
module.exports = function(numbersToSum) {
  let sum = 0, 
    i = 0, 
    l = numbersToSum.length;
    while (i < l) {
        sum += numbersToSum[i++]
    }
    return sum
}
```

The account-service.js file uses our utility.js module:

```JavaScript
const sum = require('./utility.js')

let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

let totalBalance=sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance] )
console.log(totalBalance)
```

This is app.js which imports two files. AYou can also use require() to run code without assigning the result to anything (line 2).

```JavaScript
const sum = require('./utility.js')
require('./account-service.js')

let checkingAccountBalance = 200
let savingsAccountBalance = 1000
let retirementAccountBalance = 20000

retirementAccountBalance = 40000

let totalBalance=sum([checkingAccountBalance, savingsAccountBalance, retirementAccountBalance] )
console.log(totalBalance)
```

In app.js when you import the module utility.js two or more times (directly and indirectly via account-service.js), the code in utility.js which prints This will be printed just once (it's outside the module.exports) will be run just once despite the fact that the function module.exports (which we exported) is invoked twice: once in account-service.js and the second time in app.js.

Therefore, running app.js will result in its balance being printed twice, one time in account-service and another time in app.js, but the This will be printed just once console log only appears once:

This will be printed just once
21200
41200

Why did the code outside module.exports run just once even though we imported the utility.js module twice (once directly and one indirectly via account-service.js)?

<strong>The reason is because Node.js will cache imports</strong>. The second time you require() the same file or a module, it's not running the code. The results of the module are already there for you to use.

Just keep this behavior in mind and as a general rule, have all the logic exported in module.exports to avoid any unwanted behavior or conflicts.
