# Collecting data from user: Forms

## HTML forms

* HTML Forms are one of the main points of interaction between a user and a web site or application
*  They allow users to send data to the web site

## The form tag

* The `<form>` element formally defines a form and attributes that determine the behavior of this form
* Each time you want to create an HTML form, you must start it by using this element, putting all the contents inside

> It's not allowed to nest a form inside another form. Nesting can cause forms to behave in an unpredictable manner


```html
<form action="index.html" method="post">

</form>
```

---

## Text inputs

* HTML provides few ways for the user to enter text data:
  * text inputs
  * text areas
  * password inputs
* The following attributes are available:
  * `value`: to set the text inside the element
  * `placeholder`: is the default text that the user before writing any text
### Single-line text

```html
<input type="text" value="look at me now!"><br>
<input type="text" placeholder="Change me">
```
<input type="text" value="look at me now!"><br>
<input type="text" placeholder="Change me">

### Multi-line text input

```html
<textarea></textarea>
```
<textarea></textarea>

### Password input

```html
<input type="password" value="you can't see me">
```
<input type="password" value="you can't see me">

---

## Radio button input groups

* Use radio buttons when you want the user to choose one of multiple choices
* Notice that in order for a group of radio buttons to behave correctly, they need to have the same `name` and different `value`s

```html
<form action="index.html" method="post">
  Choose your field of expertise:<br>

  <input type="radio" id="tech" name="field" value="tech">
  <label for="tech">Technology</label>
  <br>

  <input type="radio" id="bio" name="field" value="bio">
  <label for="bio">Biology</label>
  <br>

  <input type="radio" id="architecture" name="field" value="architecture">
  <label for="architecture">Architecture</label>
  <br>

  <input type="radio" id="education" name="field" value="education">
  <label for="education">Education</label>  
</form>
```
<form action="index.html" method="post">
  Choose your field of expertise:<br>

  <input type="radio" id="tech" name="field" value="tech">
  <label for="tech">Technology</label>
  <br>

  <input type="radio" id="bio" name="field" value="bio">
  <label for="bio">Biology</label>
  <br>

  <input type="radio" id="architecture" name="field" value="architecture">
  <label for="architecture">Architecture</label>
  <br>

  <input type="radio" id="education" name="field" value="education">
  <label for="education">Education</label>  
</form>

---

## Checkbox input groups

* Checkbox inputs are similar to radio inputs: they only make sense in groups and are used to provide the user with multiple choices
* With Checkbox inputs however, you can choose many options


```html
<form action="index.html" method="post">
  Choose your fields of expertise:<br>

  <input type="checkbox">
  <label>Technology</label>
  <br>

  <input type="checkbox">
  <labelfor="bio1">Biology</label>
  <br>

  <input type="checkbox" >
  <label>Architecture</label>
  <br>

  <input type="checkbox">
  <label>Education</label>  
</form>
```

<form action="index.html" method="post">
  Choose your fields of expertise:<br>

  <input type="checkbox">
  <label>Technology</label>
  <br>

  <input type="checkbox">
  <labelfor="bio1">Biology</label>
  <br>

  <input type="checkbox" >
  <label>Architecture</label>
  <br>

  <input type="checkbox">
  <label>Education</label>  
</form>

---

## Select and option

* Another popular method to ask users for information is using `select` and `option`s:

```html
<select name="select">
  <option value="value1">Value 1</option>
  <option value="value2">Value 2</option>
  <option value="value3">Value 3</option>
</select>

```

<select name="select">
  <option value="value1">Value 1</option>
  <option value="value2">Value 2</option>
  <option value="value3">Value 3</option>
</select>

---

## Form control buttons

### Submit button

* The `submit` button sends the form information to the url specified in the `action` attribute of the parent `form`

```html
<form action="index.html" method="post">
  <input type="text" value="">
  <input type="submit">
</form>
```
<form action="index.html" method="post">
  <input type="text" value="">
  <input type="submit">
</form>

### Reset button

* The `cancel` button clears all inputs in the current form.

```html
<form action="index.html" method="post">
  <input type="text" value="clear me">
  <input type="reset">
</form>
```
<form action="index.html" method="post">
  <input type="text">
  <input type="reset">
</form>

---

## Activity: Signup form

* Write an HTML form for user sign up that asks the user to provide these information about himself:
  * First name
  * Last name
  * Mobile number
  * Username
  * Password
  * Birthday
* Extras
  * use other input types than `text`
