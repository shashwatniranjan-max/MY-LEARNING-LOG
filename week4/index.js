const chalk = require("chalk")
const path = require("path");
console.log(path.join(__dirname, "index.js"))   //join multiple paths together
console.log(path.join(__dirname, "../../index.js", "/projects"));
console.log(__dirname);  //prints the name of the directory you are in , __dirname is a global variable in node;

const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split(" ").length;
        console.log(`There are ${lines} words in ${file}`);
      }
    });
  });

program.parse();

// const fs = require("fs");

//   program.command("count")
//     .description("count the number of words in a file")
//     .argument("<file>", "file to count")
//     .action((file) => {
//       fs.readFile(file, "utf-8", (err, data) => {
//         if(err) {
//           console.log(err)
//         } else {
//           const words = data.split(" ").length
//           console.log(`there are ${words} words in ${file}`)
//         }
//       })
//     })

// program.parse();