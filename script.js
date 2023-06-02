let displayTime
let alarmTime
let alarmInput

function getTime() {
    let date = new Date();
    displayTime = document.getElementById("displayTime").innerHTML=date.toLocaleTimeString();
}

function convertTime(time) {
    TA = time.split(":");
    let h = parseInt(TA[0]) % 12;
    let s = parseInt(TA[1]); 
    let amOrPm = (h <= 12) ? 'AM' : 'PM';
    let hours = (h = 0) ? 12 : h;
    return `${hours}:${s}:00 ${amOrPm}`
}

function setAlarm() {
alarmInput = document.getElementById("alarmInput").value
let newAlarm = document.createElement("p");
newAlarm.innerText = convertTime(alarmInput);
document.getElementById("displayContainer").appendChild(newAlarm);
newAlarm.addEventListener('click', () => {
    newAlarm.remove();
})

}



setInterval(console.log(alarmInput), 5000);
setInterval(getTime, 1000);