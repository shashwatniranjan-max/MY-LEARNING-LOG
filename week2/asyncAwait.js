// function setTimeoutPromisified(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms);
//     });
// }
// function callback(){
//     console.log("3 second has passed")
// }
// setTimeoutPromisified(3000).then(callback)

// callback hell and method to deal with it  

// function step3done(){
//     console.log("hey there")
// }
// function step2done(){
//     console.log("hello");
//         setTimeout(step3done, 5000)
   
// }
// function step1done(){
//     console.log("hi");
//     setTimeout(step2done, 3000)
// }
// setTimeout(step1done, 1000)

//using promises

// function setTimeoutPromisified(ms){
//     return new Promise(function(resolve){
//         setTimeout(resolve, ms)
//     })
// }
// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("hello");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("hi there");
//         })
//     })
// })

// promise chaining
function setTimeoutPromisified(ms){
    return new Promise(function(resolve){
        setTimeout(resolve, ms)
    })
}
// setTimeoutPromisified(1000).then(function(){
//     console.log("hi");
//     return setTimeoutPromisified(3000)
// }).then(function(){
//     console.log("hello");
//     return setTimeoutPromisified(5000)
// }).then(function(){
//     console.log("hey there");
// })

// async await syntax

// async function solve(){
//     await setTimeoutPromisified(1000)
//     console.log("hi")
//     await setTimeoutPromisified(3000)
//     console.log("hello")
//     await setTimeoutPromisified(5000)
//     console.log("hey there")
// }
// solve();

// const fs = require("fs");

// function readFilePromisified(filePath) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(filePath, "utf-8", function (err, data) {
//       if (err) {
//         reject("Error while reading file");
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// function onDone(data) {
//   console.log(data);
// }

// function onError(err) {
//   console.log("Error: " + err);
// }

// readFilePromisified("a.txt").then(onDone).catch(onError);


 const fs = require("fs")
 function readFilePromisified(filename){
    return new Promise(function(resolve, reject){
        fs.readFile(filename, "utf8", function(err, data){
            if(err){
                reject("Error while reading this file")
            } else resolve(data)
        })
    })
 }
function onData(data){
    console.log(data)
}
function onError(err){
    console.log("Error" + err)
}
readFilePromisified("a.txt").then(onData).catch(onError);
