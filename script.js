let displayTime
let alarmTime = []
let alarmInput
function getTime() {
    let date = new Date();
    displayTime = document.getElementById("displayTime").innerHTML=date.toLocaleTimeString();

}

function setAlarm() {
alarmInput = document.getElementById("alarmInput").value
console.log(alarmInput.toLocaleTimeString())
}

setInterval(getTime, 1000);