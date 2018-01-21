# React's architecture: Unidirectional data flow

* React is based on a simple architecture: The view is a function of the data provided as input: `UI = fn(data)`
* As developers, all we have to do is update the state of our apps (the data) and react will update the UI accordingly
* The data passes through components and every component only gets the minimum amount of data needed.

## Activity

Getting back to the same facebook example, draw a model of how data stored in the root component and how it flows through children components
