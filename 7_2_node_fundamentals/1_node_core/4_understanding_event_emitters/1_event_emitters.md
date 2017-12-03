## Understanding Event Emitters

Event emitters is a core module for Node developers to implement the observer pattern. The observer pattern has the following: an observer, an event and an event emitter.

The flow goes like this:

1. A class is created with class

2. A class inherits from the EventEmitter class using extends

3. An instance of an object is created from the class with new

4. An observer (a.k.a. event listener) is created with .on(eventName, eventHandler)

5. An event is emitted with emit() and the event handler in the observer is executed.

Consider this simple observer pattern code which creates a Job class and then instantiates it. Later on, the object created from the class has an observer/event listener attached (<code>job.on('done'...)</code>) and an event is emitted/triggered.

simple.js:

```JavaScript
const EventEmitter = require('events')

class Job extends EventEmitter {}
job = new Job()

job.on('done', function(timeDone){
  console.log('Job was pronounced done at', timeDone)
})

job.emit('done', new Date())
job.removeAllListeners()  // remove  all observers
```

The result will be:

<code>Job was pronounced done at `<time>`</code>

## Multiple Event Triggers

Events can be triggered/emitted multiple times. For example, in knock-knock.js the knock event is emitted multiple times.

knock-knock.js:

```JavaScript
const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter = new Emitter()

emitter.on('knock', function() {
  console.log('Who\'s there?')
})

emitter.on('knock', function() {
  console.log('Go away!')
})

emitter.emit('knock')
emitter.emit('knock')
```
The result will be:

<code>
Who's there?   
Go away!  
Who's there?  
Go away!  
</code>

## Executing Observer Code Only once

emitter.once(eventName, eventHandler) will execute observer code just once, no matter how many time this particular event was triggered.

knock-knock-once.js:

```JavaScript
const EventEmitter = require('events')

class Emitter extends EventEmitter {}
emitter = new Emitter()

emitter.once('knock', function() {
  console.log('Who\'s there?')
})


emitter.emit('knock')
emitter.emit('knock')
```

The result will be:

<code>Who's there?</code>
