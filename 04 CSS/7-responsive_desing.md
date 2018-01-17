## Def: Responsive web design
Responsive web design is an approach to web design which makes web pages look good on a all screen sizes.

## Chrome dev tools

* During this lesson, we will use a cool feature in chrome dev tools to simulate and test different screen sizes: the "Device toolbar"


## The viewport meta tag

* The first thing we need to do to enable our sites to become responsive is add this meta tag to the `head` of our html file
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
* This will enable the browser to set width of the browser equal to the width of the device when the webpage is viewed from a smartphone or a table

## Media queries

* Media queries are a CSS feature that allow us to change the design of our HTML pages according to the width of the screen of the device
* For example to change the width of html elements with a class `.portfolio-image`, we can use this snippet

  ```css
  .portfolio-project {
    width: 33%;
  }
  @media (max-width: 800px) {
    .portfolio-project {
      width: 50%;
    }
  }
  @media (max-width: 550px) {
    .portfolio-project {
      width: 100%;
    }
  }
  ```

* Or we can go the other way around and start from the small screen up. This approach is called **mobile-first responsive design**

  ```css
  .portfolio-project {
    width: 100%;
  }
  @media (min-width: 550px) {
    .portfolio-project {
      width: 50%;
    }
  }
  @media (min-width: 800px) {
    .portfolio-project {
      width: 33%;
    }
  }
  ```

* Notice that we can have as many CSS rulesets as we need inside one media query:
  ```css
  @media (min-width: 800px) {
    .student-profile {
      width: 50%;
      font-size: 1.2em;
    }
    .student-list {
      margin: 5px;
      border-width: 2px;
    }
  }
  ```

## Bootstrap

* Bootstrap is a CSS library that can help us implement responsive design easily
* To use bootstrap for responsive design, we first have to understand the following:
  1. Bootstrap uses a 12-column grid, which means that the screen is divided into 12 columns
  2. Bootstrap has a list of 5 screen sizes:
    * `xs` extra small: less than 576px
    * `sm` small: 576px - 767px
    * `md` medium: 768px - 991px
    * `lg` large: 992px - 1199px
    * `xl` extra large: greater than 1200px
* We can combine these two pieces of information to create HTML elements with flexible width using only classes:
  ```html
  <div class="row">
    <div class="student-card col-sm-12 col-md-6 col-lg-4">
      <!-- Some content goes in here -->
    </div>
    <div class="student-card col-sm-12 col-md-6 col-lg-4">
      <!-- Some content goes in here -->
    </div>
  </div>
  ```
* In this example the `.student-card` divs have a flexible width:
  * 100% on small devices
  * 50% on medium devices
  * 33% on large devices
* **Notice that we have to wrap all the elements in a `.row` container for bootstrap to work properly**

## Exercice

* Implement responsive design in your personal portfolio project using bootstrap
* Bootstrap has also a list of ready-to-use components like headers, buttons, menus... Use some of them as well
