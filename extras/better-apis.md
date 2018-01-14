# Best Practices for Better RESTful API

## 0- Terminologies
<strong>Resource</strong> is an object or representation of something, which has some associated data with it and there can be set of methods to operate on it. E.g. Animals, schools and employees are resources and delete, add, update are the operations to be performed on these resources.<br>

<strong>Collections</strong> are set of resources, e.g Companies is the collection of Company resource.<br>

<strong>URL</strong> (Uniform Resource Locator) is a path through which a resource can be located and some actions can be performed on it.

## 1- Use nouns but no verbs

Do not use verbs like this:
```
/getAllCars
/createNewCar
/deleteAllRedCars
```

Better to use nouns:

```GET /cars```
=> get all cars

```POST /cars```
=> create new car

```DELETE /cars/:id```
=> delete a car

```PUT /cars/:id```
=> update a car

```PATCH /cars/:id```
=> partially update a car

```GET /cars/:id```
=> get a car


## 2- Don't use GET + URL params to update records

Don't use API endpoints like this
```GET /users/711?activate```
or event like this ```GET /users/711/activate```.

Use PATCH to and change the attribute activated in resource "user".


## 3- Don't mix singular and plural nouns

Keep it simple and use only plural nouns for all resources.

```/car``` => ```/cars```


## 4- Use sub-resources for relations

For example if a user have multiple cars use sub-resources format:

```/users/771/cars``` => Returns a list of car for user 771

## 5- Use HTTP headers for serialization formats

Both, client and server, need to know which format is used for the communication. The format has to be specified in the HTTP-Header.

<i>Content-Type</i> defines the request format.
<br>
<i>Accept</i> defines a list of acceptable response formats.

## 6- Provide filtering, sorting, field selection and paging for collections

### Filtering
Use a unique query parameter for all fields or a query language for filtering.

```GET /cars?color=red``` Returns a list of red cars

### Sorting
```GET /cars?sort=-manufactorer``` => This returns a list of cars sorted by descending manufacturers

### Field selection

```GET /cars?fields=manufacturer,model,id,color```=> display just a few attributes (manufacturer,model,id,color)

### Paging

```GET /cars?offset=10&limit=5``` returns car 10 to 15

## 7- Handle Errors with HTTP status codes

It is hard to work with an API that ignores error handling. Pure returning of a HTTP 500 with a stacktrace is not very helpful.

200 – OK – Eyerything is working<br>
201 – OK – New resource has been created<br>
204 – OK – The resource was successfully deleted

304 – Not Modified – The client can use cached data<br>

400 – Bad Request – The request was invalid or cannot be served. The exact error should be explained in the error payload. E.g. „The JSON is not valid“<br>
401 – Unauthorized – The request requires an user authentication<br>
403 – Forbidden – The server understood the request, but is refusing it or the access is not allowed.<br>
404 – Not found – There is no resource behind the URI.<br>
422 – Unprocessable Entity – Should be used if the server cannot process the enitity, e.g. if an image cannot be formatted or mandatory fields are missing in the payload.<br>

500 – Internal Server Error – API developers should avoid this error. If an error occurs in the global catch blog, the stracktrace should be logged and not returned as response.<br>


## 8- Use error payloads

```javascript
{
  "errors": [
   {
    "userMessage": "Sorry, the requested resource does not exist",
    "internalMessage": "No car found in the database",
    "code": 34,
    "more info": "http://dev.mwaysolutions.com/blog/api/v1/errors/12345"
   }
  ]
}
```

## 9- Documentation
An API is only as good as its documentation. The docs should be easy to find and publically accessible. Most developers will check out the docs before attempting any integration effort. When the docs are hidden inside a PDF file or require signing in, they're not only difficult to find but also not easy to search.

## 10- Version your API
```/api/v1```, ```/api/v2```

Make the API Version mandatory and do not release an unversioned API. Use a simple ordinal number and avoid dot notation such as 2.5.
