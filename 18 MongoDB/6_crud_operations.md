## Working with MongoDB Native Driver

The main operations that we want to perform on the MongoDB instance are:

* Create a new document
* Update an existing document
* Remove an existing document
* Reading from an existing document

We are going to learn the MongoDB queries by creating a few of our own Node methods which call the queries.

## Create a new document

There's no need to create a collection. The first time you save to a collection, it'll be created.

Take a look at how the method insertDocuments, which uses insert, is created. The `insert()` method is similar to the `insert()` command in the Mongo shell except for one big difference—in Node it is asynchronous which means we use a callback with the error-first signature.

insertDocuments:

```JavaScript
const insertDocuments = (db, callback) => {
  // Get reference to edx-course-docs collection
  const collection = db.collection('edx-course-students')
  // Insert 3 documents
  collection.insert([
    {name : 'Bob'}, {name : 'John'}, {name : 'Peter'} // 3 documents
  ], (error, result) => {
    if (error) return process.exit(1)
    console.log(result.result.n) // will be 3
    console.log(result.ops.length) // will be 3
    console.log('Inserted 3 documents into the edx-course-students collection')
    callback(result)
  })
}
```

The callback uses the error-first pattern so developers need to check for that. The result has the number of documents created in result.n.

The method insertDocuments needs to be placed inside of the connect callback to ensure that the proper db reference to database connection exists.

```JavaScript
const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the DB server
MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1)
  console.log('Connection is okay')
  insertDocuments(db, () => {
    db.close()
  })
})
```

## Updating Documents

To illustrate how to implement updating documents with the MongoDB native driver, create this method which uses update(). Notice, there's a second argument which has the new data to be put into the document(s) as well as the callback argument.

```JavaScript
const updateDocument = (db, callback) => {
  // Get the edx-course-students collection
  var collection = db.collection('edx-course-students')
  // Update document where a is 2, set b equal to 1
  const name = 'Peter'
  collection.update({ name : name }, { $set: { grade : 'A' } }, (error, result) => {
      if (error) return process.exit(1)
      console.log(result.result.n) // will be 1
      console.log(`Updated the student document where name = ${name}`)
      callback(result)
  })
}
```

The update can be nested inside the insertion callback because first the documents must be created before we can update them:

```JavaScript
insertDocuments(db, () => {
  updateDocument(db, ()=>  {
    db.close()
  })
})
```

## Removing Documents

To remove a document, invoke `remove()` preferably with a unique or specific enough query using `_id` or name as in this case

```JavaScript
const removeDocument = (db, callback) => {
  // Get the documents collection
  const collection = db.collection('edx-course-students')
  // Insert some documents
  const name = 'Bob'
  collection.remove({ name : name }, (error, result) => {
    if (error) return process.exit(1)
    console.log(result.result.n) // will be 1
    console.log(`Removed the document where name = ${name}`)
    callback(result)
  })
}
```

Apply removeDocument by invoking it inside of the update's callback:

```JavaScript
const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the Server
MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1)
  console.log('Connection is okay')
  insertDocuments(db, () => {
    updateDocument(db, () => {
      removeDocument(db, () => {
        db.close()
      })
    })
  })
})
```

## Finding Documents

Read queries are performed by the find() method which takes a query condition for matching similar to update() or remove(). In our case, the query condition is empty meaning “find all”:

```JavaScript
var findDocuments = (db, callback) => {
  // Get the documents collection
  var collection = db.collection('edx-course-students')
  // Find some documents
  collection.find({}).toArray((error, docs) => {
    if (error) return process.exit(1)
    console.log(2, docs.length) // will be 2 because we removed one document
    console.log(`Found the following documents:`)
    console.dir(docs)
    callback(docs)
  })
}
```

Apply `findDocuments()` to the inner-most callback because we want to check how many documents we have after the removal of a document.

```JavaScript
const MongoClient = require('mongodb').MongoClient

// Connection URL
const url = 'mongodb://localhost:27017/edx-course-db'
// Use connect method to connect to the Server
MongoClient.connect(url, (error, db) => {
  if (error) return process.exit(1)
  console.log('Connection is okay')
  insertDocuments(db, () => {
    updateDocument(db, () => {
      removeDocument(db, () => {
        findDocuments(db, () => {
          db.close()
        })
      })
    })
  })
})
```

The result of this script (file mongodb-script.js) is:

```shell
Connection is okay
3
3
Inserted 3 documents into the edx-course-students collection
1
Updated the student document where name = Peter
1
Removed the document where name = Bob
2 2
Found the following documents:
[ { _id: ObjectID { _bsontype: 'ObjectID', id: [Object] },
    name: 'John' },
  { _id: ObjectID { _bsontype: 'ObjectID', id: [Object] },
    name: 'Peter',
    grade: 'A' } ]
```

As you can see, we created three documents in a collection. The update a document (Peter) and remove another document (Bob). In the end we had only two documents left.