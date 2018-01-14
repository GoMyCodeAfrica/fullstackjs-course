# JavaScript first steps

In our first JavaScript module, we first answer some fundamental questions such as:

* What is JavaScript?

* What does it look like?

* What can it do?

After that, we discuss some key building blocks in detail, such as variables, strings, numbers and arrays.

## A high-level definition

* JavaScript is a programming language that allows you to implement complex things on web pages.

* Displaying timely content updates, or interactive maps, or animated 2D/3D graphics, etc -- JavaScript is probably involved.

* It is the third layer of the layer cake of standard web technologies, two of which (`HTML` and `CSS`)

<p align="center">
	<img src="images/cake.png">
</p>


* HTML is the markup language that we use to structure and give meaning to our web content, for example:
	* Defining paragraphs
	* Defining headings
	* Defining data tables
	* Embedding images and videos in the page.

* CSS is a language of style rules that we use to apply styling to our HTML content, for example:
	* Setting background colors and fonts
	* Laying out our content in multiple columns.

* JavaScript is a programming language that enables you to create:
	* Dynamically updating content
	* Control multimedia
	* Animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

The three layers build on top of one another nicely. Let's take a simple text label as an example. We can mark it up using HTML to give it structure and purpose:

```html
<p>Player 1: Sam</p>
```

<strong>Player 1: Sam</strong>

Then we can add some CSS into the mix to get it looking nice:

```css
p {
  font-family: 'helvetica neue', helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0,0,200,0.6);
  background: rgba(0,0,200,0.3);
  color: rgba(0,0,200,0.6);
  box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor:pointer;
}
```

<style type="text/css">
.p {
  font-family: 'helvetica neue', helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0,0,200,0.6);
  background: rgba(0,0,200,0.3);
  color: rgba(0,0,200,0.6);
  box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor:pointer;
}
</style>
<p class="p">Player 1: Sam</p>

And finally, we can add some JavaScript to implement dynamic behaviour:

```javascript
var para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  var name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}
```

Try the <a href="https://codepen.io/morfioce/pen/EwdvWr">live example</a>.

## What can JavaScript really do?

The core JavaScript language consists of some common programming features that allow you to do things like:

* Store useful values inside variables. In the above example for instance, we ask for a new name to be entered then store that name in a variable called `name`.

* Operations on pieces of text (known as "strings" in programming). In the above example we take the string "Player 1: " and join it to the `name` variable to create the complete text label, e.g. `"Player 1: Sam"`.

* Running code in response to certain events occurring on a web page. We used a `click` event in our example above to detect when the button is clicked and then run the code that updates the text label.

And much more!

What is even more exciting however is the functionality built on top of the core JavaScript language. So-called <strong>Application Programming Interfaces (APIs)</strong> provide you with extra superpowers to use in your JavaScript code.

* APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement.

* They do the same thing for programming that ready-made furniture kits do for home building

They generally fall into two categories.

<p align="center">
	<img src="images/browser.png">
</p>

<strong>Browser APIs</strong> are built into your web browser, for example:

* The DOM (Document Object Model) API allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc. 

* The Geolocation API retrieves geographical information. This is how Google Maps is able to find your location, and plot it on a map.

* The Canvas and WebGL APIs allow you to create animated 2D and 3D graphics.

* Audio and Video APIs like HTMLMediaElement and WebRTC allow you to do really interesting things with multimedia, such as play audio and video right in a web page.

<strong>Third party APIs</strong> are not built into the browser by default, for example:

* The <a href="https://dev.twitter.com/overview/documentation">Twitter API</a> allows you to do things like displaying your latest tweets on your website.

* The <a href="https://developers.google.com/maps/">Google Maps API</a> allows you to embed custom maps into your website, and other such functionality.

>	There's a lot more available, too! However, don't get over excited just yet. You won't be able to build the next Facebook, Google Maps or Instagram after studying JavaScript for 24 hours — there's a lot of basics to cover first. And that's why you're here — let's move on!

## What is JavaScript doing on your page?

what happens when you load a web page in a browser:

* Fisrst you load a web page (HTML, css, javascript, images, fonts, etc) in your browser.

* The browser runs your code (the HTML, CSS, and JavaScript) inside an execution environment (the browser tab)

<p align="center">
	<img src="images/execution.png">
</p>

* The JavaScript is executed by the browser's JavaScript engine, after the HTML and CSS have been assembled and put together into a web page.

* This ensures that the structure and style of the page are already in place by the time the JavaScript starts to run.

> This is a good thing, as a very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API (as mentioned above).

<strong>Browser security</strong>

* Each browser tab is its own separate bucket for running code in (these buckets are called "execution environments" in technical terms)

* In most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab — or on another website.

>	This is a good security measure — if this were not the case, then pirates could start writing code to steal information from other websites, and other such bad things.

<strong>Server-side versus client-side code</strong>

* <strong>Client-side code</strong> is code that is run on the user's computer — when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser.

* <strong>Server-side code</strong> on the other hand is run on the server, then its results are downloaded and displayed in the browser. Examples of popular server-side web languages include PHP, Python, Ruby, and ASP.NET. And JavaScript! JavaScript can also be used as a server-side language, for example in the popular Node.js environment 