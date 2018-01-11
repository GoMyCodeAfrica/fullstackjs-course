## CSV to JSON Converter

The assignment lab for this module is to build a node script to convert CSV files to JSON files. Unlike the tutorial labs, there will be no step by step instructions but all of the information you need to know should be in the modules. Please attempt to solve the assignment lab on your own before viewing the solution.

## Assignment Instructions

Imagine you work at a Bitcoin exchange and you have customer information coming from another source: SSN, credit card and their bitcoin numbers. However, the file format is CSV and your exchange can only support JSON. Your task is to write a Node script to convert CSV into JSON.

You can download the customer information <a href='customer-data.csv'>CSV file</a>

Your assignment is to write a node script that will convert the customer-data.csv file into a JSON file. The 1st row of the CSV file acts as the keys/properties of the JSON object and the rest of the fields act as values. The JSON file must have an array with 1000 items. Output the JSON file in the same directory and name the file `customer-data.json`.

Here's an example of the JSON file structure which your Node program will need to produce:

```JavaScript
[
  {
    "id": "1",
    "first_name": "Ario",
    "last_name": "Noteyoung",
    "email": "anoteyoung0@nhs.uk",
    "gender": "Male",
    "ip_address": "99.5.160.227",
    "ssn": "509-86-9654",
    "credit_card": "5602256742685208",
    "bitcoin": "179BsXQkUuC6NKYNsQkdmKQKbMBPmJtEHB",
    "street_address": "0227 Kropf Court"
  },
  {
    "id": "2",
    "first_name": "Minni",
    "last_name": "Endon",
    "email": "mendon1@netvibes.com",
    "gender": "Female",
    "ip_address": "213.62.229.103",
    "ssn": "765-11-9543",
    "credit_card": "67613037902735554",
    "bitcoin": "135wbMcR98R6hqqWgEJXHZHcanQKGRPwE1",
    "street_address": "90 Sutteridge Way"
  },
  ...
```

Hint: you can create your own function which maps the CSV fields into a JSON object, or you can leverage any of the npm modules

The choice is up to you. Learning how to find, evaluate, install and use an npm module is a necessary skill in any Node development.

## Submission Instructions

To submit the assignment for feedback, put all the program files into GitHub and post a link to your code reviewers.

In addition to providing the GitHub link, please also answer the following questions about your project:

1. Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?

2. How did you test your project to verify that it works? 

3. Let us know if anything doesn't work as intended so your reviewer will know ahead of time


## Feedback Instructions

Please provide feedback to your fellow students! 

Please comment on the following:

1. Does the code work correctly? Download the code from the GitHub link and test it by running it and comparing the difference between the JSON output with the solution JSON output file.  Make sure to run 'npm install' to download all the required dependencies. You can use the diff command to find out if two files have any differences. Here is a link to the solution JSON output file: <a href="customer-data-solution.json">customer-data-solution.json</a>

2. How does the code quality look? Does it make sense? Would you do anything different? What did you like about the code design?

Sample Feedback:

1. The code worked as intended. I diffed the output file with the solution and they matched 100%. 

2. The code had bad styling and the submitter kept reusing sections of code over and over. I would have separated certain parts of the code into a separate function.