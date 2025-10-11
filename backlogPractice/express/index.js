const express = require("express");
const app = express();
app.use(express.json());
var users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}];

app.get("/", function(req, res) {
    //write logic
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberofHealthyKidneys = johnKidneys.filter((kidneys) => kidneys.healthy == true).length;
    const numberofUnhealthyKidneys = numberOfKidneys - numberofHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    })
})


app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json ({
        msg : "Done"
    })
})
app.put("/", function(req, res) {
    for(let i = 0; i < users[0].kidneys.length; i++) {
       users[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealthy kidneys
app.delete("/", function(req, res) {
    const newKidneys = [];
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy == true) {
            newKidneys.push({
                healthy : true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg : "done"})
})

app.listen(3000);