# Form validation

## Required attribute

To require that an input is filled, you can add the `required` attribute to it

```html
<input type="text" required>
```

## Maxlength and minlength

For text fields, you can require that it reaches a minimum length or can't surpass a maximum length, or both.

```html
<input type="text" minlength="10">
<input type="password" minlength="8" maxlength="20">
```

## Activity

* Write an HTML form for user sign up that asks the user to provide these information about himself:
  * First name (required)
  * Last name (required)
  * Mobile number (optional)
  * Username (required)
  * Password (required)
  * Birthday (optional)
* Make sure the first and last names are at least 2 characters long each
* Make sure the password is at least 8 characters long
* Extras
  * Make sure the user is at least 12 years old
