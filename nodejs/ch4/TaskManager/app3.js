const EventEmitter = require("events");
const fs = require("fs");

//loads from logger3
const TestApplication = require("./logger3");
let testapplication = new TestApplication();

//fires listener from logger3.js loadApp-
testapplication.on("loadApplication", () => {

  //appending message to logger.txt when listener is run
  data = "Application loaded!\n";
  fs.appendFile("logger.txt", data, (err) => {
    if (err) {
        //if error prints out "error " + error type
        console.log("Error " + err);
    } else {
        //else prints out "finished!" to text file
      console.log("Finished!");
    }
  });
});

//calls TestApp-
testapplication.loadApplication("Application is loading...");
