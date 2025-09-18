// Without using setInterval, try to code a counter in Javascript. 

let counter = 0;
function timer() {
    console.clear();
    console.log(counter)
    setTimeout(timer, 1000);
    counter++;
}
timer();