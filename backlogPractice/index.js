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

const sleep = require("./promise")
async function demo() {
    console.log("start");
    await sleep(3000);
    console.log("3 seconds have been passed")
}
demo();