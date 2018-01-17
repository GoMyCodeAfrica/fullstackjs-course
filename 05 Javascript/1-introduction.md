# An Introduction To JavaScript

## What's JavaScript

JavaScript was initially created to “make webpages alive”.

The programs in this language are called scripts. They can be written right in the HTML and execute automatically as the page loads.

Scripts are provided and executed as a plain text. They don’t need a special preparation or a compilation to run.

In this aspect, JavaScript is very different from another language called Java.

## What can in-browser JavaScript do?

In-browser JavaScript can do everything related to webpage manipulation, interaction with the user and the webserver.

For instance, in-browser JavaScript is able to:

* Add new HTML to the page, change the existing content, modify styles.
* React to user actions, run on mouse clicks, pointer movements, key presses.
* Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
* Get and set cookies, ask questions to the visitor, show messages.
* Remember the data on the client-side (“local storage”).

## What CAN’T in-browser JavaScript do?

JavaScript’s abilities in the browser are limited for the sake of the user’s safety. The aim is to prevent an evil webpage from accessing private information or harming the user’s data.

The examples of such restrictions are:

* JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them or execute programs. It has no direct access to OS system functions.

* Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like “dropping” a file into a browser window or selecting it via an `<input>` tag.

* There are ways to interact with camera/microphone and other devices, but they require a user’s explicit permission. So a JavaScript-enabled page may not sneakily enable a web-camera, observe the surroundings and send the information to the NSA.

* Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other if they come from different sites (from a different domain, protocol or port).

* This is called the “Same Origin Policy”. To work around that, both pages must contain a special JavaScript code that handles data exchange.

* The limitation is again for user’s safety. A page from http://anysite.com which a user has opened must not be able to access another browser tab with the URL http://gmail.com and steal information from there.

* JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. Once again, that’s safety limitations.

## JavaScript Engines

At present, JavaScript can execute not only in the browser, but also on the server, or actually on any device where there exists a special program called the JavaScript engine.

The browser has an embedded engine, sometimes it’s also called a “JavaScript virtual machine”.

Different engines have different `codenames`, for example:

* V8 – in Chrome and Opera.
* SpiderMonkey – in Firefox.
* There are other codenames like “Trident”, “Chakra” for different versions of IE, “ChakraCore” for Microsoft Edge, “Nitro” and “SquirrelFish” for Safari etc.

The terms above are good to remember, because they are used in developer articles on the internet. We’ll use them too. For instance, if “a feature X is supported by V8”, then it probably works in Chrome and Opera.


How engines work?

Engines are complicated. But the basics are easy.

1. The engine (embedded if it’s a browser) reads (“parses”) the script.
2. Then it converts (“compiles”) the script to the machine language.
3. And then the machine code runs, pretty fast.

The engine applies optimizations on every stage of the process. It even watches the compiled script as it runs, analyzes the data that flows through it and applies optimizations to the machine code based on that knowledge. At the end, scripts are quite fast.

## Summary

* JavaScript was initially created as a browser-only language, but now it is used in many other environments as well.
* At this moment, JavaScript has a unique position as the most widely-adopted browser language with full integration with HTML/CSS.
