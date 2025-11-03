const express = require("express");
const app = express();
app.use(express.json());
const users = [{
    name : "John",
    kidneys : [{
        healthy : false,
    }]
}]
app.get('/', function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberofkidneys = johnKidneys.length;
    let numberofhealthykidneys = 0;
    for(let i = 0; i < numberofkidneys; i++) {
        if(johnKidneys[i].healthy) {
            numberofhealthykidneys = numberofhealthykidneys + 1;
        }
    }
    let numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})
// in get request when we need to get an input through query parameters we need to use req.query.n (for an input "n"), 
// but for post request you do send query parameter to the body
app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy,
    })
    res.json({
       msg : "Done"
    })
})
app.put("/", function(req, res) {
    let foundAndUpdated = false;
    let johnKidneys = users[0].kidneys.length;
    for(let i = 0; i < johnKidneys; i++) {
        if(users[0].kidneys[i].healthy === false) {
        users[0].kidneys[i].healthy = true;
        foundAndUpdated = true;
        break;
}}
    if(foundAndUpdated) {
        res.json({
            msg : "converted the unhealthy kidney to the healthy kidney"
        })
    } else {
        res.status(400).json({
            msg : "All kidneys are already healthy"
        })
    }
})
app.delete("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    if(atleastUnhealthyKidneys()) {
        const filteredKidneys = johnKidneys.filter(healthy => healthy.healthy === true);
        users[0].kidneys = filteredKidneys;
        res.json({
            msg : "deleted all the unhealthy kidneys"
        })
    } else {
        res.status(411).json({
            msg : "there is no unhealthy kidneys to remove "
        })
    }
})
function atleastUnhealthyKidneys() {
    let atleastoneunhealthykidney = false;
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) {
            atleastoneunhealthykidney = true;
        }
    }
    return atleastoneunhealthykidney;
}
app.listen(3000);























// // class User {
// //     static userCount = 0;
// //     constructor(Username) {
// //         this.Username = Username;
// //         User.userCount++;
// //     }
// // }
//  /************Inheritance in classes************* */
//  class Animal{
//     alive = true;
//     eat() {
//         console.log(`is ${this.name} is eating`);
//     }
//     sleep() {
//         console.log(`this ${this.name} is sleeping`);
//     }
//  }
//  class rabbit extends Animal {
//     name = "rabbit"
//  }
//  class fish extends Animal {
//     name = "fish"
//  }
//  const Rabbit = new rabbit();
//  const Fish = new fish();
//  console.log(Rabbit.sleep())