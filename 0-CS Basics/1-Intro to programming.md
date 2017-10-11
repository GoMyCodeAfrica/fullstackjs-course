## Intro to programming

### Def: programming

Programming is process of writing computer programs to solve problems.

### Def: problem

In the programming context, a problem could be as simple as adding two number together or as complex as driving a car.

During this course, we'll be learning how to solve very basic problems and as time goes by we will be able to solve bigger and bigger problems.

---

### Def: program

* a list of orders for the computer
* the orders we give to the computer are called statements, e.g `alert('bonjour, chui dacc')`
* the computer executes the instructions one after the other
* before the computer start to run the program, it makes sure there is no unknown words in the program. If there are unknown words, the computer does not run the program.
* we write a program in a text file using a language that the computer can understand. In our case, this language will be Javascript.

---

### Programming languages

It is important to understand that for every type of problem, there one or two programming language that is best-suited to solve it. In our case, we chose javascript because it has evolved from a language only a browser can run into a multi-purpose language.

---

### Hello world

* write the following in a text file
  ```html
  <script>
    alert('Hello worlds')
  </script>
  ```
* open the file in a browser, e.g. Google Chrome
* this file contains one instruction to the browser
* the function `alert` shows a message on the browser
* you can find help on any instruction online, for the `alert` function, see [this link](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert)
---

### Def: statement

A statement is  group of words, numbers, and operators that performs a specific task. In the previous `alert('Hello worlds')` is a statement to the computer to show the message `Hello worlds` on the browser.

### Def: expression

Statement are made up of one or more expression. For instance, let's say we have a variable `a = 5`, in the following expression:

```javascript
alert(a + 22)
```

* `22` is literal value expression
* `a` is a variable expression, which means to replace it with its current value `5`
* `a + 22` is an arithmetic expression that gets replaced by `5 + 22` and then replaced again by `27`
* so eventually, this statement is equivalent to `alert(27)`
* the browser will evaluate all the expressions and show `27` in a message

---

### Def: data

* in computer science, data is information. e.g. the age of person, the address of a coffeshop, the number your friends on facebook, the list of your friends on facebook...
* every program we'll write will manipulate some data. e.g.
* we can order the computer to save data for us in the computer memory.
---

### Def: computer memory

* just like human beings, computers have two types of memory
  * a short-term memory: RAM; holds the data for running programs. Once the computer is shut down, all data in the RAM is lost.
  * a long-term memory: Disk memory; permanent data is stored in the hard disk of the computer in the form of files. e.g. a `.doc` file holds text data, an `.mp3` file holds audio data...
* for the time being, we're only concerned with the short-term memory (RAM)
* the memory of the computer is huge table with billions of cells.
* the computer saves data inside its memory.
* we can instruct the computer to save a piece of data to be used later.
---

### Def: variable

* to save a piece of data in the memory, we use variables.
* a variable is a cell in the computer memory that is identified by a name and that holds one piece of data. e.g. a school address is store inside a variable `address` or `school_address` or `addr`...
* to instruct the browser to reserve a new cell in the computer memory and, we use the word `var`
* we can put a piece of data inside a variable using the `=`
  ```javascript
  var address = "Les Berges du Lac"
  ```
---

### Using variables

```javascript
var name = "Mario"
alert("go ahead " + name)
```

In this example, we order the browser to do two things:
  * create a new variable `name` and save the word `mario` inside it
  * show a message `go ahead Mario` on the screen
---

### Variable input

We can instruct the browser to get a certain piece of information from the user with the help of `prompt` function.

```javascript
var name = prompt('Who are you ?')
alert("Greeting, " + name)
```
---

### Data types

Unlike math in which we only operate on numbers, computers have to deal with different kinds of data. e.g. a person's name is a text, a car's license number is a number, a birthday date is a date (how clever!)...

In javascript, three types of data are essential to build programs:

* String: to store text, e.g. `"Mario"`, `"28 Days Later"`, `'Tunisia'`, `'+216 86 586 320'`. As you can see, all strings are written inside `""` or `''`
* Number: to save numerical data, we use numbers. e.g. `32`, `-55`, `13.70`, `0`
* Boolean: some data is boolean in nature, i.e. it is either true or false. For instance, we can store whether or not a user is an admin in a variable called `is_admin` and it can have two values: `true` or `false`
  ```javascript
  var is_admin = false
  ```

Just like its name suggest, the data inside a variable can be changed during the program using the `=` operator. Try this:

```javascript
var message = "hello"
alert(message)
message = "hello again"
alert(message)
```

---


### Def: Operator

An operator is a symbol that tells the browser to perform a specif function on some data. e.g. in the expression `3 + 6`, the `+` operator signifies to the browser to perform an addition to `3` and `6`.

There are various types of operators, here are some of them:

<table>
  <tr>
    <td>Type</td>
    <td>Examples</td>
  </tr>
  <tr>
    <td>Mathematical operators</td>
    <td>
      <li>Addition (+)</li>
      <li>Substraction (-)</li>
      <li>Multiplication (*)</li> <!--*-->
      <li>Division (/)</li>
      <li>Remainder (%)</li>
    </td>
  </tr>
  <tr>
    <td>Comparison operators</td>
    <td>
      <li>Equal (==)</li>
      <li>Not equal (!=)</li>
      <li>Strictly equal (===)</li>
      <li>Strict not equal (!==)</li>
      <li>Greater than (>)</li>
      <li>Greater than or equal (>=)</li>
      <li>Greater than (<)</li>
      <li>Greater than or equal(<=)</li>
    </td>
  </tr>
  <tr>
    <td>String operators</td>
    <td>
      <li>Concatenation (+)</li>
    </td>
  </tr>
</table>

---

### Exercice

Write a program that:
* asks the user for one variable a
* asks the user for one variable b
* calculates the sum of a and b and save it in a variable s
* show the result to the user
