## Launching Node.js Scripts

Node is an interpreted language and environment, not a compiled one. There are three main way to launch Node code:

1. REPL (already covered in the previous lesson)
2. Eval option
3. Launching Node code from a file

## Eval Option

If all we need is a quick set of statements, there’s a eval -e option that allows us to run inline JavaScript/Node.js. For example, to print the current data, run this in your Terminal / Command Prompt:

```shell
node -e "console.log(new Date())"
```

Another example prints Node version:

```shell
node -e "console.log(process.versions.node)"
```

Node eval (-e flag) is useful in npm and bash scripts because it allows you to execute Node in a very compact manner in the bash, zsh or any other shell environment without having to have a Node file. You can get versions, OS information or run any Node code such as working with a file system, database or HTTP.

## Launching Node Code from a File

This is the most common use case because it allows you to save long Node programs and run them. To run a Node.js script from a file, simply type node filename.

For example, to launch code from a program.js file which is located in a current folder, simply execute

```shell
node program.js
```

The file must be in the same folder. If you need to execute code from a file which is in a different folder, just provide the relative or absolute path:

```shell
node ./app/server.js
node /var/www/app/server.js
```

The .js is optional as long as you have a file with such extension. In other words, if you have server.js you can execute node server.

If you have index.js in a folder, you can simply execute with a dot/period/full stop which in POSIX means the current folder or with a path to that folder.

For example:

```shell
node .
node /var/www/app
```

Are equivalent to

```shell
node index.js
node index
```

and

```shell
node /var/www/app/index.js
node /var/www/app/index
```