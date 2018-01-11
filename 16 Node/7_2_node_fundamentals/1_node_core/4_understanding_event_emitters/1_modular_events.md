## Modular Events

The observer pattern is often used to modularize code. A typical usage is to separate the event emitter class definition and the event emission into its own module but allow the observers to be defined in the main program. This allows us to customize the module behavior without changing the module code itself.

In job.js, we use a generic job module that emits a done event after 700ms. However, in weekly.js, we can customize the event handler of the observer to do whatever we want once a done event is triggered.

job.js:

```JavaScript
const EventEmitter = require('events')
class Job extends EventEmitter {
  constructor(ops) {
    super(ops)
    this.on('start', ()=>{
      this.process()
    })
  }
  process() {
     setTimeout(()=>{
      // Emulate the delay of the job - async!
      this.emit('done', { completedOn: new Date() })
    }, 700)
  }
}

module.exports = Job
```

weekly.js:

```JavaScript
var Job = require('./job.js')
var job = new Job()

job.on('done', function(details){
  console.log('Weekly email job was completed at',
    details.completedOn)
})

job.emit('start')
```

When you run weekly.js, the custom logic pertaining to the done event will be executed from weekly.js. This way the creators of the job.js module can keep the module flexible. They don't have to hard code any logic for the done event in the module.

Consumers of the module job.js, people who write weekly.js, have the power to customize the behavior for the done event, and not only for that event. Event emitters can have multiple events: in the middle, at the start, in the end, etc.

They can be called (emitted or triggered) multiple times and with data (passed as the second argument to emit() as can be seen in job.js). Furthermore, there are methods to list or remove event listeners (observers) or to specify the execution of an event listener (observer) just once (.once() method).

Documentation: https://nodejs.org/api/events.html
