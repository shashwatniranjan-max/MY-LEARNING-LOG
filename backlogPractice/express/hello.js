const express = require("express");
const app = express();
app.use(express.json());
var users = [{
    name : "John",
    kidneys : [{
        healthy : false,
    }]
}]
app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    const healthyKidneys = johnKidneys.filter((kidneys) => kidneys.healthy == true).length;
    const unhealthyKidneys = numberOfKidneys - healthyKidneys;
    res.json({
        numberOfKidneys,
        healthyKidneys,
        unhealthyKidneys,
    })
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy,
    })
    res.send({
        msg : "Done"
    })
})

app.put("/", function(req, res) {
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++) {
        newKidneys.push({
            healthy: true,
        })
    }
    users[0].kidneys = newKidneys;
    res.send({});
})

app.delete("/", function(req, res) {
    // if there are no kidneys to remove or any of such cases you should return a status code like (404 etc)
    let newKidneys = [];
    for(let  i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy == true) {
            newKidneys.push({
                healthy : true,
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.send({msg : "Done"})
})




app.listen(3000)