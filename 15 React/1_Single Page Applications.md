## History
  * Before AJAX:
    1. The client sends a request to the server
    2. The server responds with an HTML page containing all necessary resources(scripts, CSS, images...)
    3. When the user clicks a link, the browser refreshes the page and **reloads all the resources from the server**
  * After AJAX:
    1. (same)
    2. (same)
    3. When the user clicks a link, the browser **does not refresh the page** and **only loads new data from the server**

## Definition: SPA

  * A Single Page Application is a web application that requires only a single HTML page to be loaded.
  * The web app interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server

## Benefits of SPAs

  * **Fast**: most resources (HTML + CSS + Scripts) are only loaded once. The browser only needs to request data from the server.
  * **Easy to develop**: Most of the logic of the app happens in the front-end. As opposed to the client-side architecture in which the server takes care of the logic part.
  * **Easy to debug**: You can watch network operations, investigate page elements and data associated with it.
  * **Multi-platform**: It’s easier to make a mobile application. The developer can reuse the same back-end code for web and mobile applications.
