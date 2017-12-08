## Node in Modern Web Development

Modern web development consists of building front-end applications which connect to servers to submit or get data. The front-end applications use the single-page application approach a.k.a. thick client. In it, a client app communicates with a server backend via JSON, GraphQL, Protocol Buffers, XML, text, binary streams or other formats which are transmitted via HTTP.

The server communicates with databases and other services. In other words, the server acts as a middleman between the front-end application and the database or other services. The server does things which the front-end app cannot do: authentication, data validation, working with a file system, encryption, etc.

The way the server communicates with the front-end app client and vice versa is by having various endpoints distinguished by URLs in accordance to the HTTP standard. Each request for data has URL, headers, and body (a.k.a. payload).

Implementation of servers is where Node comes in. Node is used to implement the backend servers which are often JSON RESTful APIs (but they could be of other formats as well). Node is on par with stacks such as Apache web server+PHP or Tomcat+Java.

Node is not a framework by itself because it offers very low level mechanisms. The Express framework is often used to implement web applications and RESTful API servers in Node.

Adhering to SPA and REST API architectures for your web applications will give you the flexibility to leverage your servers for other clients (mobile, IoT, public) and will allow you to change front-end clients easily because of the loose coupling provided by the API.
