function updateClock(){
    const date = new Date();

    let hours = date.getHours();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();

    let am_pm = "AM";

    if (hours >= 12){
        am_pm = "PM";
        if (hours > 12){
            hours -= 12;
        }
    }
    const clockElement = document.getElementById('digital-clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}:${am_pm}`
}

setInterval(updateClock,1000);
updateClock();