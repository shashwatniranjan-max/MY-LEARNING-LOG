function triangle(n) {
    for(let i = 0; i < n; i++) {
        let rowString = "";
        for(let j = 0; j <= i; j++) {
            rowString += "*";
        }
        console.log(rowString);
    }
} 
triangle(5);