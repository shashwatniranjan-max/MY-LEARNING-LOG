
// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms)); // return an instance or object of promise class
// }
// function callback(){
//     console.log("3 seconds have passed ");

// }
// setTimeoutPromisified(3000).then(callback) //Promise based approach, instead of setTimeOut(callback, 3000): call back version;, syntactically cleaner . 


// function promiseCallback(resolve){
//     setTimeout(resolve, 3000)
// }

// function setTimeoutPromisified() {
//     return new Promise(promiseCallback) //whenever the first argument of the promisecallback will get called which is resolve in this case the main function will get call by .then(main)
// }
// function main(){
//     console.log("main is called")
// }
// setTimeoutPromisified().then(main);
// console.log("top of the file")
// function readthefile(resolve){ 
//     setTimeout(function() {
//         console.log("callback based set timeout completed");
//         resolve();
//     }, 3000)
// }

// function settimeoutpromisified(filename){
//     return new Promise(readthefile)
// }

// const p = settimeoutpromisified();
// function callback(){
//     console.log("timer is done")
// }

// p.then(callback);

// console.log("end of the file")


class Promise2 {
    constructor(fn){
        this.fn = fn ;
        this.fn(() => {
            this.resolve();
        })
    }
    then(callback) {
        this.resolve = callback;
    }
}
function readthefile(resolve){
    setTimeout(function(){
        console.log("call based timeout completed ")
        resolve();
    }, 3000)
}

function settimeoutpromisified(){
    return new Promise2(readthefile)
}
const p = settimeoutpromisified()
function callback(){
    console.log("callback has been called")
}
p.then(callback)