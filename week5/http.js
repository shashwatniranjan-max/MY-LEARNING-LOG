const express = require("express");
const app = express();
//route handlers;
// assignment : make a todo application , extract the todo title from the body. do todos.push at post , todos.splice at delete, also create the random id for todo, at get endpoint you get the todos back , also another endpoint for updating a todo
// store the data in the file , foundation for databases (hard way), 
/* add user logic eg: let users = {
    1 : {
        todos:
    },
    2 : {
        todos:
    }
} */
let todos = [];
 app.post("/", function(req, res) {
    todos.push({
        title, 
        id
    })
 })

app.get("/", (req, res) => {
    res.json({
        name : "shashwat"
    })
})
app.get("/asd", function(req, res) {
    
    res.send("<i> hi there </i>");
})

app.post("/asd", (req, res) => {
    res.send("hello world from the post asd endpoint")
})
app.listen(3000); //which port