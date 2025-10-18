const express = require("express");
const app = express();



function isOldEnoughMiddleware(req, res, next) {
    const age = req.query.age;
    if(age >= 14) {
        next();
    }
    else {
        res.json({
            msg : "can't access"
        })
    }
}
app.get("/ride1", isOldEnoughMiddleware, function(req, res){
    res.json({
        msg : "accessed successfully"
    })
})
app.listen(3000);