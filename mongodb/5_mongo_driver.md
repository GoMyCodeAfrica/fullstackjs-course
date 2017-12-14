## MongoDB Native Driver (mongodb)

In addition to Mongo shell, we can build our own methods and clients using the Node.js Native Driver for MongoDB: https://github.com/christkv/node-mongodb-native.

Create a new project folder (or use an existing one, in this case skip directly to npm install) and create package.json with npm init:

```shell
mkdir mongodb-script-project
cd mongodb-script-project
npm init -y
```

To install the driver use npm:

npm install mongodb

In your node.js code, simply import the driver library:

```JavaScript
const mongodb = require('mongodb')

```

## Connecting to the Database

To establish the connection to the MongoDB instance, you need to have the database instance running. You can do so in a Terminal/Command Prompt with mongod. By default, it will be at localhost:27017.

In your Node script, create a client object and invoke connect() using a database URI which is a string that has the location and could have the username and password too.

```JavaScript
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// Connection URI
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
  if (err) return process.exit(1)
  console.log('Kudos. Connected successfully to server')
  // Perform queries
  db.close()
})
```

As a result of this script, you should see “Kudos. Connected successfully to server”. If you see it, that means your DB instance was installed property, your driver was installed property and you can connect to the database instance from Node and start writing the code to manipulate data in the database (save, remove, update, etc.). There are queries which are similar to the methods in the Mongo shell but they are asynchronous. Let's see how to perform these queries in the next lesson.