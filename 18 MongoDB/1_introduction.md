# Introduction to MongoDB

MongoDB is an open-source document database that provides high performance, high availability, and automatic scaling.

## Document Database

A record in MongoDB is a document, which is a data structure composed of field and value pairs. 

MongoDB documents are similar to JSON objects. 

The values of fields may include other documents, arrays, and arrays of documents.

<p align="center">
	<img src="images/document.svg">
</p>

The advantages of using documents are:


* Documents (i.e. objects) correspond to native data types in many programming languages.

* Embedded documents and arrays reduce need for expensive joins.

* Dynamic schema.

## Key features

### High Performance

MongoDB provides high performance data persistence. In particular:

* Support for embedded data models reduces I/O activity on database system.

* Indexes support faster queries and can include keys from embedded documents and arrays.

### Rich Query Language

MongoDB supports a rich query language to support read and write operations (CRUD) as well as:

* Data Aggregation

* Text Search and Geospatial Queries.

### High Availability

MongoDB’s replication facility, called replica set, provides:

* automatic failover and

* data redundancy.

A replica set is a group of MongoDB servers that maintain the same data set, providing redundancy and increasing data availability.