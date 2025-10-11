function showTime() {
    const now = new Date();
    //24 hour format 
    let hours24 = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    //12 hour format; 
    let hours12 = now.getHours() %12 || 12;
    hours12 = hours12.toString().padStart(2, "0");
    let ampm = (now.getHours() >= 12) ? "pm" : "am";
    let clock24 = `${hours24}:${minutes}:${seconds}`;
    let clock12 = `${hours12}:${minutes}:${seconds}`;
    console.clear();
    console.log("24hour format " + clock24 + ampm);
    console.log("12hour format " + clock12 + ampm);
}
setInterval(showTime, 1000)