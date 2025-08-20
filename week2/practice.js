// const fs = require("fs");
// function read(err, data){
//     if(err){
//         console.log("error reading file", err);
//     }
//     console.log(data);  
// }
// const contents = fs.readFile("a.txt", "utf8", read);
// console.log("hello");
// setTimeout(() => {
//     console.log("this message is delayed by 1seconds");
// }, 3000);

// let c = 0;
// for (let i = 0; i < 10000000000; i++) {
//     c++;
// } 
// console.log("hey there");
// function random(resolve){
//     setTimeout(resolve, 3000)
// }

// let p = new Promise(random); // supposed to return you something 

// // using the eventual value return by promise      
// function callback(){
//     console.log("promise succeded")
// }


// p.then(callback)
//  create the promisified version of fs.readfile, fs.writefile, cleanfile

//  const fs = require("fs")
//  function calling(resolve){
//     resolve();
//  }

//  let r = new Promise(calling)
// function read(err, data){
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// }

//  function print(){
//     fs.readFile("a.txt", "utf-8", read)
//  }
//  r.then(print);
// better way

const fs = require("fs")
function readTheFile(sendthefinalvaluehere){
    fs.readFile("a.txt", "utf8", (err, data) => {
        if(err){
            console.log("error reading this file")
        }
        sendthefinalvaluehere(data)
    })
}
function readFile(filename){
    return new Promise(readTheFile);
}
const p = readFile()
function callback(contents){
    console.log(contents)
}
p.then(callback)


