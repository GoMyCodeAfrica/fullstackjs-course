## HTTP Response

The HTTP response is what enables us to send data back to the clients from our Node servers.

response.writeHead is a method that is used to set the status code and create HTTP headers. Two most common HTTP headers are Content-Type and Content-Length:

```JavaScript
response.writeHead(200, {
  'Content-Length': body.length,
  'Content-Type': 'text/plain' })
```

The response itself is created with the write() method which adds data to the response. Another method is end() which finishes the response (which in turn will finish the incoming request). You can set the statusCode attribute to change the status code of the response (200, 400, 500, etc.).

The following example demonstrates the various response methods:

```JavaScript
const http = require('http')
const port = 3000
http.createServer((request, response) => {
  response.writeHead(404, {
    'Content-Length': body.length,
    'Content-Type': 'text/plain' })
  response.statusCode = 200
  response.write('Hello')
  response.end(' World\n')
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)
```

Documentation: https://nodejs.org/api/http.html#http_class_http_serverresponse
