# An overview of HTTP

* HTTP is a protocol which allows the fetching of resources, such as HTML documents.

* It is the foundation of any data exchange on the Web and a client-server protocol

* Requests are initiated by the recipient, usually the Web browser.

* A complete document is reconstructed from the different sub-documents fetched, for instance text, layout description, images, videos, scripts, and more.

<p align="center">
	<img src="images/Fetching_a_page.png" max-width="650px">
</p>

>	Clients and servers communicate by exchanging individual messages. The messages sent by the client, usually a Web browser, are called <strong>requests</strong> and the messages sent by the server as an answer are called <strong>responses</strong>.

>	 Due to its extensibility, it is used to not only fetch hypertext documents (html), but also images and videos or to post content to servers, like with HTML form results. HTTP can also be used to fetch parts of documents to update Web pages on demand (ajax).

## Components of HTTP-based systems

HTTP is a client-server protocol: requests are sent by one entity, the user-agent (or a proxy on behalf of it). Most of the time the user-agent is a Web browser, but it can be anything, for example a robot that crawls the Web to populate and maintain a search engine index.

<strong>Client: the user-agent</strong>

The user-agent is any tool that acts on the behalf of the user. This role is primarily performed by the Web browser; a few exceptions being programs used by engineers, and Web developers to debug their applications.

The browser is <strong>always</strong> the entity initiating the request. It is never the server (though some mechanisms have been added over the years to simulate server-initiated messages).

<strong>The Web server</strong>

On the opposite side of the communication channel, is the server which serves the document as requested by the client.

## HTTP flow

When the client wants to communicate with a server, it performs the following steps:

1. Send an HTTP message: HTTP messages are human-readable.
```code
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

2. Read the response sent by the server:
```code
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)
```

## HTTP Messages

There are two types of HTTP messages, requests and responses, each with its own format.

<strong>Requests</strong>

An example HTTP request:

<p align="center">
	<img src="images/HTTP_Request.png">
</p>

Requests consists of the following elements:

* An HTTP method, usually a verb like `GET`, `POST` or a noun like `OPTIONS` or `HEAD` that defines the operation the client wants to perform. Typically, a client wants to fetch a resource (using `GET`) or post the value of an HTML form (using `POST`), though more operations may be needed in other cases.

The path of the resource to fetch; the URL of the resource stripped from elements that are obvious from the context, for example without the protocol (`http://`), the domain (here `developer.mozilla.org`), or the TCP port (here `80`).

* The version of the HTTP protocol.

* Optional headers that convey additional information for the servers.
Or a body, for some methods like `POST`, similar to those in responses, which contain the resource sent.

<strong>Responses</strong>

An example of responses:

<p align="center">
	<img src="images/HTTP_Response.png">
</p>

Responses consist of the following elements:

* The version of the HTTP protocol they follow.

* A status code, indicating if the request has been successful, or not, and why.

* A status message, a non-authoritative short description of the status code.

* HTTP headers, like those for requests.

* Optionally, a body containing the fetched resource.

## How browsers work

To present a Web page, the browser sends an original request to fetch the HTML document from the page. It then parses this file, fetching additional requests corresponding to execution scripts, layout information (CSS) to display, and sub-resources contained within the page (usually images and videos). The Web browser then mixes these resources to present to the user a complete document, the Web page. Scripts executed by the browser can fetch more resources in later phases and the browser updates the Web page accordingly.

A Web page is a hypertext document. This means some parts of displayed text are links which can be activated (usually by a click of the mouse) to fetch a new Web page, allowing the user to direct their user-agent and navigate through the Web. The browser translates these directions in HTTP requests, and further interprets the HTTP responses to present the user with a clear response.
