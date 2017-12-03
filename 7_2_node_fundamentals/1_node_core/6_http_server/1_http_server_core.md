## HTTP server with core http

Although Node.js can be used for a wide variety of tasks, it’s used primarily for building web applications. Node.js thrives in networking as a result of its asynchronous nature and built-in modules such as net and http. Node is great for building fast and efficient web servers.

Here’s a quintessential Hello World example in which we create a server object, define the request handler (function with req and res arguments), pass some data back to the recipient, and start up the whole thing (server.js):

```JavaScript
const http = require('http')
const port = 3000
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)
```

Let’s break it down a bit. The following loads the core http module for the server:

```JavaScript
const http = require('http')
```

This snippet below creates a server with a callback function which contains the response handler code:

```JavaScript
http.createServer((req, res) => {
```

To set the right header and status code, use the following:

```JavaScript
res.writeHead(200, {'Content-Type': 'text/plain'})
```

To output Hello World with the line end symbol, use:

```JavaScript
res.end('Hello World\n')
```

The req and res arguments have all the information about a given HTTP request and response respectively. In addition, req and res can be used as streams (see previous section).

To make the server accept requests, use the following:

```JavaScript
}).listen(3000)
```

In the terminal, navigate to the directory in which you have server.js and run the following command to start your server:

node server.js

Now that the server is running, you should be able to navigate to localhost:3000 in a browser and you should see Hello World. To shut down the server, enter Ctrl + c in the terminal.

The callback function in the createServer method is called each time there's an incoming request to this server.

You can also use curl to get the response from the server in the terminal. To do so, keep the terminal / command prompt window open to keep the server running. In another tab or window of your terminal / command prompt, run the following curl request:

```
curl http://localhost:3000
```

The curl request should return the header and content that is sent from the server.

Full documentation for the http module: https://nodejs.org/api/http.html and https://nodejs.org/api/http.html#http_class_http_server.
