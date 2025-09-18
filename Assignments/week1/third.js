// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");
function readFile(filename) {
    fs.readFile(filename, "utf-8", (err, data) => {
        if(err) console.log("error reading this file" + err) 
            else console.log(data);
    })
}

readFile("a.txt")

console.log("hey there");
let c = 0;
for(let i = 0; i < 10000000000; i++) {
    c++;
}
console.log("hi")