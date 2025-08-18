// const password = prompt("Enter your password:");
// if (password.length > 6) {
//     console.log("Password is valid.");  
// if (password.includes(" ")) {
//         console.log("Password should not contain spaces.");
//     }   
// }
// const userInput = prompt("ennter some text:");
// if (userInput) {
//     console.log("Truthy value entered.");
// } else {
//     console.log("Falsy value entered.");
// }
// logical OR
// const age = 11;
// if (age < 5 || age >= 65) 
// {
//     console.log("FREE");
// } else if (age<10) {
//     console.log("$10");
// } else if (age < 65) {
//     console.log("$20"); 
// } 
// const firstname = prompt("enter your first name:");
// if(!firstname) {
//     firstname = prompt("Please enter your first name:");
// }

// const day = 2;
// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;      
//     default:
//         console.log("Invalid day");
//         break;
// }
// for (let i = 100; i > 0; i-=10) {
//     console.log(




//             THIS IS A GUESSING GAME          //
// let maximum = parseInt(prompt("enter the maximum number !"));
// while (!maximum) {
//     maximum = parseInt(prompt("Please enter a valid maximum number:"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("enter your first guess!"));]
// attempts = 1;
// while(guess !== targetNum) {
//     attempts++;
//     if (guess > targetNum) {
//         guess = parseInt(prompt("Too high! Try again:")); 
//     } else {
//         guess = parseInt(prompt("Too low! Try again:"));  
//     }

// }
// console.log("Congratulations! You guessed the number!");
// console.log(`It took you ${attempts} attempts to guess the number ${targetNum}.`);

         //       FUNCTIONS IN JAVASCRIPT       //
//  function singSong() {
//     console.log("DO")
//     console.log("RE")
//     console.log("ME")
//  }      
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();

// function greet(firstName, LastName){
//    console.log(`hi there , ${firstName} ${LastName[0]}.`);
// }
// function repeat(str, num){
//    let result = "";
//    for(let i =0; i < num; i++){
//     result += str;
//    }
//    console.log(result);
// }
// const add = function add(x, y) {
//    return (x + y);
// }

// function callTwice(func) {
//     func();
//     func();
// }
// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }
// callTwice(rollDie);
// function outer() {
//     let hero = "Black Panther";
//     function inner() {
//         let cryforhelp = `${hero} , please help me!`;
//         console.log(cryforhelp);
//     }
//     inner();
// }

// // higher order function 
// function calltwice(func) {
//     func();
//     func();
// }
// function laugh() {
//     console.log("ha ha ha ha ha");
// }
// function makeMysteryFunc() {
//     const rand = Math.random();
//     if(rand > 0.5) {
//         return function() {
//             console.log("You are awesome!");
//         } 
//         } else {
//             return function() {
//                 alert("you have been infected by a virus");
//                 alert("stop trying to close this window");
//                 alert("stop trying to close this window");
//                 alert("stop trying to close this window");
//                 alert("stop trying to close this window");
//             }
//     }
// }

// const myMath = {
//     multiply: function(x,  y) {
//         return x * y; 
//     }, 
//     square: function(x) {
//         return x * x;
//     }
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// numbers.forEach(function (el) {
//     console.log(el);
// });
// const texts = [ "skld", "djkfkj", "djkf", "djkfkjf", "djkfkjf"];
// const caps = texts.map(function(t) {
//     return t.toUpperCase();
// })
// const isEven = num => num % 2 === 0;
// const rolldie = ()  => Math.floor(Math.random() * 6) + 1;
// const add = (x, y) => x + y;
// setTimeout(() => {
//     console.log("This message is delayed by 3 seconds");
// }, 3000)
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// nums.forEach( num => console.log(num))

// function multiply(a, b = 1){
//     return a * b;
// } 
const fs = require("fs");

const contents = fs.readFile("a.txt", "utf8"); // reads the file asynchronously
console.log(contents);

const newcontents = fs.readFileSync("b.txt", "utf8");
console.log(newcontents);   