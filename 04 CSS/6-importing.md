# Importing

* We can import external CSS files, fonts and more
* To import another CSS file using the following syntax:
  ```css
  @import url('buttons.css')
  ```
* We can also use the `@import` rule to add custom fonts:
  ```css
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  ```
* In reality, the google fonts service is using the `@font-face` rule
  ```css
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/mErvLBYg_cXG3rLvUsKT_fesZW2xOQ-xsNqO47m55DA.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
  }
  ```
