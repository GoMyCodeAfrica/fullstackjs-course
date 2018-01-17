## Browser environment

The JavaScript language was initially created for web browsers. Since then, it evolved and became a language with many uses and platforms.

A platform may be either a browser or a web-server or a washing machine or another host. Each of them provides platform-specific functionality. The JavaScript specification calls that a host environment.

A host environment provides platform-specific objects and functions additionally to the language core. Web browsers give means to control web pages. Node.JS provides server-side features, and so on.

Here’s a bird’s-eye view of what we have when JavaScript runs in a web-browser:

<p align="center">
  <img src="images/window-objects.png">
</p>

There’s a `“root”` object called `window`. It has two roles:

* First, it is a global object for JavaScript code.

* Second, it represents the “browser window” and provides methods to control it.

For instance, here we use it as a global object:

```javascript
function sayHi() {
  alert("Hello");
}

// global functions are accessible as properties of window
window.sayHi();
```

And here we use it as a browser window, to see the window height:

```javascript
alert(window.innerHeight); // inner window height
```

There are more window-specific methods and properties, we’ll cover them later.

## Document Object Model (DOM)

The document object gives access to the page content. We can change or create anything on the page using it.

For instance:

```javascript
// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);
```

Here we used document.body.style, but there’s much, much more. Properties and methods are described in the specification.


<strong>DOM is not only for browsers</strong>

<hr>
The DOM specification explains the structure of a document and provides objects to manipulate it. There are non-browser instruments that use it too.

For instance, server-side tools that download HTML pages and process them. They may support only a part of the DOM specification though.
<hr>

## BOM (part of HTML spec)

Browser Object Model (BOM) are additional objects provided by the browser (host environment) to work with everything except the document.

For instance:

* `navigator` object provides background information about the browser and the operating system. There are many properties, but two most widely known are: `navigator.userAgent` – about the current browser, and `navigator.platform` – about the platform (can help to differ between Windows/Linux/Mac etc).

* `location` object allows to read the current URL and redirects the browser to a new one.

Here’s how we can use the location object:

```javascript
alert(location.href); // shows current URL
if (confirm("Go to wikipedia?")) {
  location.href = "https://wikipedia.org"; // redirect the browser to another URL
}
```

Functions alert/confirm/prompt are also a part of BOM: they are directly not related to the document, but represent pure browser methods of communicating with the user.

## Summary

Talking about standards, we have:

<strong>DOM specification</strong>
Describes the document structure, manipulations and events, see https://dom.spec.whatwg.org.

<strong>HTML specification</strong>
Describes HTML language (tags etc) and also BOM (browser object model) – various browser functions: setTimeout, alert, location and so on, see https://html.spec.whatwg.org. It takes DOM specification and extends it with many additional properties and methods.

Now we’ll get down to learning DOM, because the document plays the central role in the UI, and working with it is the most complex part.
