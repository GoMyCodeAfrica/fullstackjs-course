# REST API with Express

In this tutorial lab, you will build a REST API with Express. For the purposes of this tutorial, the data will be stored in the memory of the server instead of a database. This lab will use concepts and skills learned in the module 2 such as express routing, middleware, and query parameters.

## REST API with Express

In modern web development APIs play a huge role. It's very important to know how to build them. In this lab, you'll build a RESTful API using the Express framework.

The REST API server will have the following four endpoints:

1. GET /accounts to retrieve a list of accounts
2. POST /accounts to create a new account
3. PUT /accounts to update an account
4. DELETE /accounts to remove an account

Each endpoint is a server route, i.e., clients can make HTTP requests and the server will respond.

The server implementation consists of the following steps:

1. Create a new folder, package.json and install packages
2. Create server.js with an Express app
3. Implement four endpoints in the Express app
4. Test the server

Let's get started with a fresh folder in which you will implement the server. Open your terminal application or command prompt, and execute the following commands:

<code>
mkdir rest-api  
cd rest-api
</code>

Then, create package.json either manually with your favorite code editor or with the npm init command:

<code>npm init -y</code>

Our project will leverage a few npm modules which are Express middleware (plugins):


* morgan: logging of the server requests in various formats for debugging, auditing and other purposes
* body-parser: parsing of the incoming request body/payload into a Node object from a string or other formats
* errorhandler: basic user friendly error messaging

Install the three packages which will be your project dependencies:

<code>npm i express morgan errorhandler -E</code>

Now everything is ready for the implementation of the server. Create a new file server.js in the newly created folder (project root). The server.js file must be on the same folder level as your package.json and node_modules.

In the server.js file, start importing the dependencies using const and require():

```JavaScript
const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
```

Next, define the store object and the accounts array which will be your in-memory data store. This data store will work synchronously, i.e., there will be no callbacks or promises. In the next modules, you'll learn how to use database instead of the in-memory store. For now, in-memory story will keep things simple.

```JavaScript
let store = {}
store.accounts = []
```

Now, create an Express app and apply middleware for request payload (body) parsing, logging and error handling:

```JavaScript
let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
```

