# Silly Story Generator

In this assessment you'll be tasked with taking some of the knowledge you've picked up in this module's articles and applying it to creating a fun app that generates random silly stories. Have fun!

## Objectives

To test comprehension of JavaScript fundamentals, such as variables, numbers, operators, strings, and arrays.

## Starting point

* Go and grab the <a href="resources/index.html">HTML file</a> for the example and save a local copy of it as index.html in a new directory somewhere on your computer. This also has the CSS to style the example contained within it.

* Go to the page containing the <a href="resources/raw-text.txt">raw text</a> and keep this open in a separate browser tab somewhere. You'll need it later.

## Projet brief

You have been provided with some raw HTML/CSS and a few text strings and JavaScript functions; you need to write the necessary JavaScript to turn this into a working program, which does the following:

* Generates a silly story when the "Generate random story" button is pressed.
* Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.
* Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the generate button is pressed.
* Will generate another random silly story if you press the button again (and again...)

The following screenshot shows an example of what the finished program should output:

<p align="center">
	<img src="images/story_generator.png" alt="story generator">
</p>

To give you more of an idea, have a <a href="http://mdn.github.io/learning-area/javascript/introduction-to-js-1/assessment-finished/">look at the finished example</a> (<strong>no peeking at the source code!</strong>)

## Steps to complete

The following sections describe what you need to do.

<strong>Basic setup:</strong>

1. Create a new file called main.js, in the same directory as your index.html file.
2. Apply the external JavaScript file to your HTML by inserting a `<script>` element into your HTML 
encing main.js. Put it just before the closing `</body>` tag.

<strong>Initial variables and functions:</strong>

1. In the raw text file, copy all of the code underneath the heading "1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS" and paste it into the top of the `main.js` file. This gives you three variables that store references to the "Enter custom name" text field (`customName`), the "Generate random story" button (`randomize`), and the `<p>` element at the bottom of the HTML body that the story will be copied into (`story`), respectively. In addition you've got a function called `randomValueFromArray()` that takes an array, and returns one of the items stored inside the array at random.
2. Now look at the second section of the raw text file — "2. RAW TEXT STRINGS". This contains text strings that will act as input into our program. We'd like you to contain these inside variables inside `main.js`:
    1. Store the first, big long, string of text inside a variable called `storyText`.
    2. Store the first set of three strings inside an array called `insertX`.
    3. Store the second set of three strings inside an array called `insertY`.
    4. Store the third set of three strings inside an array called `insertZ`.

<strong>Placing the event handler and incomplete function:</strong>

1. Now return to the raw text file.
2. Copy the code found underneath the heading "3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION" and paste it into the bottom of your `main.js` file. This:
    * Adds a click event listener to the randomize variable so that when the button it represents is clicked, the `result()` function is run.
    * Adds a partially-completed `result()` function definiton to your code. For the remainder of the assessment, you'll be filling in lines inside this function to complete it and make it work properly.

<strong>Completing the `result()` function:</strong>

1. Create a new variable called `newStory`, and set it's value to equal `storyText`. This is needed so we can create a new random story each time the button is pressed and the function is run. If we made changes directly to `storyText`, we'd only be able to generate a new story once.
2. Create three new variables called `xItem`, `yItem`, and `zItem`, and make them equal to the result of calling `randomValueFromArray()` on your three arrays (the result in each case will be a random item out of each array it is called on). For example you can call the function and get it to return one random string out of `insertX` by writing `randomValueFromArray(insertX)`.
3. Next we want to replace the three placeholders in the `newStory` string — `:insertx:`, `:inserty:`, and `:insertz:` — with the strings stored in `xItem`, `yItem`, and `zItem`. There is a particular string method that will help you here — in each case, make the call to the method equal to `newStory`, so each time it is called, `newStory` is made equal to itself, but with substitutions made. So each time the button is pressed, these placeholders are each replaced with a random silly string. As a further hint, the method in question only replaces the first instance of the substring it finds, so you might need to make one of the calls twice.
4. Inside the first `if` block, add another string replacement method call to replace the name 'Bob' found in the `newStory` string with the name variable. In this block we are saying "If a value has been entered into the `customName` text input, replace Bob in the story with that `custom name`."
5. Inside the second `if` block, we are checking to see if the `uk` radio button has been selected. If so, we want to convert the weight and temperature values in the story from pounds and farenheit into stones and centigrade. What you need to do is as follows:
    1. Look up the formulae for converting pounds to stone, and farenheit to centigrade.
    2. Inside the line that defines the `weight` variable, replace 300 with a calculation that converts 300 pounds into `stones`. Concatenate `' stone'` onto the end of the result of the overall `Math.round()` call.
    3. Inside the line that defines the `temperature` variable, replace 94 with a calculation that converts 94 farenheit into centigrade. Concatenate `' centigrade'` onto the end of the result of the overall `Math.round()` call.
    4. Just under the two variable definitions, add two more string replacement lines that replace '94 farenheit' with the contents of the `temperature` variable, and '300 pounds' with the contents of the `weight` variable.
6. Finally, in the second-to-last line of the function, make the `textContent` property of the `story` variable (which references the paragraph) equal to `newStory`.

## Hints

* You don't need to edit the HTML in any way, except to apply the JavaScript to your HTML.

* If you are unsure whether the JavaScript is applied to your HTML properly, try removing everything else from the JavaScript file temporarily, adding in a simple bit of JavaScript that you know will create an obvious effect, then saving and refreshing. The following for example turns the background of the `<html>` element red — so the entire browser window should go red if the JavaScript is applied properly:

```html
document.querySelector('html').style.backgroundColor = 'red';
```

* Math.round() is a built-in JavaScript method that simply rounds the result of a calculation to the nearest whole number.