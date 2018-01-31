# Fetching data from the server

## Introduction

* AJAX stands for Asynchronous JavaScript and XML
* AJAX is not a programming language.
* AJAX is a technique for accessing web servers from a web page.

![](images/ajax.jpg)

* The web is based on communication between different machines
* There are two types of machines on the web:
	* The **client**: requests resources (a website, an image, JSON data...)
	* The **server**: responds with resources or error
* The communication is always **initiated by the client**: the server can only send resources to a client in response to a client request
* In modern websites and web apps, the communication happens like this:
	1. The initial request gets all needed **resources**: HTML + CSS + JS + images ...
	* Any further request is just for **data**
	* The **client** is responsible for **handling that data**

## Benefits of the AJAX model

AJAX is a developer's dream, because you can:

* Update a web page without reloading the page
* Request data from a server - after the page has loaded
* Receive data from a server - after the page has loaded
* Send data to a server - in the background

## AJAX using jQuery

* We can send HTTP request using jQuery.

* jQuery provides many functions :

	* `$.ajax()`
	* `$.post()`
	* `$.get()`
	* `$.getJSON()`

* For example, let's say we have a server `localhost` that contains data about sessions at `http://localhost/sessions`

```javascript
$.getJSON( "http://localhost/sessions", function( data ) {
	console.log(data)
});
```

## Activity

Show me the weather in your location using `OpenWeatherMap` :

* API docs : http://openweathermap.org/current

**Hint** : api.openweathermap.org/data/2.5/weather?q={city name}
