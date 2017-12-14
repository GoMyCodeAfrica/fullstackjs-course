## CRUD REST API with Node, Express and MongoDB

In this tutorial lab, you will build a CRUD (Create, Read, Update, Delete) REST API with Node, Express and MongoDB.

## CRUD in Node with MongoDB native driver

Back in the previous module, you already built a CRUD RESTful API with Express. It was a useful exercise and skill to learn, but there's a problem with that project. We didn't have a database which meant that each time you restart the server, the information is lost.

In this lab, you'll implement data persistence with MongoDB and MongoDB native driver. This will keep all the data intact in any event of a server crash or restart.

Start with an empty folder in which you create package.json:

```shell
mkdir crud-mongo-rest-api
cd crud-mongo-rest-api
npm init -y
```

Create a new file server.js which will have the code for the CRUD API which will have four endpoints:

* GET /accounts
* POST /accounts
* PUT /accounts/:id
* DELETE /accounts/:id

Our project will leverage a few npm modules which are Express middleware (plugins):

* morgan: logging of the server requests in various formats for debugging, auditing and other purposes
* body-parser: parsing of the incoming request body/payload into a Node object from a string or other formats
* errorhandler: basic user friendly error messaging
* mongodb: module to connect and work with MongoDB database

Install the four packages which will be your project dependencies:

```shell
npm i express morgan mongodb errorhandler -E
```

In the server.js, start by importing dependency modules:

```JavaScript
const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const mongodb= require('mongodb')
const bodyParser = require('body-parser')
```

Next, define the MongoDB connection string for the local database instance and the database name edx-course-db. Also apply middleware for logging and body parsing:

```JavaScript
const url = 'mongodb://localhost:27017/edx-course-db'
let app = express()
app.use(logger('dev'))
app.use(bodyParser.json())
```

Connect to the database using the connect method and the connection URI (url). Define all routes in a callback using the MongoDB native driver methods starting with GET /accounts in which you will use sort to sort the query result in reverse ObjectID order and toArray to get an array of accounts.

```JavaScript
mongodb.MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1)

  app.get('/accounts', (req, res) => {
    db.collection('accounts')
      .find({}, {sort: {_id: -1}})
      .toArray((error, accounts) => {
        if (error) return next(error)
        res.send(accounts)
    })
  })
```

In the route for POST /accounts, take data from the request body (req.body) and use it in insert to create a new account. Optionally, validate and sanitize the data of the request body with if/else statements or the express-validate module.

```JavaScript
app.post('/accounts', (req, res) => {
    // To Do
  })
```

For the PUT route, define a URL parameter :id and access it with req.params.id. Use req.body (request body) to pass the new account to the update method. Use mongodb.ObjectID with req.params.id to convert the string ID to an ObjectID which is needed for the update method query:

```JavaScript
app.put('/accounts/:id', (req, res) => {
   // To Do
  })
```

In DELETE, use URL parameter for the ID again. This time, the MongoDB method is remove but it also takes the URL parameter ID wrapped in mongodb.ObjectID for the proper object type in the query.

```JavaScript
app.delete('/accounts/:id', (req, res) => {
   // To Do
  })
  
  app.listen(3000)
})
```

That's it. You are DONE! Test the API by sending data with CURL or Postman and verifying it on the database with mongo shell/repl or MongoUI.

Just in case you need CURL commands to test your CRUD, here are the requests to create, update, read and delete accordingly. Make sure you change the value of {ID} in the PUT and DELETE CURL requests to the value of the newly created account from the first POST command.

```shell
curl -H "Content-Type: application/json" -X POST -d '{"balance": 100, "name":"checking"}'  "http://localhost:3000/accounts" 
curl -H 'Content-Type: application/json' -X PUT -d '{"balance": 200, "name": "savings"}'  "http://localhost:3000/accounts/{ID}" 
curl "http://localhost:3000/accounts" 
curl -X DELETE "http://localhost:3000/accounts/{ID}" 
```