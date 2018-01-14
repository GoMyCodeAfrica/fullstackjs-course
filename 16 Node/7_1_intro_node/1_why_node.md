## Why Node.js?

Let's start by taking a look at why Node.js is one of the fastest growing web platforms out there.

Node.js provides you with the following benefits:

* Develop faster due to the vast number of modules and reusable code from npm

* Make fewer mistakes and be more productive (One language across the stack)

* Delight your user with fast response time (YMMV)

* Reduce team size and communication overhead (full stack JavaScript)

* Reduce dependency on other teams (e.g., backend API teams)

* Ability to re-use code on the browser and server

## Node.js Features

Node.js has some distinct features. Here are some examples of those features:

* Non-blocking I/O: performant

* Fast JS engine: browser arms race (Google Chrome V8 and Microsoft Chakra)

* Expressive and interpreted language: don't waste time on setup

* Solid and improving language standard (ECMAScript)

* Built in package manager with a humongous number of packages (npm)

## Node Downsides

Node isn't always the best design choice. Like most things in life, Node.js has some downsides. Node might not be a good fit because of the following reasons:

* Memory leaks in long running processes with Node are worse than in short running browser environments such as browser JavaScript

* The event loop makes asynchronous error handling more difficult than synchronous error handling

* No benefit for CPU-bound tasks

* Need to think about scalability early on to develop stateless scalable distributed systems

* No built-in typing (but possible with TypeScript)

Note: The Event loop is the core of Node.js and it's a genius idea. However, don't use Node.js for blocking, CPU-intensive tasks. Node.js will not give you a performance boost for stuff like that. Node.js is best suited for I/O stuff (like web servers).
