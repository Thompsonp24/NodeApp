//libary == module
//calling module
const EventEmitter = require("events");

//emit calls/adds any listener to event name (example: firstCatch, secondCatch)
//extends == adds event functions to logger class

class Logger extends EventEmitter {
  //event
  firstCatch(message) {
    console.log(message);
    //listener
    this.emit("firstCatch");
  }
  //event
  secondCatch(message) {
    console.log(message);
    //listener
    this.emit("secondCatch");
  }
  //event
  thirdCatch(message) {
    console.log(message);
    //listener
    this.emit("thirdCatch");
  }
}

//exports entire class to 'Logger'
module.exports = Logger;
