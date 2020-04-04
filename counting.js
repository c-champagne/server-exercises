//Write a server that keeps track of a counter! Initialize a global variable that holds the count (starting at 0). Write three routes called POST /increment, POST /decrement, and GET /value. The first two should increment and decrement the value respectively and then respond with the new counter value. The third route should just respond with the current value. Again, verify that your server works with Postman.


const express = require("express");
const app = express();
let counter = 0;

app.get("/value", function (req, res, next) {
    res.send("The current count is " + counter);  
})

app.post("/increment", function (req, res, next) {
    counter += 1;
    res.send("The current count has been increased to " + counter);
})

app.post("/decrement", function (req, res, next) {
    counter -= 1;
    res.send("The current count has been decreased to " + counter);
})

app.listen(3000, function() {
    console.log("Server is ready and running...");
})