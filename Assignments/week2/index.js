// let counter = 0;
// function timer (){
//     console.log(counter);
//     counter++
// }
// setInterval(timer, 1000)
// let counter = 0;
// function timer(){
//     console.log(counter)
//     counter++;
//     return setTimeout(timer, 1000) 
// }
// timer();
// 

// const myFunction = require("./promise");
// myFunction(2).then(() => console.log("2 seconds later"))

// const sleep = require("./promise")
// sleep(5000).then(() => console.log("five seconds have passed"))

// function pad(num){
//     return num.toString().padStart(2, "0");
// }

// function showTime(){
//     const date = new Date;
//     const hours = pad(date.getHours());
//     const minutes = pad(date.getMinutes());
//     const seconds = pad(date.getSeconds());

//     const newHours = pad(date.getHours() % 12 || 12);
//     const ampm = date.getHours >= 12 ? "pm" : "am";
//     const time24 = `${hours}:${minutes}:${seconds}`;
//     const time12 = `${newHours}:${minutes}:${seconds}${ampm}`;

//     console.clear();
//     console.log("24-Hour format ", time24);
//     console.log("12-Hour format ", time12);
// }
// setInterval(showTime, 1000);
// showTime();


// ***** Settimeout synchronous program ******* //
function setTimeoutSync(ms) {
    const start = Date.now();
    while(Date.now() - start !== ms) {
        
    }
    console.log(`${ms/1000} seconds have passed`)
    return ;
}
setTimeoutSync(5000);
console.log("hello world")