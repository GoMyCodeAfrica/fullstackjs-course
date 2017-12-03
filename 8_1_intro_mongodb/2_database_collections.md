# Databases and Collections

MongoDB stores BSON documents, i.e. data records, in collections; the collections in databases.

<p align="center">
	<img src="images/collection.svg">
</p>

## Database

In MongoDB, databases hold collections of documents.

To select a database to use, in the mongo shell, issue the `use <db>` statement, as in the following example:

```code
use myDB
```

### Create a Database

If a database does not exist, MongoDB creates the database when you first store data for that database.

As such, you can switch to a non-existent database and perform the following operation in the mongo shell:

```code
use myNewDB

db.myNewCollection1.insertOne( { x: 1 } )
```

The `insertOne()` operation creates both the database myNewDB and the collection myNewCollection1 if they do not already exist.

## Collections

MongoDB stores documents in collections. Collections are analogous to tables in relational databases.

### Create a Collection

If a collection does not exist, MongoDB creates the collection when you first store data for that collection.

```code
db.myNewCollection2.insertOne( { x: 1 } )
db.myNewCollection3.createIndex( { y: 1 } )
```

Both the `insertOne()` and the `createIndex()` operations create their respective collection if they do not already exist.

### Explicit Creation

MongoDB provides the `db.createCollection()` method to explicitly create a collection with various options, such as setting the maximum size or the documentation validation rules. If you are not specifying these options, you do not need to explicitly create the collection since MongoDB creates new collections when you first store data for the collections.

### Document Validation

By default, a collection does not require its documents to have the same schema; i.e. the documents in a single collection do not need to have the same set of fields and the data type for a field can differ across documents within a collection.

Starting in MongoDB 3.2, however, you can enforce document validation rules for a collection during update and insert operations.

### Mofifying Document Strucutre

To change the structure of the documents in a collection, such as add new fields, remove existing fields, or change the field values to a new type, update the documents to the new structure.