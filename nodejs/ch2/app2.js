//loads event libary
const EventEmitter = require("events");

//requires and calls class 'Logger'
const Logger = require("./logger2");
let logger = new Logger();

//what the listener will output when events are called
//these go after first
logger.on("firstCatch", () => {
  console.log("first listener called!");
});
logger.on("secondCatch", () => {
  console.log("second listener called!");
});
logger.on("thirdCatch", () => {
  console.log("third listener called!");
});

//what events will output when called
//these go first
logger.firstCatch("calling first listener...");
logger.secondCatch("calling second listener...");
logger.thirdCatch("calling third listener...");
