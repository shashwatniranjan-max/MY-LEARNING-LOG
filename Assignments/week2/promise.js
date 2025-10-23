// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, ms)
//     })
// }
// module.exports = setTimeoutPromisified;
// const fs = require("fs")
// function readFilePromisified(filename) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filename, "utf-8", (err, data) => {
//             if(err) reject(err);
//             else resolve(data);
//         })
//     })
// }
// async function read() {
//     try {
//         const data = await readFilePromisified("a.txt")
//         console.log(data)
//     } catch(err) {
//         console.log("error reading file" , err)
//     }
// }
// read();

// function wait(ms , value) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(value)
//         }, ms)
//     })
// }
// const p1 = wait(1000, "A");
// const p2 = wait(2000, "B");
// const p3 = wait(3000, "C");
// Promise.all([p1, p2, p3])
//    .then((result) => {
//     console.log(result);
//     console.log(result[1]);
//    })
//    .catch(err => console.log("error resolving", err))

function wait1(t1) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, t1)
    })
}
function wait2(t2) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, t2)
    })
}
function wait3(t3) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, t3)
    })
}
async function calculateTime(t1, t2, t3) {
    const start = Date.now();
    await Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
    const end = Date.now();
    return end - start;
}
(async() => {
    const timetaken = await calculateTime(1000, 2000, 3000);
    console.log("timetaken ", timetaken, "ms");
})();

