# Active learning

To understand what arrays are and how to manipulate them in JavaScript.

## What's an array

Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list. Array objects can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value.

### Creating an array

Arrays are constructed of square brackets, which contain a list of items separated by commas.

1. Let's say we wanted to store a shopping list in an array

```javascript
var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
```

2. you can store any item in an array — string, number, object, another variable, even another array.

```javascript
var sequence = [1, 1, 2, 3, 5, 8, 13];
var random = ['tree', 795, [0, 1, 2]];
```

### Accessing and modifying array items

You can then access individual items in the array using bracket notation, in the same way that you accessed the letters in a string.

1. Enter the following into your console: 
```javascript
shopping[0];
// returns "bread"
```

2. You can also modify an item in an array by simply giving a single array item a new value. Try this: 
```javascript
shopping[0] = 'tahini';
shopping;
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
```

3. Note that an array inside an array is called a multidimensional array. You can access an item inside an array that is itself inside another array by chaining two sets of square brackets together.

```javascript
random[2][2];
```

### Finding the length of an array

You can find out the length of an array (how many items are in it) in exactly the same way as you find out the `length` (in characters) of a string — by using the length property. Try the following:

```javascript
sequence.length;
// should return 7
```

## Some useful array methods

In this section we'll look at some rather useful array-related methods that allow us to split strings into array items and vice versa, and add new items into arrays.

### Converting between strings and arrays

The `split()` method, in its simplest form, this takes a single parameter, the character you want to separate the string at, and returns the substrings between the separator as items in an array.

```javascript
var data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var dataList = myData.split(',');
dataList.length;
dataList[0]; // the first item in the array
dataList[1]; // the second item in the array
dataList[dataList.length-1]; // the last item in the array
```

You can go the opposite way using `join()` method, try the following:

```javascript
var dataString = dataList.join(',');
dataString
```

Result

>	Manchester,London,Liverpool,Birmingham,Leeds,Carlisle

### Adding and removing array items

First of all, to add or remove an item at the end of an array we can use `push()` and `pop()` respectively.

```javascript
var dataList = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
```

1. Let's use push() first — note that you need to include one or more items that you want to add to the end of your array.

```javascript
dataList.push('Cardiff')
dataList.push('Bradford', 'Brighton')
```

2. Removing the last item from the array is as simple as running `pop()` on it.

```javascript
dataList.pop();
```

3. The item that was removed is returned when the method call completes.

```javascript
var removedItem = dataList.pop();
```

<strong>`unshift()` and `shift()` work in exactly the same way, except that they work on the beginning of the array, not the end.</strong>

## Active Learning: Printing those products!

Printing out product names and prices on an invoice, then totaling the prices and printing them at the bottom.

1. Below the `// number 1` comment are a number of strings, each one containing a product name and price separated by a colon. We'd like you to turn this into an array and store it in an array called `products`.

2. On the same line as the `// number 2` comment is the beginning of a for loop. In this line we currently have `i <= 0`, which is a conditional test that causes the for loop to stop immediately, because it is saying "stop when `i` is no longer less than or equal to 0", and `i` starts at 0. We'd like you to replace this with a conditional test that stops the loop when `i` is no longer less than the `products` array's length.

3. Just below the `// number 3` comment we want you to write a line of code that splits the current array item (`name:price`) into two separate items, one containing just the name and one containing just the price.

4. As part of the above line of code, you'll also want to convert the price from a string to a number.

5. There is a variable called `total` that is created and given a value of 0 at the top of the code. Inside the loop (below `// number 4`) we want you to add a line that adds the current item price to that total in each iteration of the loop, so that at the end of the code the correct total is printed onto the invoice.

6. We want you to change the line just below `// number 5` so that the `itemText` variable is made equal to "current item name — $current item price", for example "Shoes — $23.99" in each case, so the correct information for each item is printed on the invoice. This is just simple string concatenation, which should be familiar to you.

```javascript
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
                'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';

for (var i = 0; i <= 0; i++) { // number 2
  // number 3

  // number 4
  
  // number 5
  itemText = 0;
  
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
```

<strong>Result:</strong>

* Underpants — $6.99
* Socks — $5.99
* T-shirt — $14.99
* Trousers — $31.99
* Shoes — $23.99

Total: $83.95

## Active learning: Top 5 searches

In this example we're going to show a much simpler use — here we're giving you a fake search site, with a search box. The idea is that when terms are entered in the search box, the top 5 previous search terms are displayed in the list. When the number of terms goes over 5, the last term starts being deleted each time a new term is added to the top, so the 5 previous terms are always displayed.

To complete the app, we need you to:

1. Add a line below the `// number 1` comment that adds the current value entered into the search input to the start of the array. This can be retrieved using `searchInput.value`.

2. Add a line below the `// number 2` comment that removes the value currently at the end of the array.

```javascript
var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1
    
    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
```

<strong>Less than 5 search terms</strong>

<p align="center">
	<img src="images/search_example1.png" alt="">
</p>

<strong>More than 5 search terms</strong>

<p align="center">
	<img src="images/search_example2.png" alt="">
</p>

## Conclusion

After reading through this article, we are sure you will agree that arrays seem pretty darn useful; you'll see them crop up everywhere in JavaScript, often in association with loops in order to do the same thing to every item in an array.