# find and findIndex

## Array.prototype.find

* If you understand `filter`, `find` is very similar
* `Array.prototype.find` takes the exact arguments as `Array.prototype.filter`
* The `find` method returns:
  * the first element that succeeds in the `testFn`
  * `undefined` if all elements fail

## Activity: Reimplementing means understanding

Yes, that's true. You will reimplement `Array.prototype.find`, no examples here!

## Array.prototype.findIndex

* Well, it's the same as find. Except it returns:
  * the **index** of the first element that succeeds in the `testFn`
  * `-1` if all elements fail

## Activity: Reimplementing again

1. Reimplement `Array.prototype.findIndex`.
2. Now re-reimplement it without using loops!
