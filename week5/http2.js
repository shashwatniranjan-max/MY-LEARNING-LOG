const express = require("express");
function calculateSum(n) {
    let ans = 0;
    for(let i = 1; i <= n; i++) {
        ans = ans + i;
    }
    return ans;
}
const app = express();
app.get("/", function(req, res) {
    const n = req.query.n;
    const sum = calculateSum(n);
    res.send("hi, your answer is " + sum);
  
})
app.listen(3000);