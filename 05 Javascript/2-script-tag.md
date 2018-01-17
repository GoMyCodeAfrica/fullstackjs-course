# Introduction

The tutorial that you’re reading is about core JavaScript, which is platform-independent. Further on, you will learn Node.JS and other platforms that use it.

But, we need a working environment to run our scripts, and, just because browsers are preinstalled in every computer, the browser is a good choice.

We’ll keep the amount of browser-specific commands (like alert) to a minimum, so that you don’t spend time on them if you plan to concentrate on another environment like Node.JS. On the other hand, browser details are explained in detail in the next part of the tutorial.

## The `script` tag

JavaScript programs can be inserted in any part of an HTML document with the help of the `<script>` tag.

For instance:

```HTML
<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>

</html>
```

The `<script>` tag contains JavaScript code which is automatically executed when the browser meets the tag.

## The modern markup

The `<script>` tag has a few attributes that are rarely used nowadays, but we can find them in old code:

<strong>The type attribute: `<script type=…>`</strong>

* The old standard HTML4 required a script to have a type. Usually it was `type="text/javascript"`. The modern HTML standard assumes this type by default. No attribute is required.
The language attribute: `<script language=…>`

* This attribute was meant to show the language of the script. As of now, this attribute makes no sense, the language is JavaScript by default. No need to use it.

## External scripts

If we have a lot of JavaScript code, we can put it into a separate file.

The script file is attached to HTML with the `src` attribute:

```JavaScript
<script src="/path/to/script.js"></script>
```

Here `/path/to/script.js` is an absolute path to the file with the script (from the site root).

It is also possible to provide a path relative to the current page. For instance, `src="script.js"` would mean a file `"script.js"` in the current folder.

We can give a full URL as well, for instance:

```JavaScript
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>
```

To attach several scripts, use multiple tags:

```JavaScript
<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…
```
* As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

* The benefit of a separate file is that the browser will download it and then store in its cache.

* After this, other pages that want the same script will take it from the cache instead of downloading it. So the file is actually downloaded only once.

* That saves traffic and makes pages faster.

## Summary

* We can use a `<script>` tag to add JavaScript code to the page.

* The type and language attributes are not required.

* A script in an external file can be inserted with `<script src="path/to/script.js"></script>`.

## Active learning

<strong>Show an alert</strong>

Create a page that shows a message “I’m JavaScript!”.

Do it in a sandbox, or on your hard drive, doesn’t matter, just ensure that it works.

<hr>

<strong>Show an alert with an external script</strong>

Take the solution of the previous task Show an alert. Modify it by extracting the script content into an external file alert.js, residing in the same folder.

Open the page, ensure that the alert works.
