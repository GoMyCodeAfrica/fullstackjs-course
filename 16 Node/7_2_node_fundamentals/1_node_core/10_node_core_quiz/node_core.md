### Question 1: Which modules are core Node modules and not npm modules?

* fs
* express
* path
* http
* json

Question 2: What is wrong with the following Node code?

```JavaScript
const http = require('http')
const port = 3000
http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('end')
}).listen(port)
```

* Nothing is wrong with the following code
* The response is not ended (finished)
* The response has no data
* The Content Type must be text/html
* Port must be 80

### Question 3: Which of the following are invalid properties inside of the request handler (request, response)=>{}?

* request.headers
* request.path
* request.method
* request.url
* request.json

### Question 4: Which is of the following would send a status code of 200 when used inside of the request handler (request, response)=>{}?

* response.status(200)

* response.statusCode = 200
  response.end()

* response.end(200)
* response.code(200)
* response.writeStatusCode(200)

### Question 5: Which of the commands would install an npm module as a local dependency?

* npm i -g express
* npm install --production
* npm install-local mocha
* npm i --exact axios@latest --save-dev
* npm install -ES superagent@3.6.3

Question 6: Which of the following are valid export statements for a module? ((Choose four of the following choices)

* Export a function: module.exports = function(ops) {...}
* Export an object: exports = {...}
* Export multiple functions: module.exports.methodA = function(ops) {...} which is the same as exports.methodA = function(ops) {...}
* Export a number: module.exports = 3000
* Export multiple objects: module.exports.objA = {...} which is the same as exports.objA = {...}

### Question 7: What is wrong with the following POST request to get JSON data?

```JavaScript
const https = require('https')
const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'
https.get(url, (response) => {
  let rawData = ''
  response.on('data', (chunk) => { 
    rawData = chunk 
  })
  response.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData)
      console.log(parsedData)
    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})
```

* URL is not valid
* Data is incomplete
* No SSL key and certificate for the HTTPS request
* No response.end()
* No error handling

### Question 8: What is a global variable, i.e. available anywhere in Node program?

* process
* env.NODE_ENV
* argv
* __dirname
* __pathname


### Question 9: What event handler/listener would you need to implement in place of the TODO to console log the magicData?

```JavaScript
const EventEmitter = require('events')
const sdk = require('magic-sdk')
class Job extends EventEmitter {
  constructor(ops) {
    super(ops)
    this.launch()
  }
  launch() {
    sdk.launchMagicJob((error, magicData)=>{
      if (!error) return this.emit('finished', magicData)
      else this.emit('error', error)
    })
  }
}

module.exports = Job

var Job = require('./job.js')
var job = new Job()

// TODO: Implement so you can get data back from the magic job and console.log it
```

* job.on('finished', function(){console.log(magicData)})
* job.on('finished', function(details){console.log(data)})
* job.on('done', function(data){console.log(data)})
* job.on('finished', (data)=>{console.log(data)})
* job.emit('finished', (data)=>{console.log(data)})

### Question 10: What could be the output? 

```JavaScript
const path = require('path')
console.log(path.join(__dirname, 'data', 'customers.csv'))
```

* data\customers.csv
* data/customers.csv
* /Users/azat/Documents/Code/data/customers.csv
* file://data/customers.csv
* C:\Documents\data\customers.csv