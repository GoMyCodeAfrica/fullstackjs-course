# jQuery events

## Introduction

The jQuery library provides a collection of methods that serve one of two purposes.

* To listen for an event — an event (e.g. clicking a button) is something the user does to trigger an action.

* To add a visual effect — a visual effect (e.g. a drop-down menu appearing when a user clicks a button) is something that changes the appearance of the web page. Events are often responsible for triggering a visual effect.

There are two parts to an event handler: an event listener and a callback function.

* An event listener is a method that listens for a specified event to occur, like a click event.
* A callback function is a function that executes when something triggers the event listener.

Both the event listener and callback function make up an event handler.

In code, this looks like:

```javascript
$('.example-class').on('click', () => {
  // Execute code here when .example-class is clicked
});
```
Let's consider the example above step-by-step:

* `$('.example-class')` selects all HTML elements with a class of `example-class`.
* The `.on('click')` method is the event listener. It checks if the user has clicked an `.example-class` HTML element.
* The second argument to `.on()` is a callback function. When a `'click'` occurs on an `.example-class` element, this function executes.

## Examples

// Event setup using a convenience method
* `.click()`

  ```html
  <button id="helloBtn">Say hello</button>

  <script>
    $( "#helloBtn" ).click(function( event ) {
        alert( "Hello." );
    });
  </script>
  ```

* .mouseover()

  ```html
  <p>Move the mouse pointer over this paragraph.</p>

  <script>
    $("p").mouseover(function(){
            $("p").css("background-color", "yellow");
        });
  </script>
  ```

* .hover()

  ```html
  <p>Hover the mouse pointer over this paragraph.</p>

  <script>
    $("p").hover(function(){
        $("p").css("background-color", "yellow");
    });
  </script>
  ```

// Equivalent event setup using the `.on()` method

* .on("click")

  ```html
  <button id="helloBtn">Say hello</button>

  <script>
    $( "#helloBtn" ).on( "click", function( event ) {
        alert( "Hello." );
    });
  </script>
  ```


## jQuery this

* `this` returns the DOM element on which the event occured,
* For example, when the user clicks a `#trgt-elt` element,  `this` refers to the `#trgt-elt`
* `$(this)` returns the jQuery object that wraps the target element.

* However, to access the target element using vanilla JS, we use `event.target` instead of `this`:

```javascript
document.querySelector('.some-el')
  .onclick = function(event) {
    console.log(event.target)
  }
```

 ## Exercices

Click exercice :

* Click to say hello

[Codepen code](https://codepen.io/cyrinerh/pen/JMVpQv)

Hover exercice :

* Hover the mouse pointer over this paragraph.

[Codepen code](https://codepen.io/cyrinerh/pen/RxOMwO)

Scroll exercice :

* Scroll to the top and bottom of the page with jQuery.

[Codepen Code](https://codepen.io/cyrinerh/pen/WdWdmL?editors=1010)

this exercice :

* Description is up to u sam :)

[Codepen code](https://codepen.io/cyrinerh/pen/jYRzaw?editors=1010)

Final exercice:

* We have 2 drop-down lists, the first (list A) contains fruit and the second (list B) is our basket.
* We will have to fill our fruit basket.

* To do this, two buttons are available to us: "Add" allows you to take a fruit from list A and insert it into list B (while deleting it from list A).

* The "Delete" button does exactly the same thing in the opposite direction.

* In your code, do not forget to take into consideration the state of these two buttons: they must not be clickable if no element of their respective list is selected.

[Codepen Code](https://codepen.io/cyrinerh/pen/mpgpWm?editors=1010)
