const EventEmitter = require("events");

//calls TestApp- and prints out message in app3.js ln 21
class TestApplication extends EventEmitter {
    loadApplication(message) {
        console.log(message);
        //listener == emit
        //fires listener which is loadApp-
        this.emit("loadApplication");
    }
}

//exports logger3 back to app3
module.exports = TestApplication;