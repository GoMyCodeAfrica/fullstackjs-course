## Naming a function

* Functions are actions.

* A function's name is usually a verb.

* A function's name should be briefly.

* A function's name should be as accurately as possible describe what the function does.

* It is a widespread practice to start a function with a verbal prefix which vaguely describes the action:

* Function starting with…

  - "getUsername" – return a value,
  - "computeSalary" – calculate the salary,
  - "createUserProfile" – create user profile,
  - "checkMaxLength" – check something and return a boolean.
  - "isValidEmail" - check something and return a boolean.

## One function – one action

A function should do exactly what is suggested by its name, no more.

A few examples of breaking this rule:


* getAge – would be bad if it shows an alert with the age (should only get).

* createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).

* checkPermission – would be bad if displays the access granted/denied message (should only perform the check and return the result).

## Exercises

1. Try to rename the following functions, so that the names reflect what the function is actually doing.

```javascript
function biggerThan(a, b) {
  if (a > b) {
    return a
  }
  else return b
}

function everyElementPositive(values) {
  for (let value of values) {
    if (value < 0) return false
  }

  return true
}

function timesTwo(values) {
  let result = []
  for (let value of values) {
    result.push(2*value)
  }

  return result
}
```
