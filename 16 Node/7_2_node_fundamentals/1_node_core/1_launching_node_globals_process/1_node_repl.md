## Node.js Console (REPL)

Like most platforms/languages (e.g., Java, Python, Ruby, and PHP), Node.js comes with a virtual environment called Read-Evaluate-Print Loop (REPL). Using REPL (a.k.a. Node console), we can execute pretty much any Node.js/JavaScript code. It is even possible to include modules and work with the file system!

To start Node REPL, run the following command in your terminal:

```shell
$ node
```

The prompt should change from $ to > (or something else, depending on your shell). From this prompt, we can run any JavaScript/Node.js (akin to the Chrome Developer Tools console) we want. For example:

```JavaScript
> 1+1
> "Hello"+" "+"World"
> a=1;b=2;a+b
> 17+29/2*7
> f = function(x) {return x*2}
> f(b)
```

The result of the REPL statements above are shown below. As you can see, REPL prints the results of the expressions such as 1+1 or f(b):

```JavaScript
$ node
> 1+1
2
> "Hello"+" "+"World"
'Hello World'
> a=1;b=2;a+b
3
> 17+29/2*7
118.5
> f = function(x) {return x*2}
[Function: f]
> f(b)
4
>
```

REPL is one of the ways how developers can run Node code. The benefit of REPL is that you immediately see the results of a particular expression or piece of code. I often use REPL to validate Regular Expressions or string methods. The downside of REPL is that the code is not saved which means it's harder to replicate the execution. Thus, in the next lesson we'll learn how to launch Node code from a saved file.
