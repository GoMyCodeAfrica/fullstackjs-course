# Documents

MongoDB stores data records as BSON documents. BSON is a binary representation of JSON documents, though it contains more data types than JSON.

<p align="center">
	<img src="images/document.svg">
</p>

## Document Structure

MongoDB documents are composed of field-and-value pairs and have the following structure:

```code
{
   field1: value1,
   field2: value2,
   field3: value3,
   ...
   fieldN: valueN
}
```

The value of a field can be any of the BSON data types, including other documents, arrays, and arrays of documents. For example, the following document contains values of varying types:

```code
var mydoc = {
   _id: ObjectId("5099803df3f4948bd2f98391"),
   name: { first: "Alan", last: "Turing" },
   birth: new Date('Jun 23, 1912'),
   death: new Date('Jun 07, 1954'),
   contribs: [ "Turing machine", "Turing test", "Turingery" ],
   views : NumberLong(1250000)
}
```

The above fields have the following data types:

* <strong>_id</strong> holds an ObjectId.

* <strong>name</strong> holds an embedded document that contains the fields first and last.

* <strong>birth</strong> and <strong>death</strong> hold values of the Date type.
* <strong>contribs</strong> holds an array of strings.
* <strong>views</strong> holds a value of the NumberLong type.

## Field Names

Field names are strings.

Documents have the following restrictions on field names:

* The field name <strong>_id</strong> is reserved for use as a primary key; its value must be unique in the collection, is immutable, and may be of any type other than an array.

* The field names <strong>cannot</strong> start with the dollar sign ($) character.

* The field names <strong>cannot</strong> contain the dot (.) character.

* The field names <strong>cannot</strong> contain the null character.

## The _id Field

In MongoDB, each document stored in a collection requires a unique _id field that acts as a primary key. If an inserted document omits the _id field, the MongoDB driver automatically generates an ObjectId for the _id field.

