// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require("fs");
fs.writeFile("a.txt", "asdlkfjasdkljfjdskfjakls;djf", (err) => {
    if(err) console.log("error reading file")
});