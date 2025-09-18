function pad(num){
    return num.toString().padStart(2, "0");
}
function showTime(){
    const now = new Date;
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    const time24 = `${hours}:${minutes}:${seconds}`;

    const hour = now.getHours() % 12 || 12;
    const hours12 = pad(hour);
    const ampm = now.getHours() >= 12 ? "pm" : "am" ;
    const time12 = `${hours12}:${minutes}:${seconds}:${ampm}`

    console.clear();

    console.log("24-hour format", time24);
    console.log("12-hour format", time12);
}

setInterval(showTime, 1000);

showTime();