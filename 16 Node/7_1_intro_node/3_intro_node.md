# Understanding Node

Node.js is an open source project designed to help you write JavaScript programs that talk to:

* Networks

* File systems or other I/O (input/output, reading/writing) sources.

That's it! It is just a simple and stable I/O platform that you are encouraged to build modules on top of.

What are some examples of I/O?

<p align="center">
	<img src="images/server-diagram.png">
</p>

If you don't understand all of the different things in the diagram it is completely okay.

The point is to show that a single node process (the hexagon in the middle) can act as the <strong>broker</strong> between all of the different I/O endpoints (orange and purple represent I/O).

Usually building these kinds of systems is either:

* difficult to code but yields super fast results (like writing your web servers from scratch in C)

* easy to code but not very speedy/robust (like when someone tries to upload a 5GB file and your server crashes)

>  Node's goal is to strike a balance between these two: relatively easy to understand and use and fast enough for most use cases.

Node isn't either of the following:

* A web framework (like Rails or Django, though it can be used to make such things)

* A programming language (it uses JavaScript but node isn't its own language)

Instead, node is somewhere in the middle. It is:

* Designed to be simple and therefore relatively easy to understand and use

* Useful for I/O based programs that need to be fast and/or handle lots of connections

At a lower level, node can be described as a tool for writing two major types of programs:

* Network programs using the protocols of the web: HTTP, TCP, UDP, DNS and SSL

* Programs that read and write data to the filesystem or local processes/memory

What is an "I/O based program"? Here are some common I/O sources:

* Databases (e.g. MySQL, PostgreSQL, MongoDB, Redis, CouchDB)

* APIs (e.g. Twitter, Facebook, Apple Push Notifications)

* HTTP/WebSocket connections (from users of a web app)

* Files (image resizer, video editor, internet radio)

Node does I/O in a way that is asynchronous which lets it handle lots of different things simultaneously. 

For example, if you go down to a fast food joint and order a cheeseburger they will immediately take your order and then make you wait around until the cheeseburger is ready.

In the meantime they can take other orders and start cooking cheeseburgers for other people. Imagine if you had to wait at the register for your cheeseburger, blocking all other people in line from ordering while they cooked your burger! This is called blocking I/O because all I/O (cooking cheeseburgers) happens one at a time. 

Node, on the other hand, is non-blocking, which means it can cook many cheeseburgers at once.