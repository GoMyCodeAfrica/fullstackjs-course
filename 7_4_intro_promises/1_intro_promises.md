# What's the problem we are solving?

JavaScript is single threaded, meaning that two bits of script cannot run at the same time; they have to run one after another.

In browsers, JavaScript shares a thread with a load of other stuff that differs from browser to browser.

But typically JavaScript is in the same queue as painting, updating styles, and handling user actions. Activity in one of these things delays the others.

This is why you don't want to write code that blocks the browser for a long time.

You've probably used events and callbacks to get around this. Here are events:

```JavaScript
var img = document.querySelector('.img');

img.addEventListener('load', function() {
  // woo yey image loaded
});

img.addEventListener('error', function() {
  // argh everything's broken
});
```
We get the image, add a couple of listeners, then JavaScript can stop executing until one of those listeners is called.

Unfortunately, in the example above, it's possible that the events happened before we started listening for them, so we need to work around that using the <strong>"complete"</strong> property of images:

```JavaScript
var img = document.querySelector('.img');

function loaded() {
  // woo yey image loaded
}

if (img.complete) {
  loaded();
}
else {
  img.addEventListener('load', loaded);
}

img.addEventListener('error', function() {
  // argh everything's broken
});
```
This doesn't catch images that error'd before we got a chance to listen for them; unfortunately the DOM doesn't give us a way to do that.

Also, this is loading one image, things get even more complex if we want to know when a set of images have loaded.

## Events aren't always the best way

Events are great for things that can happen multiple times on the same object—keyup, touchstart etc.

 With those events you don't really care about what happened before you attached the listener. But when it comes to async success/failure, ideally you want something like this:

```JavaScript
img.callThisIfLoadedOrWhenLoaded(function() {
  // loaded
}).orIfFailedCallThis(function() {
  // failed
});

// and…
whenAllTheseHaveLoaded([img1, img2]).callThis(function() {
  // all loaded
}).orIfSomeFailedCallThis(function() {
  // one or more failed
});
```

This is what promises do, but with better naming. If HTML image elements had a "ready" method that returned a promise, we could do this:

```JavaScript
img.ready().then(function() {
  // loaded
}, function() {
  // failed
});

// and…
Promise.all([img1.ready(), img2.ready()]).then(function() {
  // all loaded
}, function() {
  // one or more failed
});
```

At their most basic, promises are a bit like event listeners except:

* A promise can only succeed or fail once. It cannot succeed or fail twice, neither can it switch from success to failure or vice versa.

* If a promise has succeeded or failed and you later add a success/failure callback, the correct callback will be called, even though the event took place earlier.

This is extremely useful for async success/failure, because you're less interested in the exact time something became available, and more interested in reacting to the outcome.

## Promise terminology

A promise can be:

* <strong>fulfilled</strong>: The action relating to the promise succeeded
* <strong>rejected</strong>: The action relating to the promise failed
* <strong>pending</strong>: Hasn't fulfilled or rejected yet
* <strong>settled</strong>: Has fulfilled or rejected

## Promises arrive in JavaScript

Here's how you create a promise:

```JavaScript
var promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});
```
The promise constructor takes one argument, a callback with two parameters, resolve and reject.

Do something within the callback, perhaps async, then call resolve if everything worked, otherwise call reject.

Like throw in plain old JavaScript, it's customary, but not required, to reject with an Error object. The benefit of Error objects is they capture a stack trace, making debugging tools more helpful.

Here's how you use that promise:

```JavaScript
promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
```

## Promisifying XMLHttpRequest

Old APIs will be updated to use promises, if it's possible in a backwards compatible way. `XMLHttpRequest` is a prime candidate, but in the mean time let's write a simple function to make a GET request:

```JavaScript
function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}
```
