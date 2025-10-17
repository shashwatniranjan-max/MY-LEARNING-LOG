// let counter = 0;
// function timer() {
//    console.clear();
//    console.log(counter);
//    counter++;
//    setTimeout(timer, 1000)
// }
// timer();
// const fs = require("fs");
// const read = fs.readFileSync("a.txt", "utf-8").trim().split(" ").filter(word => word != "").join(" ")
// fs.writeFile("a.txt", read, (err) => {
//     if(err) {
//         console.log("error writing file : " + err)
//         return ;
//     }
//     console.log("file written successfully!")
// })

// const sleep = require("./promise")
// async function demo() {
//     console.log("start");
//     await sleep(3000);
//     console.log("3 seconds have been passed")
// }
// demo();

// promise chaining
function setTimeoutPromisified(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms)
    })
}
// setTimeoutPromisified(1000).then(() => {
//     console.log("1 second has passed");
//     return setTimeoutPromisified(3000)
// }).then(() => {
//     console.log("3 seconds have passed");
//     return setTimeoutPromisified(5000);
// }).then(() => {
//     console.log("5 seconds has passed")
// })
// async function timeout() {
//     await setTimeoutPromisified(1000);
//     console.log(" hi ");
//     await setTimeoutPromisified(3000);
//     console.log("hi there");
//     await setTimeoutPromisified(5000);
//     console.log("hello world");
// }
// timeout();
const fs = require("fs")
function readFilePromisified(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if(err) {
                reject(err);
            }
            resolve(data);
        })
    })
}
async function read() {
    await readFilePromisified("a.txt");
    console.log("file read successfully");
}
read();