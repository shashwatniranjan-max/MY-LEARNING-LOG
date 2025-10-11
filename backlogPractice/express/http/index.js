const express = require("express");
const app = express();
// route handlers 
// assignment : make a todo app to store data in memore(variable)
// assignment 2 : store data in a file like a todo.json file
// assignment 3 : add user logic, like user 1 has different todo and user2 has different todos
app.get("/", function(req, res) {
    res.send("Hello world")
})
app.post("/", function(req, res) {
    res.send("Hello world")
})
app.get("/asdfa", function(req, res) {
    res.send("hello from asdfa")
})
app.listen(3000);