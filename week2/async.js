// const fs = require("fs");
// function read(err, data){
//     if(err){
//         console.log("Error reading file:", err);
//         return 1;
//     }
//     console.log(data);
// } // error first function. 

// fs.readFile("sdfsdfs.txt", "utf-8", read); // reads the file asynchronously , readFile is a asynchronous function, whenever I/O operation will be done it will call the callback function read

// fs.readFile("b.txt", "utf-8", read); //reads file asynchronously in same way
console.log("hi ");
function timeout() {
    console.log("This message is delayed by 1 seconds");
}
setTimeout(timeout, 1000); // setTimeout is a asynchronous function, it will call the timeout function after 3 seconds
let c = 0;
for (let i = 0; i < 1000000000; i++) {
    c++;
} // this loop will take some time to execute, it will block the event loop until it finishes
console.log("This message is printed after the loop"); // this will be printed before the timeout function because setTimeout is asynchronous, even tho setTimeout takes 1 second to execute, the loop will block the event loop until it finishes, so this message will be printed before the timeout function,thread is busy executing the loop, it will not execute the timeout function until the loop finishes
