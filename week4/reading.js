const fs = require("fs");
function main(path) {

    fs.readFile(path, "utf-8", (err, data) => {
        let total = 0;
        for(let i = 0; i < data.length; i++) {
            if(data[i] == " ") {
                total += 1;
            }
        }
        console.log(total + 1);
    })
}

main(process.argv[2])