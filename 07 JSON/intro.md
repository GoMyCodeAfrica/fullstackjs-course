## Intro

* JSON stands for JavaScript Object Notation
* JSON is a very popular format for exchanging information
* JSON is also used to configure many tools and applications
* Like its name suggests, JSON is based on the object notation in Javascript, here is an example of a JSON file:

  ```json
  {
    "id": 25,
    "name": "Le bon coin",
    "description": "",
    "image": "images/25-le-bon-coin-0001.jpg",
    "address": {
        "avenue": "Rue Habib Bourgruiba",
        "longitude": "83.8603",
        "latitude": "-65.7836"
      },
    "tags": ["restaurant", "tunisian-food"]
  }
  ```
* JSON data is always wrapped in an outer object `{}` and is a set of key-value pairs, just like JS
* Values can be of one of these Values:
  * a string: `"Micheal"`, `"Trevor"`, `"1.0.1"`... Notice that only double-quotes `""` are allowed
  * a number: `27`, `0.25`, `-1`... Notice that special JS numbers (like NaN and Infinity) are NOT allowed
  * a boolean: `true` or `false`
  * an array: `["music", "reading"]`, `[0,1,2]`...
  * an object: `{"long": "20.2", "lat": "52.6"}`...
* These simple data types are what make JSON very powerful and popular.
* Javascript offers two functions to convert to and from JSON:
  * `JSON.stringify` converts any Javascript object to a JSON string
  * `JSON.parse` converts a JSON string to a JS object if possible. Otherwise, produce an error

---

## Activity:

* Write a function `normalizeData` that:
  * Accepts as arguments a JSON string in this form:
    ```javascript
    { "data":
      [
        {
          "id": 5,
          "name": "Le coin rouge",
          "description": "un bon resto",
          "images": [
            "images/25-le-bon-coin-0001.jpg",
            "images/25-le-bon-coin-0002.jpg",
            "images/25-le-bon-coin-0003.jpg"
          ],
          "address":  "Rue Habib Bourgruiba",
          "longitude": "83.8603",
          "latitude": "-65.7836",
          "tags": [
            {"id": 5, "name":"restaurant"},
            {"id": 8, "name":"tunisian-food"}
          ]
        }
      ]
    }
    ```
  * Transforms the data to the following shape as a javascript object:
  ```javascript
    [
      {
        id: 5,
        name: 'Le coin rouge',
        description: "un bon resto",
        image: "images/25-le-bon-coin-0001.jpg",
        address: {
          avenue: "Rue Habib Bourgruiba",
          long: "83.8603",
          lat: "-65.7836"
        }
        tags: ["restaurant", "tunisian-food"]
      }
    ]
  ```

## Activity: how many friends

* Write a function `howManyFriends` that:
  * Accepts as argument a list of objects like this:
  ```javascript
    [
      {
        name: "Mario",
        friends: ["Luiji", "a", "b"]
      }
    ]
  ```
  * And returns a new list of objects with an extra property `friendsCount`
  ```javascript
    [
      {
        name: "Mario",
        friends: ["Luiji", "a", "b"],
        friendsCount: 3
      }
    ]
  ```
