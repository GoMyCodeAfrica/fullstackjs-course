# Active learning

To understand that strings are objects, and learn how to use some of the basic methods available on those objects to manipulate strings.

## String are objects

We've said it before, and we'll say it again — everything is an object in JavaScript. When you create a string, for example by using

```javascript
var string = 'This is my string';
```

your variable becomes a string object instance, and as a result has a large number of properties and methods available to it. You can see this if you go to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a> object page and look down the list on the side of the page!

<strong>Now, before your brain starts melting, don't worry!</strong> You really don't need to know about most of these early on in your learning journey. But there are a few that you'll potentially use quite often that we'll look at here. 

<strong>Finding the length of a string</strong>
This is easy — you simply use the `length` property. Try entering the following lines:
```javascript
var company = "Go MY CODE";
var len = company.length; // 10 characters long
````

>	10

<strong>Retrieving a specific string character</strong>
On a related note, you can return any character inside a string by using <strong>square bracket notation</strong> — this means you include square brackets ([]) on the end of your variable name.
```javascript
company[0]; // 'G'
````

>	G

Computers count from 0, not 1! To retrieve the last character of any string, we could use the following line, combining this technique with the length property we looked at above:

```javascript
company[len - 1]; // 'G'
````

>	E

<strong>Finding a substring inside a string and extracting it</strong>

1. Sometimes you'll want to find if a smaller string is present inside a larger one (we generally say if a substring is present inside a string). This can be done using the `indexOf()` method, which takes a single parameter — the substring you want to search for. Try this: 

```javascript
comany.indexOf('CODE');
````

>	7

2. This can be done in another way, which is possibly even more effective. Try the following: 

```javascript
company.indexOf('Code');
```

>	-1

This should give you a result of `-1` — this is returned when the substring, in this case 'Code', is not found in the main string.

3. When you know where a substring starts inside a string, and you know at which character you want it to end, `slice()` can be used to extract it. Try the following: 

```javascript
company.slice(0, 2);
```

>	GO

4. Also, if you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter! Instead, you only need to include the character position from where you want to extract the remaining characters in a string. Try the following: 

```javascript
company.slice(4);
```

>	MY CODE

>	<strong>Note:</strong> The second parameter of slice() is optional: if you don't include it, the slice ends at the end of the original string. There are other options too; study the slice() page to see what else you can find out.

<strong>Updating parts of a string</strong>

You can replace one substring inside a string with another substring using the `replace()` method. 

```javascript
company.replace('O', '{>}');
````

>	G{>} MY CODE


## Filtering greeting messages

In the first exercise we'll start you off simple — we have an array of greeting card messages, but we want to sort them to list just the Christmas messages. We want you to fill in a conditional test inside the `if( ... )` structure, to test each string and only print it in the list if it is a Christmas message.


1. First think about how you could test whether the message in each case is a Christmas message. What string is present in all of those messages, and what method could you use to test whether it is present?

2. You'll then need to write a conditional test of the form operand1 operator operand2. Is the thing on the left equal to the thing on the right? Or in this case, does the method call on the left return the result on the right?

3. Hint: In this case it is probably more useful to test whether the method call isn't equal to a certain result.


* Happy Birthday!
* Merry Christmas my love
* A happy Christmas to all the family
* You're all I want for Christmas
* Get well soon


```javascript
var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i]) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
```

## Fixing capitalization

In this exercise we have the names of cities in the United Kingdom, but the capitalization is all messed up. We want you to change them so that they are all lower case, except for a capital first letter. A good way to do this is to:

1. Convert the whole of the string contained in the `input` variable to lower case and store it in a new variable.

2. Grab the first letter of the string in this new variable and store it in another variable.

3. Using this latest variable as a substring, replace the first letter of the lowercase string with the first letter of the lowercase string changed to upper case. Store the result of this replace procedure in another new variable.

4. Change the value of the `result` variable to equal to the final result, not the `input`.

>	<strong>Note: </strong>A hint — the parameters of the string methods don't have to be string literals; they can also be variables, or even variables with a method being invoked on them.

* lonDon     --> London
* ManCHESTer --> Manchester
* BiRmiNGHAM --> Birmingham
* liVERpoOL  --> Liverpoll

```javascript
var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

## Making new strings from old parts

In this last exercise, the array contains a bunch of strings containing information about train stations in the North of England. The strings are data items that contain the three-letter station code, followed by some machine-readable data, followed by a semicolon, followed by the human-readable station name. For example:

>	MAN675847583748sjt567654;Manchester Piccadilly

We want to extract the station code and name, and put them together in a string with the following structure:

>	MAN: Manchester Piccadilly

We'd recommend doing it like this:

Extract the three-letter station code and store it in a new variable.
Find the character index number of the semicolon.
Extract the human-readable station name using the semicolon character index number as a reference point, and store it in a new variable.
Concatenate the two new variables and a string literal to make the final string.
Change the value of the `result` variable to equal to the final string, not the `input`.

* MAN675847583748sjt567654;Manchester Piccadilly
* GNF576746573fhdg4737dh4;Greenfield
* LIV5hg65hd737456236dch46dg4;Liverpool Lime Street
* SYB4f65hf75f736463;Stalybridge
* HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield

```javascript
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here   

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
```

## Conclusion

You can't escape the fact that being able to handle words and sentences in programming is very important — particularly in JavaScript, as websites are all about communicating with people. This learning activity has given you the basics that you need to know about manipulating strings for now. This should serve you well as you go into more complex topics in the future. Next, we're going to look at the last major type of data we need to focus on in the short term — arrays.

