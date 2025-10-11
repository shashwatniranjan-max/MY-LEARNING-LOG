const fs = require("fs");
function readFilePromisified(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}
readFilePromisified("hello.js").then((d) => {
    console.log(d)
}).catch((e) => {
    console.log("Error Reading File " + e);
})